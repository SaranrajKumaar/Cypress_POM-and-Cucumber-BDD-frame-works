///<reference types="cypress"/>

describe('My first test suite',function(){
    it('My first test cases',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('input.search-keyword').type('ca')
        cy.get('.products').as('productlocator')


        cy.get('@productlocator').find('.product').each(($el ,index ,$list) =>{
           const productname = $el.find('h4.product-name').text()

           if(productname.includes('Carrot')){ 

            cy.wrap($el).find('button').click()
            
           }
        })

        //non element in javascript using then
        cy.get('.brand').then(function(lelement){

           cy.log(lelement.text())
        })

        cy.get('.blinkingText').then(function(link)
    {
        cy.log(link.text())
    })

    cy.get('.brand').should('have.text','GREENKART').then(function(){
        console.log('pass')

    })

     cy.get('.cart-icon').click()
    cy.contains('PROCEED TO CHECKOUT').click()
    cy.contains('Place Order').click()

    })

})