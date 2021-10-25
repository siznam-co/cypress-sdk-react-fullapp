Feature: Integrations Feature

    This Feature: contains all the test cases of sign up.

    # To run these scenarios, make sure you have an existing user in this Environment. 
    # If you have, then provide username and password in Cypress.json > env > username and password

    Scenario: Go to Integrations page and velidate the bundles. 
    Given The user should be moved to the "Dashboard".
    When the user navigates to the "Integrations" screen.
    # The below step needs more RND to.
    Then the SDK should be loaded successfully.
        And The user should be moved to the "Integrations".
    
    Scenario: Go to the Login screen and Login with valid user. 
    When the user "openAndClosePopup" at the "Integrations" screen.
