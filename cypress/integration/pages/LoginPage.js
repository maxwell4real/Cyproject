export default class LoginPage {

    static loginUser(email, passw){
        cy.get('#user_login').type(email)
        cy.get('#user_password').type(passw)
        cy.contains('Sign in').click()
    }

    static loginError(){
        cy.get('.alert-error').should('be.visible')
    }

    static clickLogOut(){
        cy.contains('username').click()
        cy.wait(1000)
        cy.get('#logout_link').click()
    }

    static clickForgotPasswordLink(){
        cy.contains('Forgot your password ?').click()
    }

    // static search(text){
    //     cy.get('#searchTerm').type('funds {enter}')
    // }


}