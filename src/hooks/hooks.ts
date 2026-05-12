import { AfterStep, AfterAll } from '@cucumber/cucumber';

let passed = 0;
let failed = 0;
let skipped = 0;

AfterStep(function ({ result }: any) {
  if (!result) return;
  switch (result.status) {
    case 'PASSED':
      passed++;
      break;
    case 'FAILED':
      failed++;
      break;
    case 'SKIPPED':
    case 'PENDING':
    case 'UNDEFINED':
    case 'AMBIGUOUS':
      skipped++;
      break;
  }
});

AfterAll(function () {
  const total = passed + failed + skipped;
  const line = '─'.repeat(50);
  console.log(`\n${line}`);
  console.log(`Step Results: ${passed} passed, ${failed} failed, ${skipped} skipped (${total} total)`);
  console.log(`${line}\n`);
});
