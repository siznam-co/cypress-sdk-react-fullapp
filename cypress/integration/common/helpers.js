/// <reference types="Cypress" />

import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps"
import "cypress-file-upload"

const commonLocators = require("../../Locators/commonLocators.json")
const SignUpLocators = require("../../Locators/SignUpLocators.json")
const SignInLocators = require("../../Locators/SignInLocators.json")

const modifierKey = Cypress.platform === "darwin" ? "meta" : "ctrl"

function getLocators(fieldsType) {
    switch (fieldsType) {
        case "SignUp":
            return SignUpLocators
        case "SignIn":
            return SignInLocators
        default:
            return commonLocators
    }
}

function generateUUID() {
    const uuid = require("uuid")
    const id = uuid.v4()
    return id.split("-")[4]
}

export function storeRegisteredUser(email, password){
    cy.readFile("cypress/fixtures/Registered_users.json").then((data) => {
        data[email] = password
        cy.writeFile("cypress/fixtures/Registered_users.json", JSON.stringify(data))
    })
}

function getColor(type) {
    if (type.includes("Valid")) {
        if (type.includes("pwPolicy")) {
            return "rgb(10, 136, 82)"
        }
    } else {
        if (type.includes("pwPolicy")) {
            return "rgb(255, 255, 255)"
        }
    }
}

