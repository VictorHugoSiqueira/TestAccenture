/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable<Subject = any> {
      compareText(
        locator: string,
        message: string,
        time?: number
      ): Chainable<Element>;
  
      isVisible(locator: string, timeout?: number): Chainable<Element>;
  
      isClickable(locator: string, timeout?: number): Chainable<Element>;
  
      verifyUrl(text: string): Chainable<Element>;
  
      insertText(locator: string, text: string): Chainable<Element>;

    }
  }
  