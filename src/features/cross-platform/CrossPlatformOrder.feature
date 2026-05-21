# Feature: Cross-Platform Order Placement and Verification

#   @scan
#   Scenario: Place order on mobile and verify on web admin panel for demo purpose
#       Given The Albaik application is launched on physical device
#       Then Verify that the "Skip" text is displayed
#       Then Click on "Skip" button
#       Then Click on "android:id/content" button
#       Then Click on "Sign In" button
#       Then Enter "532255875" into "5XXXXXXXX" Input
#       Then Enter "11223344" as password
#       Then Click on "Sign In" button
#       Then wait for "10" Seconds
#       And I redirect to branch "539" to bypass QR scan
#       Then Verify that the "Start" text is displayed
#       Then Click on "Start" button
#       Then Scroll down "2" lines
#       Then Click on "Falafel Meal" button
#       Then Click on "Add to order" button
#       Then Click on "View Basket" button
#       Then Click on "Confirm Order" button
#       Then Click on "Continue" button
#       Then Enter "123" into "checkoutCvv" Input
#       Then Click on "Pay with card" button
#       Then wait for "180" Seconds
#       Then Capture and store order id from tracking card "tracking-instore"
#       Then navigate to the web admin panel
#       Then login to the admin panel
#       Then the restaurant panel is loaded and ready
#       Then wait for "5" seconds in web
#       Then Click on web Button with "/admin/orders"
#       Then wait for "2" seconds in web
#       Then Enter captured order ID into input field "search"
#       Then Hit "Enter" key in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "KTM Test Branch"
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Restaurant dashboard"
#       Then wait for "5" seconds in web
#       Then Enter captured order ID into input field "search"
#       Then Hit "Enter" key in web
#       Then wait for "2" seconds in web
#       Then Click on the order with captured order ID
#       Then Verify that the order details page is displayed with correct order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "KTM Test Branch"
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Restaurant dashboard"
#       Then wait for "5" seconds in web
#       Then Enter captured order ID into input field "search"
#       Then Hit "Enter" key in web
#       Then wait for "2" seconds in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Print Receipt & Start Collecting"
#       Then wait for "2" seconds in web
#       Then accept web alert
#       Then wait for "2" seconds in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Prepared"

      


# @pickup
#   Scenario: Place a pickup order on mobile
#       Given The Albaik application is launched on physical device
#       Then Click on "android:id/button2" button
#       Then Click on "Saudi Arabia" button
#       Then Click on "android:id/button2" button
#       Then Verify that the "Skip" text is displayed
#       Then Click on "Skip" button
#       Then Click on "android:id/content" button
#       Then Click on "Sign In" button
#       Then Enter "532255875" into "5XXXXXXXX" Input
#       Then Enter "11223344" as password
#       Then Click on "Sign In" button
#       Then wait for "10" Seconds
#       Then Click on "ChannelPicker" button
#       Then Click on "Pickup from a restaurant" button
#       Then Click on "Choose a restaurant" button
#       Then Click on "Search manually" button
#       Then Enter "ktm" into "City, Branch" Input
#       Then Hit "Enter" key
#       Then Click on "KTM Test Branch" button
#       Then wait for "20" Seconds
#       Then Click on "Order Here" button
#       Then Scroll down "2" lines
#       Then Click on "Double Espresso" button
#       Then Click on "Add to order" button
#       Then Click on "View Basket" button
#       Then wait for "10" Seconds
#       Then Click on "Confirm Order" button
#       Then wait for "10" Seconds
#       Then Click on "Continue" button
#       Then wait for "5" seconds
#       Then Enter "123" into "checkoutCvv" Input
#       Then Click on "Pay with card" button
#       Then wait for "180" Seconds
#       Then Capture and store order id from tracking card "tracking-pickup"
#       Then navigate to the web admin panel
#       Then login to the admin panel
#       Then the restaurant panel is loaded and ready
#       Then wait for "5" seconds in web
#       Then Click on web Button with "/admin/orders"
#       Then wait for "2" seconds in web
#       Then Enter captured order ID into input field "search"
#       Then Hit "Enter" key in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "KTM Test Branch"
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Restaurant dashboard"
#       Then wait for "5" seconds in web
#       Then Enter captured order ID into input field "search"
#       Then Hit "Enter" key in web
#       Then wait for "2" seconds in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Print Receipt & Start Collecting"
#       Then wait for "2" seconds in web
#       Then accept web alert
#       Then wait for "2" seconds in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#     #   Then Click on web Button with "Prepared"

    





