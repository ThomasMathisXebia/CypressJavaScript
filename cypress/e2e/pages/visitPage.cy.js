class visitPage {

    buttonHome(){
        return cy.get('#rijksmuseum-app').find('a[class="button button-back"]').find('span').contains('Home')
    }

    }
    
    export default visitPage