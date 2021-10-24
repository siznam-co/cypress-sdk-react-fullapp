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