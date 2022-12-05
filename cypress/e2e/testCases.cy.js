/// <reference types="cypress" />

import texts from "../Shared/texts";
import vehiclePage from "../Page Object/Vehicle Data/vehicleData";
import insurantPage from "../Page Object/Insurant Data/insurantData";
import productData from "../Page Object/Product Data/productData";
import priceOption from "../Page Object/Price Option/priceOption";
import sendQuote from "../Page Object/Send Quote/sendQuote";

const { TAB_ONE_TEXT } = texts.home();

describe("Functionality: Accessing SampleApp", () => {
  describe("Scenario: Accessing Home Screen", () => {
    before(() => {
      cy.visit(TAB_ONE_TEXT.URL_HOME);
    });
    it("Given i access SampleApp screen", () => {
      vehiclePage.checkUrlPage();
    });
    it("And read all the information contained in the page", () => {
      vehiclePage.checkText();
    });
    it("Then checking if all the buttons is being showed", () => {
      vehiclePage.checkButton();
    });
  });

  describe("Scenario: Completing the registration of the first tab", () => {
    before(() => {
      cy.visit(TAB_ONE_TEXT.URL_HOME);
    });
    it("Given i access the first SampleApp page", () => {
      vehiclePage.checkUrlPage();
    });
    it("And and read all the information contained in the screen", () => {
      vehiclePage.checkText();
    });
    it("And and fill in all the inputs", () => {
      vehiclePage.insertInputValues();
    });
    it("Then click in the next button to go to the next page", () => {
      vehiclePage.nextPage();
    });
  });
});

describe("Funcionalidade: Accessing second tab and filling in all the inputs", () => {
  describe("Scenario: Accessing second tab", () => {
    it("Given that i access the SampleApp screen", () => {
      vehiclePage.checkUrlPage();
    });
    it("And check if i am on the second tab", () => {
      insurantPage.checkingSencondTabComponent();
    });
    it("And read all the information tha is showing on the second tab", () => {
      insurantPage.checkText();
    });
    it("Then checking if all the buttos are being showed", () => {
      insurantPage.checkButton();
    });
  });

  describe("Scenario: Filling up all the inputs on the second tab", () => {
    it("Given that i access the SampleApp screen", () => {
      vehiclePage.checkUrlPage();
    });
    it("And read all the information tha is showing on the second tab", () => {
      insurantPage.checkText();
    });
    it("And and fill in all the inputs", () => {
      insurantPage.insertInputValues();
    });
    it("Then click in the next button to go to the next page", () => {
      insurantPage.nextPage();
    });
  });
});

describe("Functionality: Accessing third tab and filling in all the inputs", () => {
  describe("Scenario: Accessing the third tab", () => {
    it("Given that i access the SampleApp screen", () => {
      vehiclePage.checkUrlPage();
    });
    it("And checking if i am on the third tab", () => {
      productData.checkingThirdTabComponent();
    });
    it("And read all the information tha is showing on the third tab", () => {
      productData.checkText();
    });
    it("Then confiro se todos os botões estão contidos", () => {
      productData.checkButton();
    });
  });

  describe("Scenario: Accessing third tab and filling in all the inputs", () => {
    it("Given that i access the SampleApp screen", () => {
      vehiclePage.checkUrlPage();
    });
    it("And read all the information that is showing on the third tab", () => {
      productData.checkText();
    });
    it("And and fill in all the inputs", () => {
      productData.insertInputValuesCase();
    });
    it("Then click in the next button to go to the next page", () => {
      productData.nextPage();
    });
  });
});

describe("Functionality: Accessing the fourth tab and filling up all the inputs", () => {
  describe("Scenario: Accessing the fourth tab", () => {
    it("Given that i access the SampleApp page", () => {
      vehiclePage.checkUrlPage();
    });
    it("And checking if i am on the fourth tab", () => {
      priceOption.checkingFourthTabComponent();
    });
    it("And read all the information that are contained in the page on the fourth tab", () => {
      priceOption.checkText();
    });
    it("And checking if all the buttons are being showed", () => {
      priceOption.checkButton();
    });
    it("When i choose one of the options", () => {
      priceOption.insertInputValues();
    });
    it("Then click on the next button", () => {
      priceOption.nextPage();
    });
  });
});

describe("Functionality: Accessing the fifth tab and filling up all the inputs", () => {
  describe("Scenario: Accessing the fifth tab", () => {
    it("Given that i access the SampleApp page", () => {
      vehiclePage.checkUrlPage();
    });
    it("And check if i am on the fifth tab", () => {
      sendQuote.checkingFifthTabComponent();
    });
    it("And read the information that are contained in the screen on the fifth tab", () => {
      sendQuote.checkText();
    });
    it("And check if all the buttons are being showed", () => {
      sendQuote.checkButton();
    });
    it("When insert the information", () => {
      sendQuote.insertInputValues();
    });
    it("And click on the save button", () => {
      sendQuote.saveButton();
    });
    it("Then Checking the modal with the Success message is being showed", () => {
      sendQuote.msgSuccess();
    });
  });
});
