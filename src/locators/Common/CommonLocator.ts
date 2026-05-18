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
  dynamicTextInput: (text: string) => `//android.widget.EditText[@text="${text}" or @resource-id="${text}"]`,
    // Tracking Card
  trackingCard: (resourceId: string) =>
    `//android.view.ViewGroup[@resource-id="${resourceId}"]`,

  // Dynamic Order ID inside tracking card
  trackingOrderId: (resourceId: string) =>
    `//android.view.ViewGroup[@resource-id="${resourceId}"]//android.widget.TextView[contains(@text,"#")]`,
   // Dynamic Search Field on Web
  dynamicSearchField: (placeholder: string) =>
    `//input[@placeholder="${placeholder}"]`,
    
  // Dynamic Web Element Locators
  webLinkByHref: (href: string) => {
    const predefined: { [key: string]: string } = {
      'Assign order to me': "//a[normalize-space()='Assign order to me']",
      'Assign manually': "//a[normalize-space()='Assign manually']",
        'Assign order': "//input[@name='commit']",
      'KTM Test Branch': "//a[normalize-space()='KTM Test Branch']",
      'Restaurant dashboard': "//a[normalize-space()='Restaurant dashboard']",
      'Print Receipt & Start Collecting': "//button[normalize-space()='Print Receipt & Start Collecting']",
      'OK': "//button[normalize-space()='OK']",
      'Prepared': "//button[normalize-space()='Prepared']"
    };
    return predefined[href] || `//a[@href="${href}"]`;
  },
  webInputById: (id: string) => `//input[@id="${id}"]`,
  systemButton: (btn_name: string) => `//android.widget.Button[@resource-id="${btn_name}"]`,


  // Dynamic Order Row
  dynamicOrderRow: (orderId: string) =>
    `//*[contains(text(),"${orderId}")]`,
  emailInput: '//input[@name="email" or @type="email"]',
  curbsidePhoneInput: '//input[@type="tel" or contains(@name, "phone") or @id="user_phone" or @name="email" or @type="email" or @id="user_login"]',
  webPasswordInput: '//input[@name="password" or @type="password"]',
  passwordInput: '//android.widget.ScrollView/android.view.ViewGroup/android.view.ViewGroup[2]/android.widget.EditText',
  loginBtn: "//input[@name='commit']",
  cardEndingWith: (lastFourDigits: string) => `//android.view.ViewGroup[@content-desc="ENDING, ${lastFourDigits}"]/com.horcrux.svg.SvgView/com.horcrux.svg.g/com.horcrux.svg.p`,
  ChannelPicker: '//android.view.ViewGroup[@resource-id="ChannelPicker"]/android.view.ViewGroup/com.horcrux.svg.SvgView',
  'android:id/content': '//android.widget.FrameLayout[@resource-id="android:id/content"]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[1]/android.view.ViewGroup/android.view.ViewGroup[1]/android.widget.FrameLayout/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup/android.view.ViewGroup[2]/android.view.ViewGroup[4]/com.horcrux.svg.SvgView/com.horcrux.svg.g/ya1',

  // --- Driver App Locators ---
  "phoneNumber": '//android.widget.EditText[@content-desc="phoneNumber"]',
  "password": '//android.widget.EditText[@content-desc="password"]',
  "submit": '//android.view.ViewGroup[@content-desc="submit"]',
  "Next": '//android.widget.Button[@content-desc="Next"]',
  "I have read all the safety guidelines": '//android.widget.TextView[@text="I have read all the safety guidelines"]',
  "Start the Ride": '//android.widget.Button[@content-desc="Start The Ride"]',
  "Continue": '//android.view.ViewGroup[@content-desc="Continue"]',
  "com.android.permissioncontroller:id/permission_allow_foreground_only_button": '//android.widget.Button[@resource-id="com.android.permissioncontroller:id/permission_allow_foreground_only_button"]',
  "Join restaurant queue": '//android.widget.TextView[@text="Join restaurant queue"]',
};
