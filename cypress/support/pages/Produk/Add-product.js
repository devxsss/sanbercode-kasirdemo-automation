const locator = require('../../locators/produk-page-locators');
import { product } from '../../../e2e/belajar-cypress.cy';

class produkPage {
  async clickAddProductButton() {
    cy.xpath(locator.datatestid.addProductButton).click({
      timeout: 2000,
    });
  }

  async clickCheckCodeProduct() {
    let te;
    cy.xpath(locator.datatestid.addKodeProduct)
      .invoke('val')
      .should('not.be.empty');
    cy.wait(0);
    cy.xpath(locator.datatestid.addKodeProduct)
      .invoke('val')
      .then((val) => {
        window.sessionStorage.setItem(te, val);
      })
      .should('not.equal', null);
  }

  async fillProductName(product) {
    cy.xpath(locator.datatestid.addProductName)
      .type(product.name, { force: true })
      .should('have.value', product.name);
  }

  async fillProductDescription(product) {
    cy.xpath(locator.datatestid.addProductDescription)
      .type(product.deskripsi, { force: true })
      .should('have.value', product.deskripsi);
  }

  async fillProductBuyPrice(product) {
    cy.xpath(locator.datatestid.addProductBuyPrice)
      .type(product.hargabeli, { force: true })
      .should('have.value', product.hargabeli);
  }

  async fillProducSellPrice(product) {
    cy.xpath(locator.datatestid.addProductSellPrice)
      .type(product.hargajual, { force: true })
      .should('have.value', product.hargajual);
  }

  async fillProductStock(product) {
    cy.xpath(locator.datatestid.addProductStock)
      .type(product.stok, { force: true })
      .focus()
      .clear()
      .type(product.stok, { force: true });
    cy.xpath(locator.datatestid.addProductStock).should(
      'have.value',
      product.stok
    );
  }

  async fillProductCategory(product) {
    cy.xpath(locator.datatestid.addProductCategory).click({
      timeout: 2000,
    });
    cy.xpath(locator.datatestid.addProductCategorySelection).click({
      timeout: 2000,
    });
  }

  async SubmitProductButton() {
    cy.xpath(locator.datatestid.submitProduct).click({
      force: true,
      timeout: 3000,
    });
    cy.wait(2000);
    cy.reload();
  }

  async checkTableProduct(product) {
    cy.xpath(locator.datatestid.tableProduct)
      .find('tr')
      .should('have.length.greaterThan', 1);
    cy.xpath(locator.datatestid.tableRowValue)
      .should('contain', product.name)
      .and('contain', product.deskripsi);
  }
}
module.exports = new produkPage();
