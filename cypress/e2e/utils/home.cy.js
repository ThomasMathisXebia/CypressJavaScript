import homePage from "../pages/homePage.cy";
const homepage = new homePage()

class home {

    acceptCookies() {

        // cy.get('body').then(($body) => {
        //     if ($body.find('cookie-consent-bar').length > 0) {

                homepage.buttonCookiesAkzeptieren().click()

        //     }
        // })
    }

    selectSprache(sprache) {
        homepage.buttonSprache().click()
        homepage.menuSprache(sprache).click()
        cy.url('include',sprache)
    }

}

export default home