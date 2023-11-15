/// <reference types="cypress" />
const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pre cadastro', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    it('Deve completar o pre cadastro com sucesso', () => {
        let emailfaker = faker.internet.email()
        let nomefaker = faker.name.firstName()
        let sobrenomefaker = faker.name.lastName()

        cy.get('#reg_email').type(emailfaker)
        cy.get('#reg_password').type('teste_ryan22')
        cy.get(':nth-child(4) > .button').click()

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()
        cy.get('#account_first_name').type(nomefaker)
        cy.get('#account_last_name').type(sobrenomefaker)
        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    });



});