import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";

describe('Login', () => {

    before(function () {
        cy.visit('/')
        HomePage.checkTitle()
        // cy.title().should('include', 'Zero - Personal Banking - Loans - Credit Cards')
    })

    it('Search and submit value', () =>{
        HomePage.searchItem()
    })

    it('Show search results', () =>{
        HomePage.searchResults()
    })


})