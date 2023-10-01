// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
/// <reference types="Cypress" />

import "./commands";
require("cypress-xpath");
import "cypress-cucumber-attach-screenshots-to-failed-steps";
require("./commands");
Cypress.on("uncaught:exception", () => {
    // returning false here prevents Cypress from
    // failing the test
    return false;
});
before(() => {
    //Clearing cookies
    cy.clearCookies();
});

beforeEach(function () {
    // root-level hook
    // runs once before all tests
    cy.fixture('DevData').then(function (data) {
        this.data = data;
    });
});
