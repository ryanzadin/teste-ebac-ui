/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page'

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
            
        })
    });

    it.only('Deve fazer o cadastro do faturamento com sucesso', () => {
       enderecoPage.editarEnderecoFaturamento('Ryanir', 'Dulko', 'temperao', 'brasil', 'rua doutor augusto', '543', 'sao paulo', 'sao paulo', '03496-101', '11990240453', 'Ryanzzaz@teste.com' )
       cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });
});