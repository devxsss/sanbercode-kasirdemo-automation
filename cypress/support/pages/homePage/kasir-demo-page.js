const locator = require('../../locators/kasirdemo-menu-locators');

class kasirdemoPage {
  async clickProdukMenu() {
    cy.xpath(locator.datatestid.produkButton).click({
      timeout: 2000,
    });
  }

  async clickPenjualanMenu() {
    cy.xpath(locator.datatestid.addPenjualanButton).click({
      timeout: 2000,
    });
  }

  async clickLogoutButton() {
    cy.xpath(locator.datatestid.profileButton).click({
      timeout: 2000,
    });

    cy.wait(3000);
    cy.xpath(locator.datatestid.logoutButton)
      .should('contain', 'logout')
      .click({
        timeout: 4000,
        force: true,
      });

    cy.wait(2000);
  }

  async clickDashboardMenu() {
    cy.xpath(locator.datatestid.dashboardMenu).click({
      timeout: 2000,
    });
    cy.wait(2000);
  }
}

module.exports = new kasirdemoPage();
