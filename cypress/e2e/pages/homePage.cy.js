class homePage {

buttonCookiesAkzeptieren(){
    return cy.get('#rijksmuseum-app').find('button[class="button button-secondary"]')
}

menuSprache(sprache){
    return cy.get('#header-language-menu').find('a[href="' +sprache+ '"]')
}

buttonSprache(){
    return cy.get('#rijksmuseum-app').find('button[aria-controls="header-language-menu"]')
}


}

export default homePage