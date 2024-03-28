const locator = require('../../locators/login-page-locators')
const staticText = require('../../static_text/static-text')

class loginPage {

    async fillUsername (randomUser) {
        cy.xpath(locator.datatestid.username_input).type(randomUser, {force: true}).should('have.value', randomUser, {timeout: 2000})
    }

    async fillPassword () {
        cy.xpath(locator.datatestid.password_input).type('password', {force: true}).should('have.value', staticText.loginPage.password, {timeout: 2000})
    }

    async clickLoginButton () {
        cy.xpath(locator.datatestid.login_button).click()
    }

}

module.exports = new loginPage()
