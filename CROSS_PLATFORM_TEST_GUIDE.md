# Cross-Platform Test Setup Guide

## Overview
This cross-platform test scenario (`CrossPlatformOrder.feature`) demonstrates:
1. Opening the restaurant panel in Chrome (web)
2. Opening the mobile application in an emulator
3. Placing an order through the mobile app
4. Capturing the order ID
5. Verifying order details in the web admin panel

## Test Architecture

### Components
- **Mobile Component**: Handles order placement through the Albaik mobile app
- **Web Component**: Handles order verification through the admin panel
- **Data Store**: Shares data (Order ID, status, etc.) between mobile and web sessions
- **Cross-Platform Steps**: Orchestrate interactions across both platforms

### Test Flow
```
┌─────────────────────────────────┐
│ Start: Web Admin Panel (Chrome) │
└────────────────┬────────────────┘
                 │
        ┌────────▼────────┐
        │ Mobile: Place   │
        │ Order via App   │
        └────────┬────────┘
                 │
        ┌────────▼────────┐
        │ Capture Order ID│
        │ Store in        │
        │ DataStore       │
        └────────┬────────┘
                 │
        ┌────────▼────────┐
        │ Return to Web   │
        │ Search Order ID │
        └────────┬────────┘
                 │
        ┌────────▼────────┐
        │ Verify Details  │
        │ & Status        │
        └─────────────────┘
```

## Running the Test

### Prerequisites
1. **Android Emulator**: Running and accessible
   ```bash
   # Check emulator connection
   adb devices
   ```

2. **Appium Server**: Running locally
   ```bash
   appium
   ```

3. **Environment Variables**: Set in `.env`
   ```env
   TEST_PLATFORM=cross-platform
   DEVICE_NAME=emulator-5554
   APP_PATH=/path/to/app.apk
   APP_PACKAGE=com.albaik.app
   APP_ACTIVITY=com.albaik.MainActivity
   ENV=staging
   ```

### Run Cross-Platform Test
```bash
# Run with cross-platform mode
TEST_PLATFORM=cross-platform npm test

# Or with specific tags
TEST_PLATFORM=cross-platform npm test -- --tags @cross-platform
```

### Run Individual Platforms
```bash
# Mobile only
TEST_PLATFORM=mobile npm test

# Web only
TEST_PLATFORM=web npm test
```

## File Structure

```
src/
├── features/
│   ├── cross-platform/
│   │   └── CrossPlatformOrder.feature      # Main test scenario
│   ├── mobile/
│   │   └── AlbaikHome.feature              # Mobile test scenarios
│   └── web/
│       └── ExampleWeb.feature              # Web test scenarios
│
├── step_definitions/
│   ├── cross-platform/
│   │   └── CrossPlatformOrderSteps.ts      # Cross-platform steps
│   ├── mobile/
│   │   ├── AlbaikHomeSteps.ts              # Mobile steps
│   │   └── SettingsSteps.ts
│   └── web/
│       └── ExampleSteps.ts                 # Web steps
│
├── pages/
│   ├── mobile/
│   │   └── HomePage.ts                     # Mobile page objects
│   └── web/
│       ├── HomePage.ts                     # Web page objects
│       └── AdminPanel.ts                   # Admin panel page object
│
├── locators/
│   ├── mobile/
│   │   └── Home.ts                         # Mobile selectors
│   └── web/
│       ├── Home.ts                         # Web selectors
│       └── AdminPanel.ts                   # Admin panel selectors
│
├── services/
│   └── DataStore.ts                        # Cross-platform data sharing
│
└── data/
    └── cross-platform/
        └── testData.ts                     # Shared test data
```

## Key Features

### DataStore Service
Enables data sharing between mobile and web sessions:
```typescript
// Store data after mobile order placement
DataStore.set('orderId', '123456');
DataStore.set('orderPlacedTime', '2024-01-15T10:30:00Z');

// Retrieve data in web verification
const orderId = DataStore.get('orderId');
```

### AdminPanel Page Object
Handles all web admin panel interactions:
- Search orders by ID
- Verify order status
- Validate order details (service type, store name, etc.)
- Click and inspect order details panels

### Mobile Order Capture
Captures order ID from mobile app confirmation screen:
- Waits for order confirmation panel
- Extracts order ID from success message
- Handles multiple selector patterns for robustness

## Troubleshooting

### "Order ID not found in DataStore"
- Ensure mobile order placement completed successfully
- Check mobile logs for order confirmation screen appearance
- Verify `captureOrderId()` step executed

### "Order not found in admin panel"
- Refresh the admin panel after searching
- Verify order propagation delay (add wait time if needed)
- Check network connectivity between Appium and mobile device

### Multiple browser instances not launching
- Ensure `maxInstances: 2` is set in wdio.config
- Verify Appium and WebDriver are both running
- Check system resources (RAM, CPU) for supporting 2 concurrent sessions

### Admin panel selectors not matching
- Update `AdminPanelLocators` in `src/locators/web/AdminPanel.ts`
- Match actual XPaths from your admin panel UI
- Use browser DevTools to inspect elements

## Expected Output

```
✓ Captured Order ID: 123456
✓ Order ID stored in DataStore: 123456
✓ Order 123456 found in admin panel
✓ Order status verified: Processing
✓ serviceType verified: Car Pickup
✓ storeName verified: KTM
✓ orderType verified: Pickup from restaurant
✓ All order details matched successfully
```

## Configuration Reference

### Environment Variables
| Variable | Default | Description |
|----------|---------|-------------|
| TEST_PLATFORM | mobile | Platform mode: mobile, web, or cross-platform |
| DEVICE_NAME | emulator-5554 | Android device identifier |
| APP_PATH | - | Path to APK file |
| APP_PACKAGE | - | Android app package name |
| APP_ACTIVITY | - | Main activity of app |
| ENV | staging | Environment: staging or production |
| BROWSER | chrome | Browser for web tests |

### Capabilities
- **Mobile**: UiAutomator2, Android platform
- **Web**: Chrome, Firefox, or Edge via Appium
- **Sessions**: Independent for mobile and web

## Best Practices

1. **Data Isolation**: Clear DataStore between test runs
   ```typescript
   Before(() => {
     DataStore.clear();
   });
   ```

2. **Sync Points**: Add explicit waits between platform switches
   ```typescript
   await browser.pause(2000); // Wait for data propagation
   ```

3. **Error Handling**: Capture screenshots on both platforms
   ```typescript
   afterScenario: async (result) => {
     if (!result.passed) await browser.takeScreenshot();
   }
   ```

4. **Logging**: Use console.log with ✓ prefix for clarity
   ```typescript
   console.log(`✓ Order ID: ${orderId}`);
   ```

## Extending the Test

### Adding New Verification Steps
1. Add selectors to `AdminPanelLocators`
2. Add methods to `AdminPanelPage`
3. Create new step definitions in `CrossPlatformOrderSteps.ts`

### Supporting Multiple Stores
Update test data and use parameterized scenarios:
```gherkin
Scenario Outline: Verify orders across stores
  When I place order at <store>
  Then verify order at <store> in admin panel
  Examples:
    | store |
    | KTM   |
    | Cairo |
```

### Integration with CI/CD
```yaml
- run: TEST_PLATFORM=cross-platform npm test
- run: npm run report  # Generate Allure report
- uses: actions/upload-artifact@v2
  with:
    name: allure-results
    path: allure-results/
```
