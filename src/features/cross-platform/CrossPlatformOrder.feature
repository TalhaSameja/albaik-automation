Feature: Cross-Platform Order Placement and Verification

  @cross-platform @smoke @order-verification
  Scenario: Place order on mobile and verify on web admin panel for demo purpose
      Given The Albaik application is launched on emulator
      # Then Verify that the "NOTICE" text is displayed
      # Then Click on "Close" button
      Then Verify that the "Delivery" text is displayed
      Then Click on "Scan to Order" button
      Then Click on "Open Camera" button
     
      Then Verify that the "Start" text is displayed
      Then Click on "Start" button
      Then wait for "30" Seconds
      # When I bypass the QR scan for "KTM_BRANCH"
      # Then Scan QR code from file "branch-KTM Test Branch-qrcode.svg"
      # After scanning, verify that we are on the store's page.
      # Then Verify that the "KTM Test Branch" text is displayed
      # Then Click on "Choose an address" button
      # Then Verify that the "Delivery" text is displayed
      # Then wait for "30" Seconds

    # Web - Verify Order in Admin Panel
      # Then navigate to the web admin panel
      # Then login to the admin panel
      # Then the restaurant panel is loaded and ready

    # Mobile - Pickup
      # Then Click on "Pickup" button
      # Then Verify that the "Pickup" text is displayed
      # Then Click on "Search manually" button
      # Then wait for "30" Seconds
     



    
    
