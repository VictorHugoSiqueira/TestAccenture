/// <reference types="cypress" />

import locators from "../../Shared/locators";
import texts from "../../Shared/texts";

const { TAB_TWO, TAB_ONE } = locators.home();
const { TAB_TWO_TEXT } = texts.home();

const file = "download.jpg";

export class InsurantPage {
  insertInputValues() {
    cy.isVisible(TAB_TWO.FIRST_NAME).type(TAB_TWO_TEXT.FIRST_NAME);
    cy.isVisible(TAB_TWO.LAST_NAME).type(TAB_TWO_TEXT.LAST_NAME);
    cy.isVisible(TAB_TWO.DATE_OF_BIRTH).type(TAB_TWO_TEXT.DATE_OF_BIRTH);
    cy.isClickable(TAB_TWO.GENDER);
    cy.isVisible(TAB_TWO.STREET_ADDRESS).type(TAB_TWO_TEXT.STREET_ADDRESS);
    cy.get(TAB_TWO.COUNTRY).select(TAB_TWO_TEXT.COUNTRY);
    cy.isVisible(TAB_TWO.ZIPCODE).type(TAB_TWO_TEXT.ZIPCODE);
    cy.isVisible(TAB_TWO.CITY).type(TAB_TWO_TEXT.CITY);
    cy.get(TAB_TWO.COUNTRY).select(TAB_TWO_TEXT.COUNTRY);
    cy.get(TAB_TWO.OCCUPATION).select(TAB_TWO_TEXT.OCCUPATION);
    cy.isClickable(TAB_TWO.HOBBIES);
    cy.isVisible(TAB_TWO.WEBSITE).type(TAB_TWO_TEXT.WEBSITE);
    cy.get(TAB_TWO.PICTURE).attachFile(file);
  }

  nextPage() {
    cy.isClickable(TAB_TWO.BUTTON_NEXT_PRODUCT_DATA);
  }

  checkingSencondTabComponent() {
    cy.isClickable(TAB_TWO.CITY);
  }

  checkText() {
    cy.compareText(TAB_TWO.LABEL_ZIPCODE, TAB_TWO_TEXT.LABEL_ZIPCODE);
    cy.compareText(TAB_TWO.LABEL_CITY, TAB_TWO_TEXT.LABEL_CITY);
    cy.compareText(TAB_TWO.LABEL_GENDER, TAB_TWO_TEXT.LABEL_GENDER);
    cy.compareText(TAB_TWO.LABEL_WEBSITE, TAB_TWO_TEXT.LABEL_WEBSITE);
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
}

const insurantPage = new InsurantPage();
export default insurantPage;
