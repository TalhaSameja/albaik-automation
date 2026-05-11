# Albaik Mobile Automation Framework

BDD mobile automation framework using WebDriverIO + Appium + Cucumber + TypeScript.

---

## Prerequisites

Make sure you have the following installed:

| Tool | Version | Check |
|---|---|---|
| Node.js | v18+ | `node --version` |
| Java JDK | 11+ | `java -version` |
| Android Studio | Latest | — |
| Appium | 2.x+ | `appium --version` |
| UiAutomator2 driver | Any | `appium driver list --installed` |

If UiAutomator2 is missing, install it:
```bash
appium driver install uiautomator2
```

Set `ANDROID_HOME` if not already set (run in PowerShell as Administrator):
```powershell
[System.Environment]::SetEnvironmentVariable("ANDROID_HOME", "C:\Users\<YOUR_USERNAME>\AppData\Local\Android\Sdk", "User")
$currentPath = [System.Environment]::GetEnvironmentVariable("PATH", "User")
[System.Environment]::SetEnvironmentVariable("PATH", "$currentPath;C:\Users\<YOUR_USERNAME>\AppData\Local\Android\Sdk\platform-tools", "User")
```
Then restart your terminal and verify: `echo $env:ANDROID_HOME`

---

## Setup

**1. Install dependencies**
```bash
npm install
```

**2. Set up your emulator or connect a physical device**

For emulator (Android Studio):
- Open Android Studio → Device Manager → Create Virtual Device
- Pick a hardware profile (e.g. Pixel 7) and a system image (e.g. API 34)
- Start the emulator
- If the screen is blank, run: `adb shell input keyevent 224` to wake it, then `adb shell input swipe 500 1500 500 500` to unlock

For physical device:
- Enable Developer Options and USB Debugging on the device
- Connect via USB
- Run `adb devices` to confirm it's detected

**3. Install the Albaik app on your device/emulator**

If you have an APK, drop it into the `apps/` folder.
If the app is already installed from the Play Store, skip this.

**4. Get your device details**
```bash
# List connected devices
adb devices

# Get Android version
adb shell getprop ro.build.version.release

# Get app package and activity (open the app first, then run)
adb shell dumpsys window | grep mCurrentFocus
```

**5. Configure your `.env` file**

Copy `.env.example` to `.env` and fill in your values:
```
ANDROID_HOME=C:\Users\<YOUR_USERNAME>\AppData\Local\Android\Sdk

DEVICE_NAME=emulator-5554
PLATFORM_VERSION=14.0
UDID=                          # Leave blank for emulator

APP_PATH=./apps/albaik.apk     # Leave blank if app is already installed
APP_PACKAGE=com.albaik.app
APP_ACTIVITY=.MainActivity
```

---

## Running Tests

```bash
# Run all tests
npm test

# Run tests by tag (e.g. @smoke)
npm run test:tag @smoke
```

---

## Reports

After a test run, generate and open the Allure report:
```bash
npm run allure:report
```

---

## Project Structure

```
albaik_mobileAutomation/
├── apps/                          # Place your APK here
├── config/
│   └── capabilities.ts            # Appium device/app capabilities
├── features/                      # Gherkin .feature files only
├── step_definitions/              # Step definition .ts files
├── hooks/
│   └── hooks.ts                   # Extension point for custom Cucumber hooks
├── src/
│   ├── pages/
│   │   └── BasePage.ts            # Reusable page actions (tap, fill, scroll, etc.)
│   └── utils/
│       ├── gestures.ts            # Swipe/scroll helpers
│       └── helpers.ts             # App launch, reset, keyboard helpers
├── .env                           # Your local config (do not commit)
├── .env.example                   # Config template
└── wdio.config.ts                 # Main framework config
```

---

## Finding Element Locators (Appium Inspector)

Before writing any test, you need to inspect the app's elements to get their locators. Use **Appium Inspector** for this.

**Install Appium Inspector**
Download the latest release from: https://github.com/appium/appium-inspector/releases
Install and open it.

**Start a session**

1. Make sure your emulator is running and the Albaik app is installed
2. Start the Appium server in a terminal:
   ```bash
   appium
   ```
3. In Appium Inspector, set the connection details:
   ```
   Remote Host: localhost
   Remote Port: 4723
   Remote Path: /
   ```
4. Add these capabilities and click **Start Session**:
   ```json
   {
     "platformName": "Android",
     "appium:deviceName": "emulator-5554",
     "appium:automationName": "UiAutomator2",
     "appium:appPackage": "your.app.package",
     "appium:appActivity": "your.app.activity",
     "appium:noReset": true
   }
   ```

**Find your locator**

Once the session starts, you'll see a live screenshot of the app. Click any element and Appium Inspector will show its attributes in the right panel. Use them in this priority order:

| Priority | Attribute | WDIO Selector Syntax | Example |
|---|---|---|---|
| 1st | `accessibility id` (content-desc) | `~value` | `~login_button` |
| 2nd | `resource-id` | `android=new UiSelector().resourceId("id")` | `android=new UiSelector().resourceId("com.albaik.app:id/btn_login")` |
| 3rd | `text` | `android=new UiSelector().text("value")` | `android=new UiSelector().text("Login")` |
| Last | `xpath` | `//ClassName[@attr="value"]` | `//android.widget.Button[@text="Login"]` |

> Prefer `accessibility id` and `resource-id` over XPath — they are faster and more stable.

---

## Adding Tests

**1. Create a feature file** under `features/`
```gherkin
Feature: Login

  @smoke
  Scenario: User logs in with valid credentials
    Given the user is on the login screen
    When the user enters valid credentials
    Then the user should see the home screen
```

**2. Create a Page Object** under `src/pages/` extending `BasePage`
```typescript
import { BasePage } from './BasePage';

class LoginPage extends BasePage {
  private usernameField = '~username_input';
  private passwordField = '~password_input';
  private loginButton   = '~login_button';

  async enterUsername(username: string) { await this.fill(this.usernameField, username); }
  async enterPassword(password: string) { await this.fill(this.passwordField, password); }
  async tapLogin()                       { await this.tap(this.loginButton); }
}

export default new LoginPage();
```

**3. Create a step definition** under `step_definitions/`
```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import LoginPage from '../../src/pages/LoginPage';

Given('the user is on the login screen', async () => {
  await LoginPage.waitForElement('~login_screen');
});

When('the user enters valid credentials', async () => {
  await LoginPage.enterUsername('testuser');
  await LoginPage.enterPassword('password123');
  await LoginPage.tapLogin();
});

Then('the user should see the home screen', async () => {
  await LoginPage.waitForElement('~home_screen');
});
```
