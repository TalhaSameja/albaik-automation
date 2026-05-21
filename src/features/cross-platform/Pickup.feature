Feature: Pickup - Cross-Platform End-to-End Test

@pickup
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
    #   Then Click on web Button with "Prepared"

