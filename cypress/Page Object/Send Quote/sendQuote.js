/// <reference types="cypress" />

import locators from "../../Shared/locators";
import texts from "../../Shared/texts";

const { TAB_FIVE, TAB_ONE } = locators.home();
const { TAB_FIVE_TEXT } = texts.home();

export class SendQuote {
  insertInputValues() {
    cy.isVisible(TAB_FIVE.EMAIL).type(TAB_FIVE_TEXT.EMAIL);
    cy.isVisible(TAB_FIVE.PHONE).type(TAB_FIVE_TEXT.PHONE);
    cy.isVisible(TAB_FIVE.USERNAME).type(TAB_FIVE_TEXT.USERNAME);
    cy.isVisible(TAB_FIVE.PASSWORD).type(TAB_FIVE_TEXT.PASSWORD);
    cy.isVisible(TAB_FIVE.CONFIRM_PASSWORD).type(
      TAB_FIVE_TEXT.CONFIRM_PASSWORD
    );
    cy.isVisible(TAB_FIVE.COMMENTS).type(TAB_FIVE_TEXT.COMMENTS);
  }

  saveButton() {
    cy.isClickable(TAB_FIVE.BUTTON_SEND_EMAIL);
  }

  checkingFifthTabComponent() {
    cy.isVisible(TAB_FIVE.EMAIL);
  }

  checkButton() {
    cy.isVisible(TAB_ONE.TRICENTIS_BUTTON);
    cy.isVisible(TAB_ONE.VISIT_SUPPORT_BUTTON);
    cy.isVisible(TAB_ONE.AUTOMOBILE_BUTTON);
    cy.isVisible(TAB_ONE.TRUCK_BUTTON);
    cy.isVisible(TAB_ONE.MOTORCYCLE_BUTTON);
    cy.isVisible(TAB_ONE.CAMPER_BUTTON);
    cy.isVisible(TAB_ONE.REQUEST_BUTTON);
    cy.isVisible(TAB_ONE.HOME_BUTTON);
    cy.isVisible(TAB_ONE.ABOUT_BUTTON);
    cy.isVisible(TAB_ONE.PRODUCTS_BUTTON);
    cy.isVisible(TAB_ONE.EVENTS_BUTTON);
    cy.isVisible(TAB_ONE.RESOURCES_BUTTON);
    cy.isVisible(TAB_ONE.SERVICES_BUTTON);
  }

  checkText() {
    cy.compareText(TAB_FIVE.LABEL_PHONE, TAB_FIVE_TEXT.LABEL_PHONE);
    cy.compareText(TAB_FIVE.LABEL_USERNAME, TAB_FIVE_TEXT.LABEL_USERNAME);
    cy.compareText(TAB_FIVE.LABEL_PASSWORD, TAB_FIVE_TEXT.LABEL_PASSWORD);
    cy.compareText(TAB_FIVE.LABEL_EMAIL, TAB_FIVE_TEXT.LABEL_EMAIL);
  }

  msgSuccess() {
    cy.compareText(TAB_FIVE.LABEL_SUCCESS, TAB_FIVE_TEXT.LABEL_SUCCESS, 15000);
  }
}

const sendQuote = new SendQuote();
export default sendQuote;
