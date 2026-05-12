# Cross-Platform Test: Methods & Functions Reference

## Issue Identified & Fixed ✅

**Problem**: Some methods used in AdminPanel.ts didn't exist in BasePage
- ❌ `click()` → ✅ **Fixed to `tap()`**
- ❌ `selectOption()` → ✅ **Fixed to use WebdriverIO's `selectByVisibleText()`**

---

## Available Methods by Platform

### 🔵 Web & Mobile BasePage (Both Have Same Methods)

Location: `src/common/web/BasePage.ts` and `src/common/mobile/BasePage.ts`

| Method | Purpose | Usage |
|--------|---------|-------|
| `tap(selector)` | Click element | `await this.tap('button')` |
| `fill(selector, text)` | Clear & fill input | `await this.fill('input', 'text')` |
| `getText(selector)` | Get element text | `const text = await this.getText('span')` |
| `waitForElement(selector, timeout)` | Wait for element to display | `await this.waitForElement('div', 5000)` |
| `isDisplayed(selector)` | Check if visible | `const visible = await this.isDisplayed('elem')` |
| `waitForElementToDisappear(selector, timeout)` | Wait until hidden | `await this.waitForElementToDisappear('popup')` |
| `scrollTo(selector)` | Scroll element into view | `await this.scrollTo('button')` |
| `getAttribute(selector, attribute)` | Get HTML attribute | `const href = await this.getAttribute('a', 'href')` |

---

## AdminPanel Page Object - Methods

Location: `src/pages/web/AdminPanel.ts`

### Setup Methods
```typescript
openAdminPanel()                    // Navigate to admin panel URL
waitForAdminPanelReady()           // Wait for search field to load
```

### Search & Filter
```typescript
searchOrderById(orderId)            // Search by order ID
clearSearchField()                  // Clear search box
filterByStatus(status)              // Filter by status dropdown
isOrderVisible(orderId)             // Check if order exists in results
```

### Get Order Info (from table)
```typescript
getOrderStatus(orderId)             // Get status from table row
getOrderServiceType(orderId)        // Get service type from table row
getOrderStoreName(orderId)          // Get store name from table row
```

### Order Details Panel
```typescript
clickOrderRow(orderId)              // Click to open details
verifyOrderDetailsPanel()           // Check if details panel exists
getOrderIdFromDetailsPanel()        // Extract ID from panel
getOrderStatusFromDetailsPanel()    // Get status from panel
getOrderTypeFromDetailsPanel()      // Get order type from panel
getServiceTypeFromDetailsPanel()    // Get service type from panel
getStoreNameFromDetailsPanel()      // Get store name from panel
```

### Utilities
```typescript
refreshOrders()                     // Click refresh button
```

---

## Mobile HomePage - Extended Methods

Location: `src/pages/mobile/HomePage.ts`

### New Order Confirmation Methods
```typescript
waitForOrderConfirmation()          // Wait for success screen
isOrderSuccessful()                 // Verify order placement succeeded
captureOrderId()                    // Extract & return order ID
getOrderIdFromConfirmationScreen()  // Alternative ID extraction
```

### Existing Methods (Still Available)
```typescript
waitForHomeScreen()
closeNoticePopup()
selectPickupFromRestaurant()
tapChooseRestaurantButton()
tapSearchManuallyButton()
searchForBranch(branch)
tapCarPickupButton()
selectSearchResult(result)
tapBringItToMyCarButton()
tapOrderHereButton()
waitForPickupFlow()
```

---

## Step Definitions - Available Steps

Location: `src/step_definitions/cross-platform/CrossPlatformOrderSteps.ts`

### Web Setup Steps
```gherkin
Given the web admin panel is open in Chrome
And the restaurant panel is loaded and ready
When I clear any existing pending orders for verification
```

### Mobile Order Steps
```gherkin
Given the Albaik application is launched on emulator
Then the order is successfully placed on mobile
And the order ID is captured and stored
```

### Web Verification Steps
```gherkin
Then navigate to the web admin panel
And search for the captured order ID
And verify order status is {string}
And verify order details match the mobile order:
```

---

## Data Flow - How Data Moves Between Platforms

```
Mobile (Appium)                          Web (Chrome)
═════════════════════════════════════════════════════════

1. Order Placed
   └─> captureOrderId()
       └─> Extract: "123456"
           └─> DataStore.set('orderId', '123456')
                                    ▼
                          DataStore (In-Memory)
                          ════════════════════
                          orderId: "123456"
                          orderPlacedTime: "..."
                                    ▼
                          DataStore.get('orderId')
                          └─> searchOrderById('123456')
                              └─> Verify order found
                                  └─> Extract details
                                      └─> Compare & validate
```

