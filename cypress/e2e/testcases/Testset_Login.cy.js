import home from "../utils/home.cy"
import login from "../utils/login.cy"
const homeScreen = new home()
const logScreen = new login()

describe('everything login related', () => {
  beforeEach(() => {
    cy.visit('https://www.rijksmuseum.nl/en')
    homeScreen.acceptCookies()

    cy.fixture('Testobjekte/Credentials.json').then(function (credentials) {
      this.credentialsMap = new Map();
      for (let i = 0; i < credentials.length; i++) {
        this.credentialsMap.set(credentials[i].key, credentials[i]);
      }
    })
  })

  it('logs in with Rijksstudio account', function () {

    cy.visit('https://www.rijksmuseum.nl/en/login?redirectUrl=https://www.rijksmuseum.nl/en')
    logScreen.accountRijksstudio(this.credentialsMap.get('With_Rijksstudio_Account'))

  })
})  