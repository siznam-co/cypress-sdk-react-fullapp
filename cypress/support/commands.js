/// <reference types="Cypress" />

import 'cypress-mailosaur'

const commonLocators = require("../Locators/commonLocators.json")
const SignInLocators = require("../Locators/SignInLocators.json")

let LOCAL_STORAGE_MEMORY = {}

Cypress.Commands.add("saveLocalStorage", () => {
    Object.keys(localStorage).forEach(key => {
        LOCAL_STORAGE_MEMORY[key] = localStorage[key]
    })
})

Cypress.Commands.add("restoreLocalStorage", () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach(key => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
  })
})

Cypress.Commands.add("loginWithApi", (username, password) => {

    cy.request({
        method: "POST",
        url: "/api/auth/login",
        headers: {
            "Host": Cypress.config().baseUrl().split("//")[1],
            "Connection": "keep-alive",
            "Accept": "application/json, text/plain, */*",
            // "Authorization": "Bearer undefined",
            "Origin": "/",
            "Referer": "/login",
        },
        followRedirect: true,
        form: false,
        body: { 
            "email": username, 
            "password": password
        }
    }).then((response) => {
        expect(response.status).equal(200)
        // Storing user Data in Cache
        cy.window().then((window) => {
            window.localStorage.setItem("profile", JSON.stringify(response.body))
            cy.log("The user logged in successfully")
            cy.visit("/login")
        })
    })
})

Cypress.Commands.add("loginWithUI", (username, password) => {
    cy.visit("/login")
    // Check if the user is on the login page. 
    cy.get(SignInLocators.signInToDoneDayBtn).should("be.visible")
    cy.get(SignInLocators.signInToDoneDayBtn).click()

    // Enter credentials and log in.
    cy.get(SignInLocators.emailField).type(username)
    cy.get(SignInLocators.passwordField).type(password)

    cy.get(SignInLocators.submitButton).click()
})

Cypress.Commands.add("logoutWithUI", () => {
    cy.get(SignInLocators.logout.profileAvatarBtn).click()
    cy.get(SignInLocators.logout.signOutOption).click()
    cy.get(SignInLocators.signInToDoneDayBtn).should("be.visible")
})

Cypress.Commands.add("runRoutes", () => {

    cy.intercept("GET", "https://app.integry.io/bundle/*").as("getBundle") 
})