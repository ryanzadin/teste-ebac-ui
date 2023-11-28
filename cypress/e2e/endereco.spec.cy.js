/// <reference types="cypress" />
import enderecoPage from '../support/page-objects/endereco.page'
const dadosEndereco = require ('../fixtures/endereco.json')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {
    beforeEach(() => {
        cy.visit('minha conta')
        cy.fixture('perfil').then(dados => {
            cy.login(dados.usuario, dados.senha)
            
        })
    });

    it('Deve fazer o cadastro do faturamento com sucesso', () => {
       enderecoPage.editarEnderecoFaturamento('Ryanir', 'Dulko', 'temperao', 'brasil', 'rua doutor augusto', '543', 'sao paulo', 'sao paulo', '03496-101', '11990240453', 'Ryanzzaz@teste.com' )
       cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')

    });

    it.only('Deve fazer o cadastro do faturamento com sucesso - usando arquivos de dados', () => {
        enderecoPage.editarEnderecoFaturamento(
            dadosEndereco[0].nome,
            dadosEndereco[0].sobrenome,
            dadosEndereco[0].empressa,
            dadosEndereco[0].pais,
            dadosEndereco[0].rua,
            dadosEndereco[0].numero,
            dadosEndereco[0].cidade,
            dadosEndereco[0].estado,
            dadosEndereco[0].CEP,
            dadosEndereco[0].telefone,
            dadosEndereco[0].email
            )

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso.')
 
     });
});