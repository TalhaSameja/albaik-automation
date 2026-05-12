export const CommonLocators = {
  bottomSheetAnchor:
    '//android.view.ViewGroup[@content-desc="Pickup from a restaurant"]',

  pickupOption:
    '//android.view.ViewGroup[@content-desc="Pickup from a restaurant"]',

  closeButtonSelectors: [
    'android=new UiSelector().descriptionMatches("(?i)close")',
    'android=new UiSelector().descriptionMatches("(?i).*close.*")',
    'android=new UiSelector().textMatches("(?i)close|×|x")',
    'android=new UiSelector().className("android.widget.ImageView").descriptionMatches("(?i).*(close|dismiss|cross).*")',
  ],

  pickupScreenIndicators: [
    'android=new UiSelector().textMatches("(?i).*select.*restaurant.*")',
    'android=new UiSelector().textMatches("(?i).*nearest.*restaurant.*")',
    'android=new UiSelector().textMatches("(?i).*choose.*branch.*")',
    'android=new UiSelector().textMatches("(?i).*find.*restaurant.*")',
    'android=new UiSelector().descriptionMatches("(?i).*restaurant.*list.*")',
  ],

  chooseRestaurantButton:
    'android=new UiSelector().textMatches("(?i).*choose.*restraunt.*|.*choose.*restaurant.*")',

  searchManuallyButton:
    'android=new UiSelector().textMatches("(?i).*search.*manually.*")',

  searchFieldSelectors: [
    'android=new UiSelector().resourceIdMatches("(?i).*search.*")',
    'android=new UiSelector().className("android.widget.EditText").descriptionMatches("(?i).*search.*")',
    'android=new UiSelector().className("android.widget.EditText").textMatches("(?i).*search.*")',
  ],

  carPickupButton:
    'android=new UiSelector().textMatches("(?i).*car.*pickup.*")',

  bringItToMyCarButton:
    'android=new UiSelector().textMatches("(?i).*bring.*it.*to.*my.*car.*")',

  orderHereButton:
    'android=new UiSelector().textMatches("(?i).*order.*here.*")',

  orderConfirmationPanel:
    'android=new UiSelector().textMatches("(?i).*order.*confirmed.*|.*thank.*you.*|.*success.*")',

  orderIdText:
    'android=new UiSelector().textMatches("(?i).*order.*id.*|.*#.*")',

  orderSuccessMessage:
    'android=new UiSelector().textMatches("(?i).*order.*placed.*successfully.*|.*order.*confirmed.*")',

  orderId: 'android=new UiSelector().className("android.widget.TextView").textMatches("[0-9]{6,}")',

  noticePopupText: [
    '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]',
  ],

  noticeCloseButton: [
    '//android.view.ViewGroup[@content-desc="Close"]',
    'android=new UiSelector().descriptionMatches("(?i).*close.*")',
    'android=new UiSelector().descriptionMatches("(?i)close")',
  ],
   // Navigation
  adminPanelTitle: '//h1[contains(text(), "Admin Panel")]',
  ordersMenu: '//a[contains(text(), "Orders")]',
  dashboardMenu: '//a[contains(text(), "Dashboard")]',

  // Search and Filter
  searchOrderField: '//input[@placeholder="Search Order ID"]',
  searchButton: '//button[contains(text(), "Search")]',
  filterByStatus: '//select[@id="statusFilter"]',

  // Order Details Table
  ordersTable: '//table[@class="orders-table"]',
  orderRow: (orderId: string) => `//tr[contains(., "${orderId}")]`,
  orderStatusCell: (orderId: string) => `//tr[contains(., "${orderId}")]//td[@class="status"]`,
  orderServiceTypeCell: (orderId: string) => `//tr[contains(., "${orderId}")]//td[@class="serviceType"]`,
  orderStoreCell: (orderId: string) => `//tr[contains(., "${orderId}")]//td[@class="storeName"]`,

  // Order Details Panel
  orderDetailsPanel: '//div[@class="order-details-panel"]',
  orderIdDisplay: '//span[@id="orderID"]',
  orderStatusDisplay: '//span[@id="status"]',
  orderTypeDisplay: '//span[@id="orderType"]',
  serviceTypeDisplay: '//span[@id="serviceType"]',
  storeNameDisplay: '//span[@id="storeName"]',
  orderTimestamp: '//span[@id="timestamp"]',

  // Actions
  approveButton: '//button[contains(text(), "Approve")]',
  rejectButton: '//button[contains(text(), "Reject")]',
  closeButton: '//button[contains(text(), "Close")]',
  refreshButton: '//button[@id="refresh"]',
    pageHeading: 'h1',
  moreInfoLink: 'a',
  emailInput: '//input[@name="email" or @type="email"]',
  passwordInput: '//input[@name="password" or @type="password"]',
  loginBtn: "//input[@name='commit']",
};
