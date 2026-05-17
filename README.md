# 🍗 Albaik Cross-Platform Test Automation Framework

Welcome to the **Albaik Test Automation Framework**! 

This project is designed to automate the end-to-end testing of the Albaik application. What makes this framework special is that it is a **Cross-Platform** automation solution, meaning it seamlessly drives and coordinates tests across both a Mobile App (Android) and a Web Browser (Chrome/Firefox/Edge) in a single test run.

### 📖 Layman's Explanation: What does this framework do?
Imagine you are a customer ordering food on your phone, and a restaurant manager checking that order on a computer in the kitchen. This framework does exactly that, but entirely automatically!

1. **Mobile Action**: It acts as a robot that opens the Albaik Android app on a virtual phone (emulator) and taps through the menus to place a food order.
2. **Data Memory**: Once the order is placed, the robot reads the screen, finds the "Order ID" (e.g., `#123456`), and saves it in its memory.
3. **Web Action**: Next, the robot opens Google Chrome on a computer, logs into the restaurant's Admin Panel, searches for that exact Order ID.
4. **Verification**: It verifies if the order details (store name, delivery type, status) match perfectly. 

If everything matches, the test passes!

---

## 🛠️ Tools & Technologies Used

This framework is built using industry-standard tools for reliable and robust automation:
- **WebdriverIO (v9.x)**: The core testing framework that drives both mobile and web browsers.
- **Appium & UiAutomator2**: Used to automate interactions with the Android mobile application.
- **Selenium (Chrome/Firefox/Edge)**: Used to automate the web-based Admin Panel.
- **Cucumber (BDD)**: Allows us to write tests in plain English (Gherkin format: `Given`, `When`, `Then`).
- **TypeScript**: Adds strong typing to JavaScript, making the code safer and easier to maintain.
- **Node.js**: The runtime environment that executes all our code.
- **Allure Reports**: Generates beautiful, visual HTML reports showing test results and screenshots of any failures.

### 🌟 Features Implemented
- ✅ **Cross-Platform Data Sharing**: Custom `DataStore` service enables seamless data passing between Mobile and Web.
- ✅ **Robust Locators**: Multiple selector patterns (XPath, UiSelector) for flexibility.
- ✅ **Multi-Browser Support**: Configurable to run Web tests on Chrome, Edge, or Firefox.
- ✅ **BDD Format**: Readable plain-english test cases.
- ✅ **Screenshot Capture**: Automatic failure documentation.
- ✅ **Parallel Execution**: Uses multi-instances to speed up test execution.

---

## 🏗️ Complete Architecture & Data Flow

The project follows the **Page Object Model (POM)** pattern, which separates the test steps from the actual UI buttons and inputs.

### Framework Architecture Diagram
```text
┌─────────────────────────────────────────────────────────────┐
│                  CROSS-PLATFORM TEST FRAMEWORK              │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌────────────────────┐         ┌────────────────────┐      │
│  │   Feature Files    │         │   Step Definitions │      │
│  ├────────────────────┤         ├────────────────────┤      │
│  │ CrossPlatform      │────────▶│ CrossPlatformOrder │      │
│  │Order.feature       │         │Steps.ts            │      │
│  └────────────────────┘         └────────────────────┘      │
│          ▲                                  ▼               │
│          │                           ┌─────────────┐        │
│          │                           │  DataStore  │        │
│          │                           │  (Service)  │        │
│          │                           └─────────────┘        │
│          │                                  │               │
│  ┌───────┴──────────────────────┬──────────┴──────────┐     │
│  │                              │                     │     │
│  ▼                              ▼                     ▼     │
│ ┌──────────────────┐  ┌──────────────────┐  ┌────────────┐  │
│ │  Page Objects    │  │   Locators       │  │  BasePage  │  │
│ ├──────────────────┤  ├──────────────────┤  ├────────────┤  │
│ │ Mobile: HomePage │  │ Mobile: Home.ts  │  │ tap()      │  │
│ │ Web: AdminPanel  │  │ Web: AdminPanel  │  │ fill()     │  │
│ └──────────────────┘  └──────────────────┘  └────────────┘  │
│          │                      │                           │
└──────────┼──────────────────────┼───────────────────────────┘
           │                      │
        ┌──▼──────────────────────▼──┐
        │   WebdriverIO Framework    │
        │  + Appium + Selenium       │
        └──┬──────────────────────┬──┘
           │                      │
    ┌──────▼────┐         ┌──────▼─────┐
    │   Mobile  │         │     Web    │
    │  Emulator │         │   Chrome   │
    └────────────┘         └────────────┘
```

---

## ⚙️ Prerequisites & Environment Setup

Before downloading the dependencies, ensure your system has the core tools installed:

1. **Node.js (v14 or higher)**: Download and install from Node.js Official Site. 
   * Check installation: `node -v` and `npm -v`
2. **Android SDK & Emulator**: Install Android Studio, set up a virtual device (e.g., `emulator-5554`), and ensure `ANDROID_HOME` is set in your system variables.
   * Check connection: `adb devices`
