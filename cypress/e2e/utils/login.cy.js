import loginPage from "../pages/loginPage.cy";
const logPage = new loginPage()

class login {

    accountRijksstudio(credentials) {

        logPage.fieldEmail().type(credentials.email)
        logPage.fieldPassword().type(credentials.password)
        cy.get('#email').should('have.value', credentials.email)
        cy.get('#wachtwoord').should('have.value', credentials.password)
        logPage.buttonLogin().click()

    }


}

export default login