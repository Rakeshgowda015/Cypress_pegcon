/// //<reference types="Cypress" />
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import HomePage from "../../../support/pageObject/HomePage";

const homePage = new HomePage();

//This function is used to access the URL
Then("I should be displayed with dashboard page", function () {
    homePage.dashboardHeader().should('be.visible')
})

