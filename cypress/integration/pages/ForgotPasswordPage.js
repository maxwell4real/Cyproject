export default class ForgotPasswordPage {

    static enterEmail(email){
        cy.get('#user_email').type(email)
    }

    static clickSendPassword(){
        cy.contains('Send Password').click()
    }

    static verifyPasswordMessage(){
        cy.contains('Your password will be sent to the following email: mike@gmail.com').should('be.visible')
    }

}