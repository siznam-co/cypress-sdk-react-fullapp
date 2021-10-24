/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import "cypress-file-upload"

const commonLocators = require("../../Locators/commonLocators.json")
const SignUpLocators = require("../../Locators/SignUpLocators.json")

const modifierKey = Cypress.platform === "darwin" ? "meta" : "ctrl"

function getLocators(fieldsType) {
    switch (fieldsType) {
        case "SignUp":
            return SignUpLocators
        default:
            return commonLocators
    }
}
