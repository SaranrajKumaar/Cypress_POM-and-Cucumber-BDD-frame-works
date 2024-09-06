///<reference types="Cypress"/>

//Cypress -->spec file (in the java script terminlogy)
describe('My first test suite',function(){
    it('First test Cases', function(){
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword').type('ca')
        cy.wait(1000)
        cy.get('.product:visible').should('have.length',4)

        cy.get('.products').find('.product').should('have.length',4)
        //parent to child transver
        cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click()

        //cashew need to click add to chart 
        cy.get('.products').find('.product').each(($el ,index ,$list) =>{

            const productname =$el.find('h4.product-name').text()
            if(productname.includes('Cashews')){
                cy.wrap($el).find('button').click()
            }

        })
        cy.get('.brand').then(function(logoelement)
        {
           cy.log(logoelement.text())
        })


 

    })

}






)
