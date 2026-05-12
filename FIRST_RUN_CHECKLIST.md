# First-Run Checklist for Cross-Platform Tests

Use this checklist before running the cross-platform test for the first time.

## Pre-Flight Checklist

### 1. Environment Setup
- [ ] Android SDK installed
- [ ] Android emulator created
- [ ] ANDROID_HOME environment variable set
- [ ] Node.js and npm installed (v14+)
- [ ] Project dependencies installed (`npm install`)

### 2. Emulator & Appium
- [ ] Android emulator running: `emulator -avd <avd_name>` or via Android Studio
- [ ] Verify device connection: `adb devices` shows your emulator
- [ ] Appium installed globally: `npm install -g appium`
- [ ] Appium server ready to start: `npm run appium`

### 3. Application Setup
- [ ] Albaik APK file available at path specified in .env
- [ ] APP_PACKAGE correct (check app manifest)
- [ ] APP_ACTIVITY correct (main activity name)
- [ ] Application can be launched manually on emulator

### 4. Web Admin Panel
- [ ] Admin panel URL accessible
- [ ] Login credentials configured in test data
- [ ] Test admin account available
- [ ] Recent orders visible in admin panel

### 5. Configuration Files
- [ ] `.env` file exists with all required variables
- [ ] `wdio.config.ts` has cross-platform entries
- [ ] `package.json` has cross-platform scripts
- [ ] `config/capabilities.ts` supports cross-platform

### 6. Test Files
- [ ] Feature file exists: `src/features/cross-platform/CrossPlatformOrder.feature`
- [ ] Step definitions exist: `src/step_definitions/cross-platform/CrossPlatformOrderSteps.ts`
- [ ] Admin panel page object exists: `src/pages/web/AdminPanel.ts`
- [ ] Admin panel locators exist: `src/locators/web/AdminPanel.ts`
- [ ] Mobile page objects updated with order capture methods
- [ ] Mobile locators updated with order confirmation selectors

### 7. Verification
- [ ] Run setup verification: `bash scripts/verify-cross-platform-setup.sh`
- [ ] All checks pass (green checkmarks)
- [ ] No missing dependencies reported

## Installation Steps (If Not Yet Done)

```bash
# 1. Install global dependencies
npm install -g appium

# 2. Install project dependencies
npm install

# 3. Set up .env file
cp .env.example .env
# Edit .env with correct values

# 4. Verify Appium installation
appium --version

# 5. Verify adb connection
adb devices
```

## Pre-Test Validation

```bash
# 1. Start Android emulator
emulator -avd <your_avd_name> &

# 2. Wait for emulator to be ready (30-60 seconds)
adb wait-for-device

# 3. Verify device is ready
adb shell getprop init.svc.bootanim
# Should return "stopped" when ready

# 4. Install app on emulator (if needed)
adb install -r /path/to/albaik.apk

# 5. Start Appium server
npm run appium

# 6. In another terminal, verify cross-platform setup
bash scripts/verify-cross-platform-setup.sh

# 7. Run a quick mobile test first
npm run test:mobile:staging -- --tags @smoke

# 8. Run a quick web test first
npm run test:web:chrome:staging -- --tags @smoke
```

## First Run

```bash
# In a terminal with Appium running (see pre-test validation #5)
# Run the cross-platform test
npm run test:cross-platform:staging
```

## Expected Behavior During Test

### Timeline
1. **0-5s**: Test initialization
2. **5-10s**: Web admin panel opens in Chrome
3. **10-15s**: Mobile app launches in emulator
4. **15-45s**: Order placement flow on mobile
5. **45-55s**: Order confirmation and ID capture
6. **55-70s**: Web admin panel search and verification
7. **70-80s**: Order details validation
8. **80+s**: Test completion

### Success Indicators
- ✅ Admin panel loads successfully
- ✅ Mobile app launches without errors
- ✅ Order placement completes
- ✅ Order ID extracted (visible in logs)
- ✅ Order found in admin panel
- ✅ Order details match
- ✅ Test marked as PASSED

### Console Output Examples
```
✓ Order successfully placed on mobile application
✓ Order ID stored in DataStore: 123456
✓ Order 123456 found in admin panel
✓ Order status verified: Processing
✓ All order details matched successfully
```

## Common First-Run Issues

### Issue: "appium not found"
```bash
npm install -g appium
which appium  # Verify installation
```

### Issue: "emulator not found in adb devices"
```bash
# Ensure emulator is running
emulator -avd my_avd &

# Wait for boot
adb wait-for-device

# Check again
adb devices
```

### Issue: "App not launching"
```bash
# Verify app is installed
adb shell pm list packages | grep albaik

# Reinstall if needed
adb install -r /path/to/albaik.apk

# Check app package and activity
# Look in AndroidManifest.xml
```

### Issue: "Admin panel selectors don't match"
1. Open admin panel manually in Chrome
2. Inspect elements with DevTools (F12)
3. Update XPaths in `src/locators/web/AdminPanel.ts`
4. Re-run test

### Issue: "Order not found in admin panel after placement"
1. Check mobile logs for order confirmation
2. Add wait time in `searchOrderById()` method
3. Manually check if order appears in admin panel
4. Verify order sync delay between mobile and web

## Performance Notes

- **First run may be slower**: App installation, emulator boot
- **Expected duration**: 80-120 seconds total
- **Mobile app launch**: 15-30 seconds typical
- **Order search**: 5-10 seconds typical
- **Total wait**: Allow 3-5 minutes for first run

## After First Successful Run

- ✅ Document any customizations made
- ✅ Save successful test output/screenshots
- ✅ Note admin panel selectors used
- ✅ Add additional test scenarios
- ✅ Set up CI/CD integration

## Next Steps

1. **Run multiple times**: Ensure consistency
2. **Test different stores**: Update feature with other locations
3. **Test error scenarios**: Failed orders, network issues
4. **Integrate with CI/CD**: Jenkins, GitHub Actions, etc.
5. **Add performance metrics**: Capture order processing time
6. **Extend coverage**: Add payment, receipt verification

## Support & Documentation

- Full Guide: `CROSS_PLATFORM_TEST_GUIDE.md`
- Implementation: `IMPLEMENTATION_SUMMARY.md`
- Quick Ref: `QUICK_REFERENCE.md`
- Logs: Check `allure-results/` for test reports

---
**Status**: Ready for first run
**Estimated Time**: 3-5 minutes setup + 80-120 seconds per test
**Support**: Refer to documentation or check logs for errors
