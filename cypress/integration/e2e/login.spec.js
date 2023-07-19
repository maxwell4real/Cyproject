import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

describe('Login', () => {

    before(function () {
        //Do this beforee running all tests
        cy.visit('/')
        HomePage.checkTitle()
        // cy.get('#signin_button').click()
    })

    beforeEach(function () {
        // cy.get('#signin_button').click()
        HomePage.clickSignIn()
    })


    it('Login Successfully', () =>{
        LoginPage.loginUser('username', 'password')
        LoginPage.clickLogOut()
    })

    it('Login display error', () =>{
        // cy.get('#user_login').type('asasas@fass.com')
        // cy.get('#user_password').type('xxxxxx')
        LoginPage.loginUser('mike@aol.com', 'password')
        LoginPage.loginError()
    })

    // after(function () {
    //     cy.reload
    // })

})