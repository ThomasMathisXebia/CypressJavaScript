import home from "../utils/home.cy"
import visit from "../utils/visit.cy"
const homeScreen = new home()
const visScreen = new visit()

describe('everything homepage related', () => {
    beforeEach(() => {
      cy.visit('https://www.rijksmuseum.nl/en')
      homeScreen.acceptCookies()

      //cy.fixture('Referenzdaten/Sprachen.json').then(function (sprachen){
        //this.sprachen = sprachen
      //})

      cy.fixture('Referenzdaten/Sprachen.json').then(function (sprachen){
        this.sprachen = sprachen
      })
    })
  
    it ('changes the language', function () {

      cy.intercept('GET', 'https://www.rijksmuseum.nl/de/besuchen*').as('besuchen')
        homeScreen.selectSprache(this.sprachen.Deutsch_German)
        cy.wait('@besuchen').its('response.statusCode').should('eq', 200)
        homeScreen.selectSprache(this.sprachen.English_English)
        visScreen.goBackHome()

    })

    

    
})  