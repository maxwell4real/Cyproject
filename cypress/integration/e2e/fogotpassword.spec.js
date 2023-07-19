import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";

describe('Forgot Password', () => {
    it('Reset password', () =>{
        cy.visit('/')
        HomePage.checkTitle()
        HomePage.clickSignIn()
        LoginPage.clickForgotPasswordLink()
        ForgotPasswordPage.enterEmail('mike@gmail.com')
        ForgotPasswordPage.clickSendPassword()
        ForgotPasswordPage.verifyPasswordMessage()
    })

})