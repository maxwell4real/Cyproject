export default class HomePage {

    static clickOnLogo(){
        cy.get('.brand').click()
    }

    static checkTitle(){
        cy.title().should('include', 'Zero - Personal Banking - Loans - Credit Cards')
    }

    static clickSignIn(){
        cy.get('#signin_button').click()
    }

    static searchItem(text){
        cy.get('#searchTerm').type('funds {enter}')
    }

    static searchResults(){
        cy.get('h2').contains('Search Results:')
    }

}