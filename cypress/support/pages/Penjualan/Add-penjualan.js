const locator = require('../../locators/penjualan-locators');

class penjualanPage {
  async clickAddPenjualanButton() {
    cy.xpath(locator.datatestid.addTambahPenjualan).click({
      timeout: 2000,
    });
  }

  async clickAddnewPenjualan() {
    cy.xpath(locator.datatestid.addnewPenjualan).click({
      timeout: 2000,
    });
  }

  async clickproductName() {
    cy.xpath(locator.datatestid.clickproduct).click({
      timeout: 2000,
    });
    cy.wait(1000);
  }

  async addjumlahproduk() {
    cy.wait(2000);
    cy.xpath(locator.datatestid.addjumlahproduk)
      .focus()
      .clear()
      .type(2, { force: true })
      .should('have.value', 2);
    cy.wait(2000);
    // cy.xpath(locator.datatestid.totalprice).invoke('text');
    // .then((textt) => {
    //  cy.get(
    //   'body.chakra-ui-light:nth-child(2) div.css-k008qs div.css-1rr4qq7 div.chakra-container.css-9rmdie div.css-1fkz4uk div.css-k008qs div.css-1ba3qpq div.css-9jay18 div.css-0:nth-child(2) > h2.chakra-heading.css-1dklj6k'
    //)
    //  .invoke('text')
    //  .should('have.text', textt);
    //});
  }

  async jumlahbayar(product) {
    cy.get('input[placeholder="...jumlah bayar"').type(product.jumlahbayar);
  }

  async clickBayar(product) {
    cy.xpath(locator.datatestid.hargabayar).click({
      timeout: 2000,
    });

    cy.xpath(locator.datatestid.ModalShowUp)
      .invoke('text')
      .should('contain', 'transaksi sukses');

    cy.xpath(locator.datatestid.ModalShowUp2)
      .get("h2[class*='chakra-heading css-1dklj6k']")
      .last()
      .should('contain', '10.000');
  }

  async closeModal() {
    cy.xpath(locator.datatestid.closeButton).click({
      timeout: 2000,
    });
  }

  async checkTablePenjualan(product) {
    cy.wait(2000);
    cy.xpath(locator.datatestid.tablePenjualan)
      .find('tr')
      .should('have.length.greaterThan', 1);
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
      timeout: 3000,
    });
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
module.exports = new penjualanPage();
