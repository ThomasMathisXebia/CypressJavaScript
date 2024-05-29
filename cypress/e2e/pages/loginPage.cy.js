class loginPage {

    buttonLogin(){
        return cy.get('#rijksmuseum-app').find('li[class="header-link"]').find('a[href*="login"]')
    }

    buttonLoginSubmit(){
        return cy.get('#myform').find('button[type ="submit"]')
    }

    fieldEmail(){
        return cy.get('#email')
    }
    
    fieldPassword(){
        return cy.get('#wachtwoord')
    }    

    }
    
    export default loginPage