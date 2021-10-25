/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { performOperation } from "../../common/helpers"

const commonLocators = require("../../../Locators/commonLocators.json") 
const SignUpLocators = require("../../../Locators/SignUpLocators.json")

When("the user hits {string} button.", (btn) => {
    cy.get(SignUpLocators[btn]).click() 
})

Then("the SDK should be loaded successfully.", () => {
    cy.wait("@getBundle").its("response.statusCode").should("eq", 200)
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
