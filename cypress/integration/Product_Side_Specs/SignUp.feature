Feature: Sign Up Feature

    This Feature: contains all the test cases of sign up.

    Scenario: Go to the Login screen and verify there is a Sign Up button.
    Given The user should be moved to the "signInToDoneDayScreen".
    When the user hits the "signInToDoneDayBtn" button at "SignIn" screen.
    Then The user should be moved to the "signInScreen".

    Scenario: Verify Mandatory / Blank fields validations.
    When the user hits the "signInScreenSignUpBtn" button at "SignIn" screen.
    Then the user verify "blankFields" at the "SignUp" screen.

    Scenario: Verify Invalid fields validations.
    Given the user verify "invalidFields" at the "SignUp" screen.

    # Enable below scenario only if you have an existing user in this Environment. 
    # If you have, then provide username and password in Cypress.json > env > username and password

    # Scenario: Verify Already Existing account validation.
    # Given the user verify "alreadyExistingAccount" at the "SignUp" screen.

    Scenario: Sign Up a new user in the Application.
    When the user "createsAccount" at the "SignUp" screen.
    Then The user should be moved to the "Dashboard".