---

## Cross-Browser Support

### Currently Supported
- ✅ Chrome (via Selenium)
- ✅ Firefox (via Selenium)
- ✅ Edge (via Selenium)
- ✅ Mobile Chrome (via Appium)
- ✅ Android App (via Appium UiAutomator2)

### Browser Selection
Set in `.env`:
```env
BROWSER=chrome      # For web tests
BROWSER=firefox     # For web tests
BROWSER=edge        # For web tests
```

---

## Common Usage Examples

### Example 1: Search Order
```typescript
const orderId = '123456';
await AdminPanelPage.searchOrderById(orderId);
const visible = await AdminPanelPage.isOrderVisible(orderId);
expect(visible).toBe(true);
```

### Example 2: Get Order Status
```typescript
const orderId = DataStore.get('orderId');
const status = await AdminPanelPage.getOrderStatus(orderId);
console.log(`Order status: ${status}`);
```

### Example 3: Mobile Order Capture
```typescript
await HomePage.waitForOrderConfirmation();
const orderId = await HomePage.captureOrderId();
DataStore.set('orderId', orderId);
```

### Example 4: Detailed Verification
```typescript
await AdminPanelPage.clickOrderRow(orderId);
const isPanelVisible = await AdminPanelPage.verifyOrderDetailsPanel();
const serviceType = await AdminPanelPage.getServiceTypeFromDetailsPanel();
const storeName = await AdminPanelPage.getStoreNameFromDetailsPanel();
```

---

## Method Inheritance Hierarchy

```
BasePage (Web/Mobile)
├── tap(selector)
├── fill(selector, text)
├── getText(selector)
├── waitForElement(selector, timeout)
├── isDisplayed(selector)
├── waitForElementToDisappear(selector, timeout)
├── scrollTo(selector)
└── getAttribute(selector, attribute)
    │
    └──> AdminPanelPage extends BasePage
         ├── openAdminPanel()
         ├── searchOrderById()
         ├── getOrderStatus()
         ├── clickOrderRow()
         └── ... (20+ methods)
    
    └──> HomePage extends BasePage
         ├── waitForHomeScreen()
         ├── selectPickupFromRestaurant()
         ├── tapOrderHereButton()
         ├── captureOrderId()
         └── ... (14+ methods)
```

---

## Error Handling

Each method includes:
- **Timeout handling**: Default 30s (customizable)
- **Element wait**: Waits for element to be displayed
- **Error logging**: Logs failures to console
- **Try-catch**: Returns graceful defaults

Example:
```typescript
async isOrderVisible(orderId: string): Promise<boolean> {
  try {
    await this.waitForElement(AdminPanelLocators.orderRow(orderId), 5000);
    return true;
  } catch {
    return false;  // Graceful fallback
  }
}
```

---

## Locators - Where Elements Are Defined

### Web Locators
Location: `src/locators/web/AdminPanel.ts`

```typescript
export const AdminPanelLocators = {
  adminPanelTitle: '//h1[contains(text(), "Admin Panel")]',
  searchOrderField: '//input[@placeholder="Search Order ID"]',
  orderRow: (orderId) => `//tr[contains(., "${orderId}")]`,
  orderStatusCell: (orderId) => `//tr[contains(., "${orderId}")]//td[@class="status"]`,
  // ... more locators
}
```

### Mobile Locators
Location: `src/locators/mobile/Home.ts`

```typescript
export const HomeLocators = {
  orderId: 'android=new UiSelector().className("android.widget.TextView").textMatches("[0-9]{6,}")',
  orderSuccessMessage: 'android=new UiSelector().textMatches("(?i).*order.*placed.*successfully.*")',
  // ... more locators
}
```

---

## Summary Table

| Component | Type | Count | Status |
|-----------|------|-------|--------|
| BasePage Methods | Core | 8 | ✅ Available |
| AdminPanel Methods | Page Object | 15+ | ✅ Implemented |
| HomePage Methods | Page Object | 18+ | ✅ Implemented |
| Step Definitions | Gherkin | 15+ | ✅ Implemented |
| Web Locators | Selectors | 12+ | ✅ Created |
| Mobile Locators | Selectors | 10+ | ✅ Updated |

---

## Testing All Methods

```bash
# Verify all methods are implemented
npm run test:cross-platform:staging

# Run with specific tag to test just cross-platform
npm run test:cross-platform:tag "@cross-platform"
```

---

**Status**: ✅ All methods now properly implemented and fixed
**Last Updated**: 2024
**Framework**: WebdriverIO 9.x with TypeScript
