import { faker } from '@faker-js/faker';
describe('Payee', () => {

    before(function () {
        cy.visit('/')
        cy.title().should('include', 'Zero - Personal Banking - Loans - Credit Cards')
        cy.get('#signin_button').click()
    })

    it('Add new payee', () =>{
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.contains('Sign in').click()
        cy.wait(1000)
        cy.get('#pay_bills_tab > a').click()
        cy.get('.ui-tabs-nav > :nth-child(2) > a').click()
        cy.get('#np_new_payee_name').type('Mike')
        // cy.get('#np_new_payee_name').type(faker.internet.firstName)
        cy.get('#np_new_payee_address').type('12, lane way')
        cy.get('#np_new_payee_account').type('12344555')
        cy.get('#np_new_payee_details').type('kean')
        cy.get('#add_new_payee').click()
        cy.get('#alert_content').contains('The new payee Mike was successfully created')
    })

    it.skip('Pay saved payee', () =>{
        cy.get('#user_login').type('username')
        cy.get('#user_password').type('password')
        cy.contains('Sign in').click()
        cy.wait(1000)
        cy.get('#pay_bills_tab > a').click()
        cy.contains('Pay Saved Payee').click()
        cy.get('#sp_payee').select('Apple')
        cy.get('#sp_account').select('Credit Card')
        cy.get('#sp_amount').type('2000')
        cy.get('#sp_date').type('2020-01-10 {enter}')
        cy.get('#sp_description').type('Saved amount')
        cy.wait(2000)
        cy.get('#pay_saved_payees').click()
        cy.wait(2000)
        cy.get('#alert_content > span').contains('The payment was successfully submitted')
    })

})