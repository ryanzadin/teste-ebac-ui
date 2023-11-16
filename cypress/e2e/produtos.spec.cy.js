/// <reference types="cypress" />


describe('Funcionalidade Pagina de produtos', () => {

    beforeEach(() => {
        cy.visit('produtos')
    });

    it('Deve selecionar um produto da lista', () => {

        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(3)
            .contains('Chaz Kangeroo Hoodie')
            .click()

    });

    it.only('Deve adcionar um produto ao carrinho', () => {
        var quantidade = 3

        cy.get('.product-block')
            .eq(4).click()
        cy.get('.button-variable-item-33').click()
        cy.get('.button-variable-item-Black').click()
        cy.get('.input-text').clear().type(quantidade)
        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)
        cy.get('.woocommerce-message').should('contain', quantidade + ' × “Caesar Warm-Up Pant” foram adicionados no seu carrinho.')
    });


});