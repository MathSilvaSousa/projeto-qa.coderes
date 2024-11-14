/// <reference types="cypress" />
const element = require("../fixtures/login.json")

beforeEach(() => {
    cy.visit('https://automacao.qacoders-academy.com.br/login');
});

afterEach(() =>{
    cy.screenshot();
})
describe('Login', () => {
    
    it('Login com sucesso', () => {
        const email = Cypress.env('EMAIL')
        const password = Cypress.env('PASSWORD')
     
       cy.Login(email, password);

    });

     

    it('Login com email valido e senha invalida', () => {
        
        cy.get(element.input_email).type(Cypress.env('EMAIL'));
        cy.get(element.input_password).type(Cypress.env('PASSWORD_INVALIDO'));
        cy.wait(5000);
        cy.get(element.btn_login).click();

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/login');
        })

        cy.MsgLoginFalha()

    });

    it('Login com email invalido e senha valida', () => {
        
        cy.get(element.input_email).type(Cypress.env('EMAIL_INVALIDO'));
        cy.get(element.input_password).type(Cypress.env('PASSWORD'));
        cy.wait(5000);
        cy.get(element.btn_login).click();

        cy.location().should((loc) => {
            expect(loc.pathname).to.eq('/login');
        })

        cy.MsgLoginFalha()


    });
});