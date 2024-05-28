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

        // homeScreen.selectSprache('/de/besuchen')
        homeScreen.selectSprache(this.sprachen.Deutsch_German)
        homeScreen.selectSprache('/en/visit')
        visScreen.goBackHome()

    })

    

    
})  