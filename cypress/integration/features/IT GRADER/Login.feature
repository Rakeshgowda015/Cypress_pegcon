
Feature: Login To Dashboard

    This feature file contains all the scenarios related to login page

    #Purpose:To validating the login page elements
    Scenario: To validating the login page elements
        Given I access the URL as Admin
        Then I should be displayed with login page elements

    #Purpose: To validating the signin button
    Scenario: To validating the signin button
        Given I access the URL as Admin
        Then I should be on login page
        When I enter username in login page
        And I enter password in login page
        And I click on sign in button in login page
        Then I should be displayed with dashboard page