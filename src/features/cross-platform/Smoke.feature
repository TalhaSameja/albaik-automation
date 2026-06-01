Feature: Smoke Tests - Mobile Application

  @mobile @smoke @login
  Scenario: User signs into the application
    Given The Albaik application is launched
    When the user closes the notice popup
    And Click on profile icon
    Then Click on "Login" button
    # Wait for the next steps based on the UI locators you provide.
    # For example:
    # Then Enter "05xxxxxxxx" into "Phone Number" Input
    # Then Click on "Submit" button
    # Then Enter password
    # Then Click on "Login" button