# @Carpickup
#   Scenario: Place a Car pickup order on mobile
#       Given The Albaik application is launched on physical device
#       Then Click on "android:id/button2" button
#       Then Click on "Saudi Arabia" button
#       Then Click on "android:id/button2" button
#       Then Verify that the "Skip" text is displayed
#       Then Click on "Skip" button
#       Then Click on "android:id/content" button
#       Then Click on "Sign In" button
#       Then Enter "532255875" into "5XXXXXXXX" Input
#       Then Enter "11223344" as password
#       Then Click on "Sign In" button
#       Then wait for "10" Seconds
#       Then Click on "ChannelPicker" button
#       Then Click on "Pickup from a restaurant" button
#       Then Click on "Choose a restaurant" button
#       Then Click on "Search manually" button
#       Then Enter "ktm" into "City, Branch" Input
#       Then Hit "Enter" key
#       Then Click on "KTM Test Branch" button
#       Then wait for "20" Seconds
#       Then Click on "bring it to my car" button
#       Then Click on "Order Here" button
#       Then Scroll down "2" lines
#       Then Click on "cola" button
#       Then Click on "Add to order" button
#       Then Click on "View Basket" button
#       Then Click on "Confirm Order" button
#       Then Click on "Choose this car" button
#       Then Click on "Continue" button
#       Then Enter "123" into "checkoutCvv" Input
#       Then Click on "Pay with card" button
#       Then wait for "180" Seconds
#       Then Capture and store order id from tracking card "tracking-curbside"
#       Then navigate to the web admin panel
#       Then login to the admin panel
#       Then the restaurant panel is loaded and ready
#       Then wait for "5" seconds in web
#       Then Click on web Button with "/admin/orders"
#       Then wait for "2" seconds in web
#       Then Enter captured order ID into input field "search"
#       Then Hit "Enter" key in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "KTM Test Branch"
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Restaurant dashboard"
#       Then wait for "5" seconds in web
#       Then Enter captured order ID into input field "search"
#       Then Hit "Enter" key in web
#       Then wait for "2" seconds in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Print Receipt & Start Collecting"
#       Then wait for "2" seconds in web
#       Then accept web alert
#       Then wait for "2" seconds in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#     #   Then Click on web Button with "Prepared"


# @delivery
#     Scenario: Place a delivery order on mobile, process via admin panel, and deliver via driver app
#   Given The Albaik application is launched on physical device
#       Then Verify that the "Skip" text is displayed
#       Then Click on "Skip" button
#       Then Click on "android:id/content" button
#       Then Click on "Sign In" button
#       Then Enter "532255875" into "5XXXXXXXX" Input
#       Then Enter "11223344" as password
#       Then Click on "Sign In" button
#       Then wait for "10" Seconds
#       Then Click on "ChannelPicker" button
#       Then Click on "Delivery" button
#       Then Click on "Choose an address" button
#       Then wait for "5" Seconds
#       Then Swipe left "2" times
#       Then Click on "KTM OFFICE" button
#       Then Click on "Choose this location" button
#       Then Click on "Choose this location" button
#       Then Scroll down "2" lines
#       Then Click on "cola" button
#       Then Click on "Add to order" button
#       Then Click on "View Basket" button
#       Then Click on "Confirm Order" button
#       Then Click on "Continue" button
#       Then Enter "123" into "checkoutCvv" Input
#       Then Click on "Pay with card" button
#       Then wait for "180" Seconds
#       Then Capture and store order id from tracking card "tracking-delivery"
#       Then navigate to the web admin panel
#       Then login to the admin panel
#       Then the restaurant panel is loaded and ready
#       Then wait for "5" seconds in web
#       Then Click on web Button with "/admin/orders"
#       Then wait for "2" seconds in web
#       Then Enter captured order ID into input field "search"
#       Then Hit "Enter" key in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "KTM Test Branch"
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Restaurant dashboard"
#       Then wait for "5" seconds in web
#       Then Enter captured order ID into input field "search"
#       Then Hit "Enter" key in web
#       Then wait for "2" seconds in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Print Receipt & Start Collecting"
#       Then wait for "2" seconds in web
#       Then accept web alert
#       Then wait for "2" seconds in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Prepared"
#       Then Close the Albaik application on physical device
#       Given The Albaik Driver application is launched on physical device
#       Then wait for "5" Seconds
#       Then Click on "1" button
#       Then Click on "Scan receipt" button
#       Then Click on "Enter order number" button
#       Then Enter captured order ID into "receipt number" Input
#       Then Click on "Submit" button
#       Then wait for "5" Seconds
#       Then Click on "Start delivering" button
#       Then wait for "5" Seconds
#       Then Click on "Delivered" button
#       Then wait for "5" Seconds
#       Then Click on "Delivered" button






