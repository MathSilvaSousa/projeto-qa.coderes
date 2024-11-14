/// <reference types="cypress" />

Cypress.Commands.add('Login', (email, password ) => {
    cy.get('#email').type(email);
    cy.get('#password').type(password);
    cy.wait(2000);
    cy.get('#login').should('be.visible').click();
    cy.location().should((loc) => {
        expect(loc.pathname).to.eq('/login');
    })

    cy.get('body > nav >button').should('be.visible');
});

Cypress.Commands.add('MsgLoginFalha', () => {
    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('be.visible');
    cy.get('[class="MuiAlert-message css-1xsto0d"]').should('have.text','E');
});