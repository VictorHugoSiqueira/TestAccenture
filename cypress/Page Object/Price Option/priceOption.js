/// <reference types="cypress" />

import locators from "../../Shared/locators";
import texts from "../../Shared/texts";

const { TAB_FOUR, TAB_ONE } = locators.home();
const { TAB_FOUR_TEXT } = texts.home();

export class PriceOption {
  insertInputValues() {
    cy.isClickable(TAB_FOUR.SELECT_OPTION);
  }

  nextPage() {
    cy.isClickable(TAB_FOUR.BUTTON_NEXT_PAGE);
  }

  checkingFourthTabComponent() {
    cy.isClickable(TAB_FOUR.SELECT_OPTION);
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
    cy.compareText(TAB_FOUR.LABEL_SILVER, TAB_FOUR_TEXT.LABEL_SILVER);
    cy.compareText(TAB_FOUR.LABEL_GOLD, TAB_FOUR_TEXT.LABEL_GOLD);
    cy.compareText(TAB_FOUR.LABEL_PLATINUM, TAB_FOUR_TEXT.LABEL_PLATINUM);
    cy.compareText(TAB_FOUR.LABEL_ULTIMATE, TAB_FOUR_TEXT.LABEL_ULTIMATE);
  }
}

const priceOption = new PriceOption();
export default priceOption;