# @curbside
#   Scenario: Web - Verify Order in Curbside Panel
#       Then navigate to the curbside web panel
#       Then login to the curbside panel
#       Then the curbside panel is loaded and ready
#       Then Click on web Button with "Assign order to me"
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Assign manually"
#       Then wait for "2" seconds in web
#       Then Enter captured order ID into input field "order_id_order_id"
#       Then Click on web Button with "Assign order"
      
# @web
#   Scenario: Web - Verify Order in Admin Panel
#       Then navigate to the web admin panel
#       Then login to the admin panel
#       Then the restaurant panel is loaded and ready
#       Then wait for "5" seconds in web
#       Then Click on web Button with "/admin/orders"
#       Then wait for "2" seconds in web
#       Then Enter captured order ID into input field "search"
#       Then Hit "Enter" key in web
#       Then Click on the order with captured order ID
#       Then Verify that the order details page is displayed with correct order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "KTM Test Branch"
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Restaurant dashboard"
#       Then wait for "5" seconds in web
#       Then Enter captured order ID into input field "search"
#       Then Hit "Enter" key in web
#       Then wait for "2" seconds in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Print Receipt & Start Collecting"
#       Then wait for "2" seconds in web
#       Then Click on web Button with "OK"
#       Then wait for "2" seconds in web
#       Then Click on the order with captured order ID
#       Then wait for "2" seconds in web
#       Then Click on web Button with "Prepared"

# @driver 
#   Scenario: Driver Application - Login and update order status
#       Given The Albaik Driver application is launched on emulator
#       Then wait for "5" Seconds
#     #   Then Enter "557788990" into "phoneNumber" Input
#     #   Then Enter "11223344" into "password" Input
#     #   Then Click on "submit" button
#     #   Then wait for "5" Seconds
#     #   Then Click on "Next" button
#     #   Then Click on "Next" button
#     #   Then Click on "Next" button
#     #   Then Click on "Next" button
#     #   Then Click on "Next" button
#     #   Then Click on "I have read all the safety guidelines" button
#     #   Then Click on "Start the Ride" button
#     #   Then wait for "3" Seconds
#     #   Then Click on "Continue" button
#     #   Then wait for "2" Seconds
#     #   Then Click on "com.android.permissioncontroller:id/permission_allow_foreground_only_button" button
#     #   Then wait for "3" Seconds
#     #   Then Click on "Join restaurant queue" button
#     #   Then Click on "I have arrived" button
#       Then Click on "1" button
#       Then Click on "Scan receipt" button
#       Then Click on "Enter order number" button
#       Then Enter captured order ID into "receipt number" Input
#       Then Click on "Submit" button
#       Then wait for "5" Seconds
#       Then Click on "Start delivering" button
#       Then wait for "5" Seconds
#       Then Click on "Delivered" button 
#       Then wait for "5" Seconds
#       Then Click on "Delivered" button 
