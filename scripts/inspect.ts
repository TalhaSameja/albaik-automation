import { remote } from 'webdriverio';
import { config as dotenvConfig } from 'dotenv';
import * as fs from 'fs';
import * as path from 'path';
import * as readline from 'readline';
import { getCapabilities } from '../config/capabilities';

dotenvConfig();

const OUTPUT_DIR = path.resolve(__dirname, '..', 'inspector-output');
const APPIUM_HOST = process.env.APPIUM_HOST || '127.0.0.1';
const APPIUM_PORT = Number(process.env.APPIUM_PORT || 4723);

function timestamp(): string {
  return new Date().toISOString().replace(/[:.]/g, '-');
}

function ensureOutputDir(): void {
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
}

async function dump(driver: WebdriverIO.Browser, label: string): Promise<void> {
  const stamp = timestamp();
  const safeLabel = label.replace(/[^a-z0-9-_]/gi, '_') || 'screen';

  const xmlPath = path.join(OUTPUT_DIR, `${stamp}_${safeLabel}.xml`);
  const pngPath = path.join(OUTPUT_DIR, `${stamp}_${safeLabel}.png`);

  const source = await driver.getPageSource();
  fs.writeFileSync(xmlPath, source, 'utf8');

  const screenshotB64 = await driver.takeScreenshot();
  fs.writeFileSync(pngPath, Buffer.from(screenshotB64, 'base64'));

  console.log(`\n  XML  → ${xmlPath}`);
  console.log(`  PNG  → ${pngPath}`);

  const interesting = source.match(/(resource-id|content-desc|text)="[^"]+"/g) || [];
  const unique = Array.from(new Set(interesting)).slice(0, 25);
  if (unique.length) {
    console.log('\n  Top attributes on this screen:');
    for (const attr of unique) console.log('    ' + attr);
  }
}

function prompt(rl: readline.Interface, question: string): Promise<string> {
  return new Promise((resolve) => rl.question(question, resolve));
}

async function main(): Promise<void> {
  ensureOutputDir();

  console.log(`Connecting to Appium at http://${APPIUM_HOST}:${APPIUM_PORT} ...`);
  const driver = await remote({
    hostname: APPIUM_HOST,
    port: APPIUM_PORT,
    path: '/',
    logLevel: 'warn',
    capabilities: getCapabilities() as WebdriverIO.Capabilities,
  });

  console.log('\nSession started. App should be open on the device.\n');
  console.log('Commands:');
  console.log('  <label> + Enter  → dump page source + screenshot for the current screen');
  console.log('  Enter (no label) → dump as "screen"');
  console.log('  q + Enter        → quit\n');

  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });

  try {
    while (true) {
      const answer = (await prompt(rl, 'inspect> ')).trim();
      if (answer.toLowerCase() === 'q' || answer.toLowerCase() === 'quit') break;
      await dump(driver, answer || 'screen');
    }
  } finally {
    rl.close();
    await driver.deleteSession();
    console.log('Session closed.');
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