3. **Java (JDK 11 or 17)**: Required for Appium and Android SDK. 
   * Check installation: `java -version`
4. **Chrome Browser**: Installed locally for the Web tests.

---

## 📱 Android Emulator Setup Guide

To run the mobile tests, you need a virtual Android device. Here is how to set it up from scratch:

### 1. Which Device to Use?
We recommend using a **Pixel 5 or Pixel 6** device with **Android 11, 12, or 13 (API Level 30-33)**. Ensure you select a system image with **Google Play APIs** included for maximum compatibility.

### 2. How to Install the Emulator
1. Download and install [Android Studio](https://developer.android.com/studio).
2. Open Android Studio and go to **Tools > Device Manager** (or Virtual Device Manager).
3. Click **Create Device**.
4. Select **Pixel 5** (or similar) and click Next.
5. Download a System Image (e.g., **Tiramisu - API 33**) and click Next.
6. Name your AVD (e.g., `emulator-5554` or `Pixel_5_API_33`) and click **Finish**.

### 3. Emulator CLI Commands
While you can start the emulator from Android Studio, doing it via the terminal is faster:
```bash
# List all available emulators you have created
emulator -list-avds

# Start a specific emulator in the background
emulator -avd <Your_AVD_Name> &

# Verify the emulator is connected and ready
adb devices
```
---

## � Installation & Setup Guide

Follow these commands exactly to download all dependencies and set up the project on your laptop.

### 1. Clone the repository
```bash
# Clone the repository
git clone https://gitlab.virtualforce.io/kualitatem/albaik-automation.git
cd albaik-automation
```

### 2. Download & Install Dependencies
This single command will read the `package.json` file and install all required libraries (like WebdriverIO, Cucumber, TypeScript, etc.).
```bash
npm install
```

### 2. Install Appium Globally & Setup Android Driver
```bash
# Install Appium globally
npm install -g appium

# Install the UIAutomator2 driver for Android automation
appium driver install uiautomator2
```

### 3. Setup your Environment Variables (`.env`)
Copy the example `.env` file and configure it for your setup:
```bash
cp .env.example .env
```

**Example `.env` configuration:**
```env
# Target Platform: mobile, web, or cross-platform
TEST_PLATFORM=cross-platform

# Appium / Android config
DEVICE_NAME=emulator-5554
APP_PATH=/path/to/your/albaik.apk
APP_PACKAGE=com.albaik.customer.staging
APP_ACTIVITY=com.albaikapp.MainActivity

# Web / Browser config
BROWSER=chrome
ENV=staging
```

---

## 🏃‍♂️ Commands to Run the Tests

Before running the tests, ensure two things:
1. Your **Android Emulator** is open and running (`adb devices` should show it).
2. **Appium Server** is running. Open a new terminal tab and type: `appium`

### All Test Commands:
```bash
# Run the complete cross-platform flow (Mobile + Web) in staging
npm run test:cross-platform:staging

# Run tests only on Mobile
npm run test:mobile:staging

# Run tests only on Web (Chrome)
npm run test:web:chrome:staging

# Run specific tests by tagging them (e.g., @smoke)
npm run test:cross-platform:tag "@smoke"

# Verify your setup (Runs a script to check if all files exist and Appium/Emulator are ready)
bash scripts/verify-cross-platform-setup.sh
```

### Generating Reports
After a test finishes, you can view a detailed HTML report:
```bash
npm run allure:report
```

---

## 📁 Project Structure Explained

```text
src/
├── features/                  # BDD Scenarios in plain English (.feature files)
│   ├── cross-platform/        # Cross-platform tests
│   ├── mobile/                # Mobile-only tests
│   └── web/                   # Web-only tests
│
├── step_definitions/          # TypeScript code that executes the plain English steps
│   ├── cross-platform/
│   ├── mobile/
│   └── web/
│
├── pages/                     # Page Object Models (Contains methods like click, type)
│   ├── mobile/                # e.g., HomePage.ts (Mobile specific)
│   └── web/                   # e.g., AdminPanel.ts (Web specific)
│
├── locators/                  # UI Selectors (XPaths, IDs, Text matches)
│   ├── mobile/                
│   └── web/
│
└── services/                  
    └── DataStore.ts           # In-memory service to share Order IDs between Web & Mobile
```

---

## 💻 Example Codes (How the framework is built)

Here is an example of how the pieces fit together from start to finish.

### 1. The Feature File (Plain English BDD)
*Location: `src/features/cross-platform/CrossPlatformOrder.feature`*
```gherkin
Feature: Cross-Platform Order Placement and Verification

  @cross-platform @smoke
  Scenario: Place order on mobile and verify on web admin panel
    # Mobile Action
    Given the Albaik application is launched on emulator
    When the user selects "Pickup from a restaurant" 
    Then the order is successfully placed on mobile
    And the order ID is captured and stored
    
    # Web Verification
    Then navigate to the web admin panel
    And search for the captured order ID
    And verify order status is "Processing"
```

### 2. The Step Definition (Connecting English to Code)
*Location: `src/step_definitions/cross-platform/CrossPlatformOrderSteps.ts`*
```typescript
import { Given, When, Then } from '@cucumber/cucumber';
import { HomePage } from '../../pages/mobile/HomePage';
import { AdminPanelPage } from '../../pages/web/AdminPanel';
import { DataStore } from '../../services/DataStore';

const homePage = new HomePage();
const adminPanel = new AdminPanelPage();

Then('the order ID is captured and stored', async () => {
    await homePage.waitForOrderConfirmation();
    const orderId = await homePage.captureOrderId();
    DataStore.set('orderId', orderId); // Save it for the web test!
});

Then('search for the captured order ID', async () => {
    const orderId = DataStore.get('orderId'); // Retrieve it for the web test!
    await adminPanel.searchOrderById(orderId);
});
```

### 3. The Page Object (The Actions)
*Location: `src/pages/web/AdminPanel.ts`*
```typescript
import { BasePage } from '../../common/web/BasePage';
import { AdminPanelLocators } from '../../locators/web/AdminPanel';

export class AdminPanelPage extends BasePage {
    
    async searchOrderById(orderId: string) {
        // 'fill', 'tap', and 'waitForElement' are inherited from BasePage
        await this.waitForElement(AdminPanelLocators.searchOrderField, 5000);
        await this.fill(AdminPanelLocators.searchOrderField, orderId);
        await this.tap(AdminPanelLocators.searchButton);
    }
    
    async getOrderStatus(orderId: string) {
        const locator = AdminPanelLocators.orderStatusCell(orderId);
        return await this.getText(locator);
    }
}
```

### 4. The Locators (Finding Elements on Screen)
*Location: `src/locators/web/AdminPanel.ts`*
```typescript
export const AdminPanelLocators = {
    searchOrderField: '//input[@placeholder="Search Order ID"]',
    searchButton: '//button[contains(text(), "Search")]',
    // Dynamic locator based on the specific Order ID
    orderStatusCell: (orderId: string) => `//tr[contains(., "${orderId}")]//td[@class="status"]`,
}
```

### 5. The DataStore (Sharing Data)
*Location: `src/services/DataStore.ts`*
```typescript
class DataStoreService {
    private store = new Map<string, any>();

