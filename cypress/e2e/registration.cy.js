/// <reference types="cypress" />

import texts from "../Shared/texts";
import vehiclePage from "../Page Object/Vehicle Data/vehicleData";
import insurantPage from "../Page Object/Insurant Data/insurantData";
import productData from "../Page Object/Product Data/productData";
import priceOption from "../Page Object/Price Option/priceOption";
import sendQuote from "../Page Object/Send Quote/sendQuote";

const { TAB_ONE_TEXT } = texts.home();

describe("Accenture Test Automation", () => {
  before(() => {
    cy.visit(TAB_ONE_TEXT.URL_HOME);
  });

  it("Check URL", () => {
    vehiclePage.checkUrlPage();
  });
});

describe("Vehicle Data", () => {
  it("Veryfing texts", () => {
    vehiclePage.checkText();
  });

  it("Veryfing all buttons", () => {
    vehiclePage.checkButton();
  });

  it("Veryfing button's text", () => {
    vehiclePage.checkTextButton();
  });

  it("Inserting Vehicle Data in the first tab", () => {
    vehiclePage.insertInputValues();
    vehiclePage.nextPage();
  });
});

describe("insurant Data", () => {
  it("Inserting Insurant Data in the second tab", () => {
    insurantPage.insertInputValues();
  });

  it("Pressing Next Button to go to the next page", () => {
    insurantPage.nextPage();
  });
});

describe("product Data", () => {
  it("Inserting Product Data in the third tab", () => {
    productData.insertInputValues();
  });
  it("Pressing Next Button to go to the next page", () => {
    productData.nextPage();
  });
});

describe("select price", () => {
  it("Selecting Price Option", () => {
    priceOption.insertInputValues();
  });

  it("Pressing Next Button to go to the next page", () => {
    priceOption.nextPage();
  });
});

describe("sending quote", () => {
  it("Sending Quote", () => {
    sendQuote.insertInputValues();
  });
  it("Pressing Next Button to go to the next page", () => {
    sendQuote.nextPage();
  });
});
