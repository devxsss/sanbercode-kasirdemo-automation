class registerPage{

  async fillusername(randomUser){
    cy.xpath(locator.datatestid.username_input)
    .type(randomUser)
  }
}