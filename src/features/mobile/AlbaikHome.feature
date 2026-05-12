Feature: Albaik Home – Order Type Selection

  @mobile @smoke @home
  Scenario: User selects pickup from a restaurant from the bottom sheet
    Given the Albaik application is launched
    When the user closes the notice popup
    And the user selects "Pickup from a restaurant" from the order type bottom sheet
    Then click "Choose a Restraunt" button on bottom sheet
    Then click "Search Manually" button 
    Then type "ktm" in the search field
    Then click "Car Pickup" button
    Then select "KTM" from the search results
    Then click "Bring it to my car" button
    Then click "Order Here" button on the bottom
