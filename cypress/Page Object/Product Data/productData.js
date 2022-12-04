/// <reference types="cypress" />

import locators from "../../Shared/locators";
import texts from "../../Shared/texts";

const { TAB_THREE, TAB_ONE } = locators.home();
const { TAB_THREE_TEXT } = texts.home();

export class ProductData {
  insertInputValues() {
    cy.isVisible(TAB_THREE.START_DATE).type(TAB_THREE_TEXT.START_DATE);
    cy.get(TAB_THREE.INSURANCE_SUM).select(TAB_THREE_TEXT.INSURANCE_SUM);
    cy.get(TAB_THREE.MERIT_RATING).select(TAB_THREE_TEXT.MERIT_RATING);
    cy.get(TAB_THREE.DAMAGE_INSURANCE).select(TAB_THREE_TEXT.DAMAGE_INSURANCE);
    cy.isClickable(TAB_THREE.OPTIONAL_PRODUCTS);
    cy.get(TAB_THREE.COURTESY_CAR).select(TAB_THREE_TEXT.COURTESY_CAR);
  }

  insertInputValuesCase() {
    cy.isVisible(TAB_THREE.START_DATE).type(TAB_THREE_TEXT.START_DATE);
    cy.get(TAB_THREE.INSURANCE_SUM).select(TAB_THREE_TEXT.INSURANCE_SUM);
    cy.get(TAB_THREE.MERIT_RATING).select(TAB_THREE_TEXT.MERIT_RATING);
    cy.get(TAB_THREE.DAMAGE_INSURANCE).select(TAB_THREE_TEXT.DAMAGE_INSURANCE);
    cy.get(TAB_THREE.COURTESY_CAR).select(TAB_THREE_TEXT.COURTESY_CAR);
  }

  nextPage() {
    cy.isClickable(TAB_THREE.BUTTON_NEXT_PRODUCT_DATA);
  }

  checkingThirdTabComponent() {
    cy.isClickable(TAB_THREE.OPTIONAL_PRODUCTS);
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
    cy.compareText(TAB_THREE.LABEL_MERIT_RATING, TAB_THREE_TEXT.LABEL_MERIT_RATING);
    cy.compareText(TAB_THREE.LABEL_START_DATE, TAB_THREE_TEXT.LABEL_START_DATE);
    cy.compareText(TAB_THREE.LABEL_DAMAGE_INSURANCE, TAB_THREE_TEXT.LABEL_DAMAGE_INSURANCE);
    cy.compareText(TAB_THREE.LABEL_COURTESY_CAR, TAB_THREE_TEXT.LABEL_COURTESY_CAR);
  }
}

const productData = new ProductData();
export default productData;
