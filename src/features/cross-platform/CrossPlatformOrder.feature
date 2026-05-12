Feature: Cross-Platform Order Placement and Verification

  @cross-platform @smoke @order-verification
  Scenario: Place order on mobile and verify on web admin panel for demo purpose
      Given The Albaik application is launched on emulator
      #Then Verify that the "NOTICE" text is displayed
      #Then Click on "Close" button
      Then Verify that the "Deliver to an address" text is displayed
      Then Click on "Scan to Order" button
      # Then Click on "Open Camera" button
      # Then wait for "30" Seconds
      Then Scan QR code from file "branch-KTM Test Branch-qrcode.svg"
      Then wait for "5" Seconds

      # Then Click on "Choose an address" button
      # Then Verify that the "Delivery" text is displayed

    # Web - Verify Order in Admin Panel
      # Then navigate to the web admin panel
      # Then login to the admin panel
      # Then the restaurant panel is loaded and ready

    # Mobile - Pickup
      # Then Click on "Pickup" button
      # Then Verify that the "Pickup" text is displayed
      # Then Click on "Search manually" button

