/// <reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import { createOperation, readOperation, submitOperation } from "../../common/helpers"

const commonLocators = require("../../../Locators/commonLocators.json")
const SignUpLocators = require("../../Locators/SignUpLocators.json")

When("the user hits {string} button.", (btn) => {
    cy.get(SignUpLocators[btn]).click() 
})
