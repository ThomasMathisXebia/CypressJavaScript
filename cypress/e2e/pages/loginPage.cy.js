class loginPage {

    buttonLogin(){
        return cy.get('#myform').find('Log in')
    }

    fieldEmail(){
        return cy.get('#email')
    }
    
    fieldPassword(){
        return cy.get('#wachtwoord')
    }    

    }
    
    export default loginPage