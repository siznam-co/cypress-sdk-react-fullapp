before(() => {
    // Login in to app.
    cy.log("This is inner before call")
    cy.loginWithUI(Cypress.env("Username"), Cypress.env("Password"), "Sign up")
    // cy.loginWithApi(Cypress.env("Username"), Cypress.env("Password"))
})  