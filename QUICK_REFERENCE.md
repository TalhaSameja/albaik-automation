# Cross-Platform Test - Quick Reference

## Run Commands

```bash
# Run cross-platform test
npm run test:cross-platform:staging

# Run specific tag
npm run test:cross-platform:tag "@cross-platform"

# Run with mobile only
npm run test:mobile:staging

# Run with web only  
npm run test:web:chrome:staging
```

## Test Files

| File | Purpose |
|------|---------|
| `src/features/cross-platform/CrossPlatformOrder.feature` | Main test scenario |
| `src/step_definitions/cross-platform/CrossPlatformOrderSteps.ts` | Test implementation |
| `src/pages/web/AdminPanel.ts` | Admin panel interactions |
| `src/locators/web/AdminPanel.ts` | Admin panel selectors |
| `src/pages/mobile/HomePage.ts` | (UPDATED) Order capture methods |
| `src/locators/mobile/Home.ts` | (UPDATED) Order confirmation selectors |

## Prerequisites

✓ Android emulator running: `adb devices`
✓ Appium server: `appium` or `npm run appium`
✓ .env file configured
✓ Node modules installed: `npm install`

## Test Flow

1. **Web**: Open admin panel (Chrome)
2. **Mobile**: Place order via Albaik app
3. **Mobile**: Capture order ID
4. **Web**: Search for order ID
5. **Web**: Verify order details & status

## Key Features

- **Cross-Platform Data Sharing**: DataStore service
- **Order ID Extraction**: Automatic regex-based parsing
- **Admin Panel Verification**: Comprehensive order validation
- **Error Handling**: Detailed logging and screenshots
- **Reusable Steps**: Leverages existing mobile test steps

## Environment Variables

```env
TEST_PLATFORM=cross-platform
DEVICE_NAME=emulator-5554
APP_PATH=/path/to/app.apk
APP_PACKAGE=com.albaik.app
APP_ACTIVITY=com.albaik.MainActivity
ENV=staging
BROWSER=chrome
```

## Expected Output

```
✓ Order successfully placed on mobile application
✓ Order ID stored in DataStore: 123456
✓ Order 123456 found in admin panel
✓ Order status verified: Processing
✓ serviceType verified: Car Pickup
✓ storeName verified: KTM
✓ All order details matched successfully
```

## Troubleshooting Quick Links

| Issue | Solution |
|-------|----------|
| Order ID not captured | Check mobile confirmation screen appears |
| Order not found in admin | Refresh admin panel, verify search works |
| Multiple instances error | Check `maxInstances: 2` in wdio.config |
| Admin selectors fail | Update locators in `AdminPanel.ts` |

## Documentation

- **Full Guide**: `CROSS_PLATFORM_TEST_GUIDE.md`
- **Implementation Details**: `IMPLEMENTATION_SUMMARY.md`
- **Verification Script**: `scripts/verify-cross-platform-setup.sh`

## Setup Verification

```bash
bash scripts/verify-cross-platform-setup.sh
```

## Common Tasks

### Update Admin Panel Selectors
Edit: `src/locators/web/AdminPanel.ts`

### Add New Verification Steps
1. Add selector to `AdminPanel.ts` locators
2. Add method to `src/pages/web/AdminPanel.ts`
3. Create step in `CrossPlatformOrderSteps.ts`

### Test Different Store
Update test data in `CrossPlatformOrder.feature`

### Add Pre-Order Cleanup
Update `I clear any existing pending orders` step

---
**Last Updated**: 2024
**Status**: Ready for use
**Framework**: WebdriverIO 9.x + Cucumber + TypeScript
