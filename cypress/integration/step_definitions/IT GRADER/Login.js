/// //<reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import LoginPage from "../../../support/pageObject/LoginPage";

const loginPage = new LoginPage();

//This function is used to access the URL
Given("I access the URL as Admin", function () {
    cy.visit(Cypress.env("Dashboard"));
    cy.wait(1000);
})

Then("I should be on login page", function () {
    cy.title().should('eq', 'ITTools')
})
When("I enter username in login page", function () {
    let username = this.data.Users[0].name;
    let password = this.data.Users[0].Password;
    loginPage.userTextFiled().type(username)
})

And("I enter password in login page", function () {
    let password = this.data.Users[0].Password;
    loginPage.passwordTextFiled().type(password)
})

And("I click on sign in button in login page", function () {
    loginPage.loginButton().click()
    cy.wait(10000);
})

Then("I should be displayed with login page elements", function () {
    loginPage.loginPageElemente().should('be.visible')
    cy.wait(10000);
})