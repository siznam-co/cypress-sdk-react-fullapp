/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { performOperation } from "../../common/helpers"

const commonLocators = require("../../../Locators/commonLocators.json") 
const SignUpLocators = require("../../../Locators/SignUpLocators.json")

When("the user hits {string} button.", (btn) => {
    cy.get(SignUpLocators[btn]).click() 
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

Then("Initially, the {string} should not be clickable at {string} screen.", (operation, fieldsType) => {
    performOperation(operation, fieldsType)
})
