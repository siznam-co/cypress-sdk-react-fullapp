/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { performOperation } from "../../common/helpers"

const commonLocators = require("../../../Locators/commonLocators.json") 
const SignUpLocators = require("../../../Locators/SignUpLocators.json")

When("the user hits {string} button.", (btn) => {
    cy.get(SignUpLocators[btn]).click() 
})

Then("the SDK should be loaded successfully.", () => {
    cy.wait("@getIntegryKeys").its("response.statusCode").should("eq", 200)

    // cy.wait("@getBundle")

    // cy.request({
    //     method: "GET",
    //     url: "https://app.integry.io/bundle/1072/",
    //     headers: {
    //         "authority": "app.integry.io",
    //         "connection": "keep-alive",
    //         "accept": "*/*",
    //         // "Authorization": "Bearer undefined",
    //         "origin": "/",
    //         "referer": "/",
    //     },
    //     body : {
    //         "app_key": "bc0f52d8-b784-448a-a475-dce6359a32de",
    //         "hash": "98cb2f5ea9c644b1c2a983def6c79c94c020daf6b22b86dd26d34ab7e0f4fe98",
    //         "user_id": "auth0|6175551f06721e0069124069"
    //     }
    // }).then((response) => {
    //     expect(response.status).equal(200)
    //     // Storing user Data in Cache
    //     // cy.window().then((window) => {
    //     //     window.localStorage.setItem("profile", JSON.stringify(response.body))
    //     //     cy.log("The user logged in successfully")
    //     //     cy.visit("/login")
    //     // })
    // })
})

When("the user {string} at the {string} screen.", (operation, fieldsType) => {
    performOperation(operation, fieldsType)
})

When("the user verify {string} at the {string} screen.", (operation, fieldsType) => {
    performOperation(operation, fieldsType)
})

When("the user {string} the {string}.", (operation, fieldsType) => {
    performOperation(operation, fieldsType)
})

Then("the {string} appears for the created {string} should be correct.", (operation, fieldsType) => {
    performOperation(operation, fieldsType)
})

When("the user hits {string} without submitting mandatory fields at the {string} screen.", (operation, fieldsType) => {
    cy.get(commonLocators[operation + "Btn"]).click()
    performOperation(operation + "Invalid", fieldsType, "invalid")
})

When("the user hits {string} with submitting all mandatory fields at the {string} screen.", (operation, fieldsType) => { 
    cy.get(commonLocators[operation + "Btn"]).click()
    performOperation(operation + "Valid", fieldsType, "valid")
})

Then("Initially, the {string} should not be clickable at {string} screen.", (operation, fieldsType) => {
    performOperation(operation, fieldsType)
})
