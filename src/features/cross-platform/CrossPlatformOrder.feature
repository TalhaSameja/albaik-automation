Feature: Cross-Platform Order Placement and Verification

  @cross-platform @smoke @order-verification
  Scenario: Place order on mobile and verify on web admin panel for demo purpose
      Given The Albaik application is launched on emulator
      Then Verify that the "Skip" text is displayed
      Then Click on "Skip" button
      Then Click on "android:id/content" button      Then Click on "Sign In" button
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
      

      

    # Web - Verify Order in Admin Panel
      # Then navigate to the web admin panel
      # Then login to the admin panel
      # Then the restaurant panel is loaded and ready
# Then Search captured order id in web search field "Search Order ID"


@pickup
  Scenario: Place a pickup order on mobile
      Given The Albaik application is launched on emulator
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
      Then wait for "5" Seconds
      Then Click on "Order Here" button
      Then Scroll down "2" lines
      Then Click on "Double Espresso" button
      Then Click on "Add to order" button
      Then Click on "View Basket" button
      Then Click on "Confirm Order" button
      Then Click on "Continue" button
      Then Enter "123" into "checkoutCvv" Input
      Then Click on "Pay with card" button
      Then wait for "180" Seconds
      Then Capture and store order id from tracking card "tracking-pickup"


    





    @Carpickup
  Scenario: Place a Car pickup order on mobile
      Given The Albaik application is launched on emulator
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
      Then wait for "5" Seconds
      Then Click on "Bring it to my car" button
      Then Click on "Order Here" button
      Then Scroll down "2" lines
      Then Click on "Double Espresso" button
      Then Click on "Add to order" button
      Then Click on "View Basket" button
      Then Click on "Confirm Order" button
      Then Click on "Continue" button
      Then Enter "123" into "checkoutCvv" Input
      Then Click on "Pay with card" button
      Then wait for "180" Seconds
      Then Capture and store order id from tracking card "tracking-pickup"
    
    
    
@Carpickup
  Scenario: Place a delivery order on mobile
      Given The Albaik application is launched on emulator
      Then Click on "android:id/button2" button
      Then Click on "Saudi Arabia" button
      Then Click on "android:id/button2" button
      Then Click on "Delivery" button
      Then Click on "Choose an address" button