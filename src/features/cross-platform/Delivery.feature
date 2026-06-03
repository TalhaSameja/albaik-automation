Feature: Delivery - Cross-Platform End-to-End Test

@delivery
    Scenario: Place a delivery order on mobile and verify on web admin panel
      # Given The Albaik application is launched on physical device
      # Then Verify that the "Skip" text is displayed
      # Then Click on "Skip" button
      # Then Click on "android:id/content" button
      # Then Click on "Sign In" button
      # Then Enter "532255875" into "5XXXXXXXX" Input
      # Then Enter "11223344" as password
      # Then Click on "Sign In" button
      # Then wait for "10" Seconds
      # Then Click on "ChannelPicker" button
      # Then Click on "Delivery" button
      # Then Click on "Choose an address" button
      # Then wait for "5" Seconds
      # Then Swipe left "2" times
      # Then Click on "KTM OFFICE" button
      # Then Click on "Choose this location" button
      # Then Click on "Choose this location" button
      # Then Scroll down "2" lines
      # Then Click on "cola" button
      # Then Click on "Add to order" button
      # Then Click on "View Basket" button
      # Then Click on "Confirm Order" button
      # Then Click on "Continue" button
      # Then Enter "123" into "checkoutCvv" Input
      # Then Click on "Pay with card" button
      # Then wait for "180" Seconds
      # Then Capture and store order id from tracking card "tracking-delivery"
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
      # Then Close the Albaik application on physical device
      # Given The Albaik Driver application is launched on physical device
      # Then wait for "5" Seconds
      # Then Click on "1" button
      # Then Click on "Scan receipt" button
      # Then Click on "Enter order number" button
      # Then Enter captured order ID into "receipt number" Input
      # Then Click on "Submit" button
      # Then wait for "5" Seconds
      # Then Click on "Start delivering" button
      # Then wait for "5" Seconds
      # Then Click on "Delivered" button
      # Then wait for "5" Seconds
      # Then Click on "Delivered" button


