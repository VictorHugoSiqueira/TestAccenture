/// <reference types="cypress" />

import assertive from "../Shared/assertive";
import "cypress-file-upload";

const { ASSERTIVE } = assertive.assertive();

Cypress.Commands.add("compareText", (locator, text, time) => {
  cy.get(locator, { timeout: time }).should(ASSERTIVE.COMPARE_TEXT, text);
});

Cypress.Commands.add("isVisible", (locator) => {
  cy.get(locator).should(ASSERTIVE.VISIBLE);
});

Cypress.Commands.add("isClickable", (locator) => {
  cy.get(locator).should(ASSERTIVE.VISIBLE);
  cy.get(locator).click();
});

Cypress.Commands.add("verifyUrl", (text) => {
  cy.url().should(ASSERTIVE.INCLUDE_TEXT, text);
});

Cypress.Commands.add("insertText", (locator, text) => {
  cy.get(locator).should(ASSERTIVE.VISIBLE);
  cy.get(locator).type(text);
});

Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
