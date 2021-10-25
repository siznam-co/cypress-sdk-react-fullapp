after(() => {
    cy.log("Signing Out.")
    cy.logoutWithUI()
})