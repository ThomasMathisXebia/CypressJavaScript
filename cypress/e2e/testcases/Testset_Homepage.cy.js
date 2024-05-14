import home from "../utils/home.cy"
const homeScreen = new home()

describe('everything homepage related', () => {
    beforeEach(() => {
      cy.visit('https://www.rijksmuseum.nl/de')
      homeScreen.acceptCookies()

      cy.fixture('Referenzdaten/Sprachen.json').then(function (sprachen){
        this.sprachen = sprachen
      })
    })
  
    it('changes the language', () => {

        // homeScreen.selectSprache(this.sprachen.English_English)
        homeScreen.selectSprache('/en/visit')

    })
})  