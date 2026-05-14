Feature: Cross-Platform Order Placement and Verification

  @cross-platform @smoke @order-verification
  Scenario: Place order on mobile and verify on web admin panel for demo purpose
      Given The Albaik application is launched on emulator
      # Then Verify that the "NOTICE" text is displayed
      # Then Click on "Close" button
      Then Verify that the "Skip" text is displayed
      Then Click on "Skip" button
      Then Scroll down "2" lines
      Then Click on profile icon
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
      Then Scroll down "2" lines
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

    # Mobile - Pickup
      # Then Click on "Pickup" button
      # Then Verify that the "Pickup" text is displayed
      # Then Click on "Search manually" button
      # Then wait for "30" Seconds
     



    
    
