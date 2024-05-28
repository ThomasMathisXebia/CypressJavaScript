class homePage {

buttonCookiesAkzeptieren(){
    return cy.get('#rijksmuseum-app').find('button[class="button button-secondary"]')
}

menuSprache(sprachen){
    return cy.get('#header-language-menu').find('a[href="' +sprachen+ '"]')
}

buttonSprache(){
    return cy.get('#rijksmuseum-app').find('button[aria-controls="header-language-menu"]')
}


}

export default homePage