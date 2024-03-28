const locator = require('../../locators/home-page-locators');

class homePage {
  async goHomepage() {
    cy.visit('https://kasirdemo.belajarqa.com/');
  }

  async clickSignUpMenu() {
    cy.xpath(locator.datatestid.signup_menu).click();
    cy.xpath(locator.datatestid.signup_modal).should('exist', {
      timeout: 2000,
    });
  }

  async clickSignUpNewAccount() {
    cy.xpath(locator.datatestid.signup_account).click({ timeout: 2000 });
    cy.wait(3000);
  }

  async clickSignInMenu() {
    cy.xpath(locator.datatestid.signin_menu).click({ timeout: 2000 });
  }

  async verifyUsernameExist(storeName) {
    cy.xpath(locator.datatestid.username_text).should('contain', storeName, {
      timeout: 2000,
    });
  }

  async clickProdukMenu() {
    cy.xpath(locator.datatestid.produkButton).click({
      timeout: 2000,
    });
  }
}

module.exports = new homePage();