    set(key: string, value: any) {
        this.store.set(key, value);
        console.log(`✓ DataStore: Saved [${key}] = ${value}`);
    }

    get(key: string) {
        return this.store.get(key);
    }

    clear() {
        this.store.clear();
    }
}
export const DataStore = new DataStoreService();
```

---

## ✅ First Run Checklist

Before you run the test for the first time, check these boxes:
- [ ] Android emulator is running (`emulator -avd <name>`)
- [ ] Device is verified connected (`adb devices`)
- [ ] Appium server is running in a terminal (`npm run appium` or `appium`)
- [ ] The Albaik `.apk` is located where your `.env` says it is.
- [ ] Web Admin Panel URL and credentials are set correctly in your test data.

**What will happen during the test?**
1. **0-5s**: Test starts initializing.
2. **5-10s**: Web admin panel opens in Chrome (setup step).
3. **10-15s**: Mobile app launches in your Android Emulator.
4. **15-45s**: The automation will click through menus and place an order.
5. **45-55s**: The app shows the success screen; automation extracts the Order ID.
6. **55-70s**: Automation switches to Chrome, searches the ID.
7. **70-80s**: Details are verified and the test passes.

---

## 🛠️ Common Troubleshooting

**1. "appium not found"**
* **Fix:** `npm install -g appium`

**2. "emulator not found in adb devices"**
* **Fix:** Ensure the emulator is booted. Open Android Studio -> Device Manager -> Start Emulator.

**3. App is crashing or not launching on emulator**
* **Fix:** Check if your `.env` variables `APP_PACKAGE` and `APP_ACTIVITY` match exactly what is in the app manifest. Reinstall the app manually on the emulator to check if the APK is corrupted.

**4. "Order not found in admin panel after placement"**
* **Fix:** Sometimes there is a delay between the mobile app placing the order and it syncing to the admin web panel. You may need to add a `browser.pause(5000)` wait time before searching.

**5. Selectors aren't clicking (Timeouts)**
* **Fix:** Open the app manually. If the UI has changed, use `Appium Inspector` (for mobile) or Chrome DevTools (for web) to find the new XPath/ID, and update the respective file in the `locators/` folder.

---

## 📚 Reference: Available Base Methods

These core methods are available in both Mobile and Web Page Objects (because they extend `BasePage`):

| Method | Purpose | Usage Example |
|--------|---------|-------|
| `tap(selector)` | Click an element | `await this.tap(Locators.loginBtn)` |
| `fill(selector, text)` | Clear & fill input | `await this.fill(Locators.emailInput, 'admin@test.com')` |
| `getText(selector)` | Get text from UI | `const txt = await this.getText(Locators.header)` |
| `waitForElement(selector)` | Wait for display | `await this.waitForElement(Locators.popup)` |
| `isDisplayed(selector)` | Check if visible | `const isVisible = await this.isDisplayed(Locators.img)` |
| `scrollTo(selector)` | Scroll to element | `await this.scrollTo(Locators.footer)` |
