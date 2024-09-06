///<reference types="cypress"/>

describe('This is my first suite',function(){
    it('this is firts test cases',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')

        cy.get('.brand').then(function(TTS){
            cy.log(TTS.text())
        })
        cy.get('a.blinkingText').then(function(ttsq){

            cy.log(ttsq.text)
        })

        cy.get('.search-keyword').type('ca')
        cy.get('.products').as('products')

        cy.get('@products').find('.product').each(($e1, index,$list)=>{
            const productname =$e1.find('.product-name').text()
            if(productname.includes('Carrot')){
                cy.wrap($e1).find('button').click()
            }
        
        })
        cy.get('@products').find('.product').should('have.length',4)

            cy.get('.cart-icon').click()
            cy.contains('PROCEED TO CHECKOUT').click()
            cy.contains('Place Order').click()


    //Table 

    


    })





})