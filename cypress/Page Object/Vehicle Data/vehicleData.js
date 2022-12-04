/// <reference types="cypress" />

import locators from "../../Shared/locators";
import texts from "../../Shared/texts";

const { TAB_ONE } = locators.home();
const { TAB_ONE_TEXT } = texts.home();

export class VehiclePage {
  checkUrlPage() {
    cy.verifyUrl(TAB_ONE_TEXT.URL_PARCIAL);
  }

  checkText() {
    cy.compareText(TAB_ONE.VEHICLE_INSURANCE, TAB_ONE_TEXT.VEHICLE_INSURANCE);
    cy.compareText(TAB_ONE.THIS_IS_A_SAMPLE, TAB_ONE_TEXT.THIS_IS_A_SAMPLE);
    cy.compareText(
      TAB_ONE.UNDEFINED_INSURANCE_TEXT,
      TAB_ONE_TEXT.UNDEFINED_INSURANCE_TEXT
    );
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
    cy.isVisible(TAB_ONE.ENTER_VEHICLE);
    cy.isVisible(TAB_ONE.ENTER_INSURANT);
    cy.isVisible(TAB_ONE.ENTER_PRODUCT);
    cy.isVisible(TAB_ONE.SELECT_PRICE);
    cy.isVisible(TAB_ONE.SED_QUOTE);
    cy.isVisible(TAB_ONE.BUTTON_NEXT);
    cy.isVisible(TAB_ONE.ABOUT_BUTTON);
    cy.isVisible(TAB_ONE.PRODUCTS_BUTTON);
    cy.isVisible(TAB_ONE.EVENTS_BUTTON);
    cy.isVisible(TAB_ONE.RESOURCES_BUTTON);
    cy.isVisible(TAB_ONE.SERVICES_BUTTON);
  }

  checkTextButton() {
    cy.compareText(
      TAB_ONE.VISIT_SUPPORT_BUTTON,
      TAB_ONE_TEXT.VISIT_SUPPORT_BUTTON
    );
    cy.compareText(TAB_ONE.AUTOMOBILE_BUTTON, TAB_ONE_TEXT.AUTOMOBILE_BUTTON);
    cy.compareText(TAB_ONE.TRUCK_BUTTON, TAB_ONE_TEXT.TRUCK_BUTTON);
    cy.compareText(TAB_ONE.MOTORCYCLE_BUTTON, TAB_ONE_TEXT.MOTORCYCLE_BUTTON);
    cy.compareText(TAB_ONE.CAMPER_BUTTON, TAB_ONE_TEXT.CAMPER_BUTTON);
    cy.compareText(TAB_ONE.REQUEST_BUTTON, TAB_ONE_TEXT.REQUEST_BUTTON);
    cy.compareText(TAB_ONE.HOME_BUTTON, TAB_ONE_TEXT.HOME_BUTTON);
    cy.compareText(TAB_ONE.ENTER_VEHICLE, TAB_ONE_TEXT.ENTER_VEHICLE);
    cy.compareText(TAB_ONE.ENTER_INSURANT, TAB_ONE_TEXT.ENTER_INSURANT);
    cy.compareText(TAB_ONE.ENTER_PRODUCT, TAB_ONE_TEXT.ENTER_PRODUCT);
    cy.compareText(TAB_ONE.SELECT_PRICE, TAB_ONE_TEXT.SELECT_PRICE);
    cy.compareText(TAB_ONE.SED_QUOTE, TAB_ONE_TEXT.SED_QUOTE);
    cy.compareText(TAB_ONE.BUTTON_NEXT, TAB_ONE_TEXT.BUTTON_NEXT);
    cy.compareText(TAB_ONE.ABOUT_BUTTON, TAB_ONE_TEXT.ABOUT_BUTTON);
    cy.compareText(TAB_ONE.PRODUCTS_BUTTON, TAB_ONE_TEXT.PRODUCTS_BUTTON);
    cy.compareText(TAB_ONE.EVENTS_BUTTON, TAB_ONE_TEXT.EVENTS_BUTTON);
    cy.compareText(TAB_ONE.RESOURCES_BUTTON, TAB_ONE_TEXT.RESOURCES_BUTTON);
    cy.compareText(TAB_ONE.SERVICES_BUTTON, TAB_ONE_TEXT.SERVICES_BUTTON);
  }

  insertInputValues() {
    cy.get(TAB_ONE.MAKE).select(TAB_ONE_TEXT.MAKE_OPTION);
    cy.get(TAB_ONE.MODEL).select(TAB_ONE_TEXT.MODEL_OPTION);
    cy.isVisible(TAB_ONE.CYLINDER_CAPACITY).type(
      TAB_ONE_TEXT.CYLINDER_CAPACITY
    );
    cy.isVisible(TAB_ONE.ENGINE_PERFORMANCE).type(
      TAB_ONE_TEXT.ENGINE_PERFORMANCE
    );
    cy.isVisible(TAB_ONE.DATE).type(TAB_ONE_TEXT.DATE);
    cy.get(TAB_ONE.NUMBER_OF_SEATS).select(TAB_ONE_TEXT.NUMBER_OF_SEATS_OPTION);
    cy.isClickable(TAB_ONE.RIGHT_HAND_DRIVE);
    cy.get(TAB_ONE.NUMBER_OF_SEATS_SECOND).select(
      TAB_ONE_TEXT.NUMBER_OF_SEATS_SECOND_OPTION
    );
    cy.get(TAB_ONE.FUEL_TYPE).select(TAB_ONE_TEXT.FUEL_TIPE_OPTION);
    cy.isVisible(TAB_ONE.PLAYLOAD).type(TAB_ONE_TEXT.PLAYLOAD);
    cy.isVisible(TAB_ONE.TOTAL_WEIGHT).type(TAB_ONE_TEXT.TOTAL_WEIGHT);
    cy.isVisible(TAB_ONE.LIST_PRICE).type(TAB_ONE_TEXT.LIST_PRICE);
    cy.isVisible(TAB_ONE.LICENSE_PLATE_NUMBER).type(
      TAB_ONE_TEXT.LICENSE_PLATE_NUMBER
    );
    cy.isVisible(TAB_ONE.ANNUAL_MILEAHE).type(TAB_ONE_TEXT.ANNUAL_MILEAHE);
  }

  nextPage() {
    cy.isClickable(TAB_ONE.BUTTON_NEXT);
  }
}

const vehiclePage = new VehiclePage();
export default vehiclePage;
