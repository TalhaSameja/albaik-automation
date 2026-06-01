Feature: Smoke Tests - Cross-Platform End-to-End

  @smoke @login
  Scenario: Login to the customer app
    Given The Albaik application is launched on physical device
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    Then Verify that the "android:id/content" text is displayed

  @smoke @register
  Scenario: Navigate to the Register screen
    Given The Albaik application is launched on physical device
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Register" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Register" button
    Then Verify that the "532255875" text is displayed

  @smoke @resetpassword
  Scenario: Reset password via Forgot Password link
    Given The Albaik application is launched on physical device
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Click on "Forgot your password?" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Click on "Reset password" button
    Then Verify that the "Please check your SMS for resetting the password" text is displayed

  @smoke @delivery
  Scenario: Place a delivery order on mobile and verify on web admin panel
    Given The Albaik application is launched on physical device
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    Then Click on "ChannelPicker" button
    Then Click on "Delivery" button
    Then Click on "Choose an address" button
    Then wait for "5" Seconds
    Then Swipe left "2" times
    Then Click on "KTM OFFICE" button
    Then Click on "Choose this location" button
    Then Click on "Choose this location" button
    Then Scroll down "2" lines
    Then Click on "cola" button
    Then Click on "Add to order" button
    Then Click on "View Basket" button
    Then Click on "Confirm Order" button
    Then Click on "Continue" button
    Then Enter "123" into "checkoutCvv" Input
    Then Click on "Pay with card" button
    Then wait for "180" Seconds
    Then Capture and store order id from tracking card "tracking-delivery"
    Then navigate to the web admin panel
    Then login to the admin panel
    Then the restaurant panel is loaded and ready
    Then wait for "5" seconds in web
    Then Click on web Button with "/admin/orders"
    Then wait for "2" seconds in web
    Then Enter captured order ID into input field "search"
    Then Hit "Enter" key in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web
    Then Click on web Button with "KTM Test Branch"
    Then wait for "2" seconds in web
    Then Click on web Button with "Restaurant dashboard"
    Then wait for "5" seconds in web
    Then Enter captured order ID into input field "search"
    Then Hit "Enter" key in web
    Then wait for "2" seconds in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web
    Then Click on web Button with "Print Receipt & Start Collecting"
    Then wait for "2" seconds in web
    Then accept web alert
    Then wait for "2" seconds in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web
    Then Click on web Button with "Prepared"
    Then Close the Albaik application on physical device
    Given The Albaik Driver application is launched on physical device
    Then wait for "5" Seconds
    Then Click on "1" button
    Then Click on "Scan receipt" button
    Then Click on "Enter order number" button
    Then Enter captured order ID into "receipt number" Input
    Then Click on "Submit" button
    Then wait for "5" Seconds
    Then Click on "Start delivering" button
    Then wait for "5" Seconds
    Then Click on "Delivered" button
    Then wait for "5" Seconds
    Then Click on "Delivered" button

  @smoke @pickup
  Scenario: Place a pickup order on mobile and verify on web admin panel
    Given The Albaik application is launched on physical device
    Then Click on "android:id/button2" button
    Then Click on "Saudi Arabia" button
    Then Click on "android:id/button2" button
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    Then Click on "ChannelPicker" button
    Then Click on "Pickup from a restaurant" button
    Then Click on "Choose a restaurant" button
    Then Click on "Search manually" button
    Then Enter "ktm" into "City, Branch" Input
    Then Hit "Enter" key
    Then Click on "KTM Test Branch" button
    Then wait for "20" Seconds
    Then Click on "Order Here" button
    Then Scroll down "2" lines
    Then Click on "Double Espresso" button
    Then Click on "Add to order" button
    Then Click on "View Basket" button
    Then wait for "10" Seconds
    Then Click on "Confirm Order" button
    Then wait for "10" Seconds
    Then Click on "Continue" button
    Then wait for "5" seconds
    Then Enter "123" into "checkoutCvv" Input
    Then Click on "Pay with card" button
    Then wait for "180" Seconds
    Then Capture and store order id from tracking card "tracking-pickup"
    Then navigate to the web admin panel
    Then login to the admin panel
    Then the restaurant panel is loaded and ready
    Then wait for "5" seconds in web
    Then Click on web Button with "/admin/orders"
    Then wait for "2" seconds in web
    Then Enter captured order ID into input field "search"
    Then Hit "Enter" key in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web
    Then Click on web Button with "KTM Test Branch"
    Then wait for "2" seconds in web
    Then Click on web Button with "Restaurant dashboard"
    Then wait for "5" seconds in web
    Then Enter captured order ID into input field "search"
    Then Hit "Enter" key in web
    Then wait for "2" seconds in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web
    Then Click on web Button with "Print Receipt & Start Collecting"
    Then wait for "2" seconds in web
    Then accept web alert
    Then wait for "2" seconds in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web

  @smoke @qr
  Scenario: Scan a QR code and verify it redirects to the correct channel
    Given The Albaik application is launched on physical device
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    And I redirect to branch "539" to bypass QR scan
    Then Verify that the "Start" text is displayed

  @smoke @instore
  Scenario: Complete an in-store order and verify on web admin panel
    Given The Albaik application is launched on physical device
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    And I redirect to branch "539" to bypass QR scan
    Then Verify that the "Start" text is displayed
    Then Click on "Start" button
    Then Scroll down "2" lines
    Then Click on "Falafel Meal" button
    Then Click on "Add to order" button
    Then Click on "View Basket" button
    Then Click on "Confirm Order" button
    Then Click on "Continue" button
    Then Enter "123" into "checkoutCvv" Input
    Then Click on "Pay with card" button
    Then wait for "180" Seconds
    Then Capture and store order id from tracking card "tracking-instore"
    Then navigate to the web admin panel
    Then login to the admin panel
    Then the restaurant panel is loaded and ready
    Then wait for "5" seconds in web
    Then Click on web Button with "/admin/orders"
    Then wait for "2" seconds in web
    Then Enter captured order ID into input field "search"
    Then Hit "Enter" key in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web
    Then Click on web Button with "KTM Test Branch"
    Then wait for "2" seconds in web
    Then Click on web Button with "Restaurant dashboard"
    Then wait for "5" seconds in web
    Then Enter captured order ID into input field "search"
    Then Hit "Enter" key in web
    Then wait for "2" seconds in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web
    Then Click on web Button with "Print Receipt & Start Collecting"
    Then wait for "2" seconds in web
    Then accept web alert
    Then wait for "2" seconds in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web
    Then Click on web Button with "Prepared"

  @smoke @carpickup
  Scenario: Place a car pickup order on mobile and verify on web admin panel
    Given The Albaik application is launched on physical device
    Then Click on "android:id/button2" button
    Then Click on "Saudi Arabia" button
    Then Click on "android:id/button2" button
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    Then Click on "ChannelPicker" button
    Then Click on "Pickup from a restaurant" button
    Then Click on "Choose a restaurant" button
    Then Click on "Search manually" button
    Then Enter "ktm" into "City, Branch" Input
    Then Hit "Enter" key
    Then Click on "KTM Test Branch" button
    Then wait for "20" Seconds
    Then Click on "bring it to my car" button
    Then Click on "Order Here" button
    Then Scroll down "2" lines
    Then Click on "cola" button
    Then Click on "Add to order" button
    Then Click on "View Basket" button
    Then Click on "Confirm Order" button
    Then Click on "Choose this car" button
    Then Click on "Continue" button
    Then Enter "123" into "checkoutCvv" Input
    Then Click on "Pay with card" button
    Then wait for "180" Seconds
    Then Capture and store order id from tracking card "tracking-curbside"
    Then navigate to the web admin panel
    Then login to the admin panel
    Then the restaurant panel is loaded and ready
    Then wait for "5" seconds in web
    Then Click on web Button with "/admin/orders"
    Then wait for "2" seconds in web
    Then Enter captured order ID into input field "search"
    Then Hit "Enter" key in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web
    Then Click on web Button with "KTM Test Branch"
    Then wait for "2" seconds in web
    Then Click on web Button with "Restaurant dashboard"
    Then wait for "5" seconds in web
    Then Enter captured order ID into input field "search"
    Then Hit "Enter" key in web
    Then wait for "2" seconds in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web
    Then Click on web Button with "Print Receipt & Start Collecting"
    Then wait for "2" seconds in web
    Then accept web alert
    Then wait for "2" seconds in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web

  @smoke @existingcard
  Scenario: Complete checkout using an existing saved card
    Given The Albaik application is launched on physical device
    Then Click on "android:id/button2" button
    Then Click on "Saudi Arabia" button
    Then Click on "android:id/button2" button
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    Then Click on "ChannelPicker" button
    Then Click on "Pickup from a restaurant" button
    Then Click on "Choose a restaurant" button
    Then Click on "Search manually" button
    Then Enter "ktm" into "City, Branch" Input
    Then Hit "Enter" key
    Then Click on "KTM Test Branch" button
    Then wait for "20" Seconds
    Then Click on "Order Here" button
    Then Scroll down "2" lines
    Then Click on "Double Espresso" button
    Then Click on "Add to order" button
    Then Click on "View Basket" button
    Then wait for "10" Seconds
    Then Click on "Confirm Order" button
    Then wait for "10" Seconds
    Then Click on "Continue" button
    Then wait for "5" seconds
    Then Enter "123" into "checkoutCvv" Input
    Then Click on "Pay with card" button
    Then wait for "180" Seconds
    Then Capture and store order id from tracking card "tracking-pickup"
    Then navigate to the web admin panel
    Then login to the admin panel
    Then the restaurant panel is loaded and ready
    Then wait for "5" seconds in web
    Then Click on web Button with "/admin/orders"
    Then wait for "2" seconds in web
    Then Enter captured order ID into input field "search"
    Then Hit "Enter" key in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web
    Then Click on web Button with "KTM Test Branch"
    Then wait for "2" seconds in web
    Then Click on web Button with "Restaurant dashboard"
    Then wait for "5" seconds in web
    Then Enter captured order ID into input field "search"
    Then Hit "Enter" key in web
    Then wait for "2" seconds in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web
    Then Click on web Button with "Print Receipt & Start Collecting"
    Then wait for "2" seconds in web
    Then accept web alert
    Then wait for "2" seconds in web
    Then Click on the order with captured order ID
    Then wait for "2" seconds in web

  @smoke @homescreen
  Scenario: Verify home screen sections are displayed after login
    Given The Albaik application is launched on physical device
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    Then Verify that the "MY LIST" text is displayed
    Then Verify that the "MENU" text is displayed

  @smoke @favorite
  Scenario: Navigate to the Favorites screen via MY LIST section
    Given The Albaik application is launched on physical device
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    Then Swipe left "3" times on "MyListSection" section
    Then wait for "2" Seconds
    Then Click on "View All" button
    Then wait for "5" Seconds
    Then Verify that the "Favorite" text is displayed

  @smoke @stcpay
  Scenario: Checkout Screen - STC Pay
    Given The Albaik application is launched on physical device
    Then Click on "android:id/button2" button
    Then Click on "Saudi Arabia" button
    Then Click on "android:id/button2" button
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    Then Click on "ChannelPicker" button
    Then Click on "Pickup from a restaurant" button
    Then Click on "Choose a restaurant" button
    Then Click on "Search manually" button
    Then Enter "ktm" into "City, Branch" Input
    Then Hit "Enter" key
    Then Click on "KTM Test Branch" button
    Then wait for "20" Seconds
    Then Click on "Order Here" button
    Then Scroll down "2" lines
    Then Click on "Double Espresso" button
    Then Click on "Add to order" button
    Then Click on "View Basket" button
    Then wait for "10" Seconds
    Then Click on "Confirm Order" button
    Then wait for "10" Seconds
    Then Click on "Continue" button
    Then wait for "5" Seconds
    Then Click on "Pay with STC Bank" button
    Then Enter "0548220713" into "05XXXXXXXX" Input
    Then Click on "stcPaySubmit" button
    Then wait for "5" Seconds
    Then Click on "Begin" button
    Then Verify that the "Let's confirm you are human" text is displayed

  @smoke @creditdebit
  Scenario: Checkout Screen - Credit/Debit Card
    Given The Albaik application is launched on physical device
    Then Click on "android:id/button2" button
    Then Click on "Saudi Arabia" button
    Then Click on "android:id/button2" button
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    Then Click on "ChannelPicker" button
    Then Click on "Pickup from a restaurant" button
    Then Click on "Choose a restaurant" button
    Then Click on "Search manually" button
    Then Enter "ktm" into "City, Branch" Input
    Then Hit "Enter" key
    Then Click on "KTM Test Branch" button
    Then wait for "20" Seconds
    Then Click on "Order Here" button
    Then Scroll down "2" lines
    Then Click on "Double Espresso" button
    Then Click on "Add to order" button
    Then Click on "View Basket" button
    Then wait for "10" Seconds
    Then Click on "Confirm Order" button
    Then wait for "10" Seconds
    Then Click on "Continue" button
    Then wait for "5" Seconds
    Then Click on "Credit / Debit" button
    Then Enter "talha yousuf" into "card_holder_name_input" Input
    Then Enter "4012 8888 8888 1881" into "card_number_input" Input
    Then Enter "11/26" into "expiry_date_input" Input
    Then Enter "123" into "cvv_input" Input
    Then Click on "payWithNewCard" button

  @smoke @orderhistory
  Scenario: View order history from the profile section
    Given The Albaik application is launched on physical device
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    Then Click on "android:id/content" button
    Then Click on "Order History" button
    Then Verify that the "ORDER HISTORY" text is displayed

  @smoke @orderdetails
  Scenario: View order details from order history
    Given The Albaik application is launched on physical device
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    Then Click on "android:id/content" button
    Then Click on "Order History" button
    Then Verify that the "ORDER HISTORY" text is displayed
    Then Click on "orderHistoryItem" button
    Then Verify that the "Contact support team" text is displayed

  @smoke @account
  Scenario: Edit account settings - update email and gender
    Given The Albaik application is launched on physical device
    Then Verify that the "Skip" text is displayed
    Then Click on "Skip" button
    Then Click on "android:id/content" button
    Then Click on "Sign In" button
    Then Enter "532255875" into "5XXXXXXXX" Input
    Then Enter "11223344" as password
    Then Click on "Sign In" button
    Then wait for "10" Seconds
    Then Click on "android:id/content" button
    Then Click on "Account" button
    Then Verify that the "ACCOUNT SETTINGS" text is displayed
    Then Enter "test2@gmail.com" into "accountEmailField" Input
    Then Scroll down "2" lines
    Then Click on "Female" button
    Then Click on "Save" button
    Then wait for "3" Seconds
    Then Scroll down "2" lines
    Then Verify that the "Female" text is displayed


