Feature: Example Web Application

  @web @smoke
  Scenario: Open Example.com and verify the heading
    Given the web application is open
    When the user opens the example web page
    Then the page heading should equal "Example Domain"
    When the user clicks the more information link
    Then the browser should navigate to a page with url containing "iana.org"
