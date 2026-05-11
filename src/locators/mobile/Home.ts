export const HomeLocators = {
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
};