function numToWords(num) {
    var a = ["", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen "]
    var b = ["", "", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    if ((num = num.toString()).length > 9) return "overflow"
    let n = ("000000000" + num).substr(-9).match(/^(\d{2})(\d{2})(\d{2})(\d{1})(\d{2})$/)
    if (!n) return; var str = ""
    str += (n[1] != 0) ? (a[Number(n[1])] || b[n[1][0]] + " " + a[n[1][1]]) + "crore " : ""
    str += (n[2] != 0) ? (a[Number(n[2])] || b[n[2][0]] + " " + a[n[2][1]]) + "lakh " : ""
    str += (n[3] != 0) ? (a[Number(n[3])] || b[n[3][0]] + " " + a[n[3][1]]) + "thousand " : ""
    str += (n[4] != 0) ? (a[Number(n[4])] || b[n[4][0]] + " " + a[n[4][1]]) + "hundred " : ""
    str += (n[5] != 0) ? ((str != "") ? "and " : "") + (a[Number(n[5])] || b[n[5][0]] + " " + a[n[5][1]]) : ""
    return str.trim()
}

export function getUniqueName(previousName, role) {   // theqa13119+User1
    let firstHalf = previousName.split("+")[0]                   // theqa13119
    let secondHalf = previousName.split("+")[1]                  // User1@gmail.com
    let uniqueValue = secondHalf.split("@")[0]                    // User1
    let uniqueNumber = uniqueValue.split(role)[1]                 // 1
    uniqueNumber = parseInt(uniqueNumber) + 1                     // 1 + 1
    let newName = firstHalf + "+" + role + uniqueNumber    // theqa13119 + '+' + User + 2 
    return newName
}

export function getUniqueEmail(previousEmail) { // theqa13119+89787ds8y8@gmail.com
    let firstHalf = previousEmail.split("+")[0]                   // theqa13119
    let thirdHalf = previousEmail.split("@")[1]                      // gmail.com
    let newEmail = firstHalf + "+" + generateUUID() + "@" + thirdHalf    // theqa13119 + '+' + UNIQUE ID + '@' + gmail.com
    return newEmail
}

export function getbBeforeAfterValue(selector, pseudo, property, expectedColor) {
    cy.get(selector).then($els => {
        // get Window reference from element
        const win = $els[0].ownerDocument.defaultView
        // use getComputedStyle to read the pseudo selector
        const cssSelector = win.getComputedStyle($els[0], pseudo)
        // read the value of the `content` CSS property
        const contentValue = cssSelector.getPropertyValue(property)
        // the returned value will have double quotes around it, but this is correct
        expect(contentValue).to.eq(expectedColor)
    })
}

export function performOperation(operation, fieldsType) {
    let locators = getLocators(fieldsType)
    let Locs = locators[operation]
    cy.fixture(fieldsType + "_data").then(returnedData => {
        let data = returnedData[operation]
        for (let loc in Locs) {
            if (loc.includes("Checkbox")) {
                cy.get(Locs[loc]).each((col, index, list) => {
                    cy.wrap(col).click()
                })

            } else if (loc.includes("MultipleSelect")) {

                cy.get(Locs[loc]["dropdown"]).click()
                cy.get(Locs[loc]["input"]).type(data[loc])
                cy.get(Locs[loc]["options"]).each((col, index, list) => {
                    if (index >= 3)
                        return
                    cy.wrap(col).click({ force: true })
                })
                cy.get(Locs[loc]["dropdown"]).click()

            } else if (loc.includes("SingleSelect")) {

                cy.get(Locs[loc]["dropdown"]).click()
                cy.get(Locs[loc]["input"]).type(data[loc])
                cy.get(Locs[loc]["options"]).click()
                cy.get(Locs[loc]["dropdown"]).click()

            } else if (loc.includes("TextButton")) {
                cy.get(Locs[loc]).contains(data[loc]).click({ force: true })

            } else if (loc.includes("ImageHolder")) {
                cy.get(Locs[loc]).attachFile(data[loc])

            } else if (loc.includes("Btn")) {
                cy.get(Locs[loc]).click({ force: true })

            } else if (loc.includes("Radio")) {
                cy.get(Locs[loc]).check(data[loc])

            } else if (loc.includes("MultipleClicks")) {
                var i = data[loc]
                while (i != 0) {
                    cy.get(Locs[loc]).click({ force: true, multiple: true })
                    i = i - 1
                }

            } else if (loc.includes("MultipleButton")) {
                cy.get(Locs[loc]).each((col, index, list) => {
                    cy.wrap(col).click({ force: true })
                })

            } else if (loc.includes("ContainsText")) {
                cy.get(Locs[loc]).should("contain", data[loc])

            } else if (loc.includes("ColorBefore")) {
                getbBeforeAfterValue(Locs[loc], "before", data[loc], getColor(loc))

            } else if (loc.includes("ColorAfter")) {
                getbBeforeAfterValue(Locs[loc], "after", data[loc], getColor(loc))

            } else if (loc.includes("InputField")) {
                cy.get(Locs[loc]["input"]).invoke("val").then(inputValue => {
                    cy.get(Locs[loc]["value"])
                        .eq(data[loc])
                        .should("contain", inputValue)
                })

            } else if (loc.includes("LabelField")) {
                cy.get(Locs[loc]["label"]).invoke("text").then(labelValue => {
                    cy.get(Locs[loc]["value"])
                        .eq(data[loc])
                        .should("contain", labelValue)
                })

            } else if (loc.includes("Msg")) {
                cy.get(Locs[loc]).should("have.text", data[loc])

            } else if (loc.includes("NotInDOM")) {
                cy.get(Locs[loc]).should("not.exist")

            } else if (loc.includes("BeInDOM")) {
                cy.get(Locs[loc]).should("exist")

            } else if (loc.includes("BeVisible")) {
                cy.get(Locs[loc]).should("be.visible")

            } else if (loc.includes("BeDisabled")) {
                cy.get(Locs[loc]).should("be.disabled")

            } else if (loc.includes("IsFocused")) {
                cy.get(Locs[loc]).should("be.focused")

            } else if (loc.includes("Evaluated")) {
                cy.get(Locs[loc]).should("have.value", data[loc])

            } else if (loc.includes("@")) {
                cy.wait(loc).its("response.statusCode").should("eq", Locs[loc])

            } else if (loc.includes("haveText")) {
                cy.get(Locs[loc]).invoke("text").then(copy => {
                    expect(copy).to.equal(data[loc])
                })
            } else if (loc.includes("MultipleInputs")) {
                cy.get(Locs[loc]).each((col, index, list) => {
                    cy.wrap(col).clear()
                    cy.wrap(col).type(data[loc] + numToWords(index + 1))
                })
            } else {
                if (loc.includes("UNIQUE_")){
                    let email = getUniqueEmail(data[loc])
                    cy.get(Locs[loc]).clear()
                    cy.get(Locs[loc]).type(email)
                    storeRegisteredUser(email, data["passwordField"])
                } else {
                    cy.get(Locs[loc]).clear()
                    cy.get(Locs[loc]).type(data[loc])
                }

            }
        }
    })
}

Given("The user is logged in successfully.", () => {
    cy.get(commonLocators.sideNavMenu).should("be.visible")
})

Then("the {string} validation error should appear.", (validationError) => {
    cy.get(commonLocators.validationError).contains(validationError).should("have.text", validationError)
})

Then("the {string} validation error should appear against phone number field.", (validationError) => {
    cy.get(commonLocators.phoneValidationError).should("have.text", validationError)
})

When("the user navigates to the {string} screen via {string}.", (subScreen, screen) => {
    cy.get(commonLocators.menuBtn).contains(screen).click()
    cy.get(commonLocators.subMenuBtn).contains(subScreen).click({ force: true })
})

When("the user navigates to the {string} screen.", (screen) => {
    cy.get(commonLocators.menuBtn).contains(screen).click()
})

Then("The user should be moved to the {string}.", (screen) => {
    if (screen.includes("signIn")) {
        cy.get(commonLocators[screen]).should("be.visible")
    } else {
        cy.get(commonLocators.pageHeading).should("contain", screen)
    }
})

When("the user hits the {string} button at {string} screen.", (btn, btnType) => {
    let locators = getLocators(btnType)
    cy.get(locators[btn]).click()
})