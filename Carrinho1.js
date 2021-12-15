// Dado que eu quero adicionar dois óleos no meu carrinho, vou no site da terra flor e clico em óleos essenciais.
//Quando escolho Alecrim do serrado e Alecrim de pimenta, coloco os dois no meu carrinho

describe( 'Escolher dois óleos essencias e colocar no carrinho', () => {
    beforeEach( () => {
      cy.clearLocalStorage()
      cy.viewport( 1280, 720 )
    } )

    it ( 'Should load the page', () => {
        cy.visit( 'https://teste.terra-flor.com/' )
      } )
    
      it ( 'Should click on Óleos Essenciais', () => {
        cy.wait( 3000 )
          cy.get( 'span' ).contains( 'Óleos essenciais' ).click()
          cy.wait( 3000 )
          cy.location( 'pathname' ).should( 'contain', '/categoria/oleos-essenciais/' )
      } )

      it ( 'Should click on Aceitar Cookies', () => {
        cy.wait( 7000 )
          cy.get( 'button' ).contains( 'Estou ciente' ).click()
          cy.wait( 3000 )
      } )

      it ( 'Should click in Comprar Alecrim do Cerrado', () => {
        cy.wait( 3000 )
        cy.get( 'a[data-product_id=92484]' ).click()
          cy.wait( 3000 )
      } )

      it ( 'Should click in Comprar Eucalipto Radiata', () => {
        cy.wait( 5000 )
        cy.get( 'a[data-product_id=25289]' ).click()
          cy.wait( 3000 )
      } )
  } )
