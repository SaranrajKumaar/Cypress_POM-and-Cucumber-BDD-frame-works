///<reference types="cypress"/>

describe('My first test suite',function(){
    it('My first test cases',function(){

        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
        //search

        cy.get("input[class='search-keyword']").type('cu')

        cy.get('.products').find('.product').each(($e1,index,$list)=>{

           const productname= $e1.find('.product-name').text()
           if(productname.includes('Capsicum')){
           cy.wrap($e1).find('.increment').click()
           cy.wrap($e1).contains('ADD TO CART').click()
           }
           if(productname.includes('Cucumber')){
            cy.wrap($e1).find('.increment').click()
            cy.wrap($e1).contains('ADD TO CART').click()
            }
        })

        cy.get('.cart-icon').click()
        cy.contains('PROCEED TO CHECKOUT').click()
        cy.contains('Place Order').click()
        cy.get('select').select('Algeria')
        cy.get('.chkAgree').check()
        cy.contains('Proceed').click()
    
    })
    it ('second test cases',function(){

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        //Check box with assertion
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')

        cy.get('#checkBoxOption3').check().should('be.checked').and('have.value','option3')

        //array list
        cy.get('input[type="checkbox"]').check(['option1','option2'])

        //radio button
        cy.get('input[value="radio2"]').check()

        //Suggestion drop down
        cy.get('#autocomplete').type('mo')>
        cy.get('.ui-menu-item').each(($e1,index,$list)=>{

            if($e1.text()==='East Timor'){
                cy.wrap($e1).click()
            }
            //Tables 

            cy.get('tr td:nth-child(2)').each(($e2,index,$list)=>{

               if( $e2.text()==='Learn JMETER from Scratch - (Performance + Load) Testing Tool'){

                cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                   const pricecourse= price.text()
                   expect(pricecourse).to.equal('25')
                })
                

               }


            })
          


        })


    })
    it('third test cases',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
          //another one method  new window method
          cy.get('#opentab').invoke('removeAttr','target').click()
          cy.origin('https://www.qaclickacademy.com/',()=>{
  
              cy.get("div .sub-menu-bar a[href='about.html']").click()
  
          })

    })

    it ('fourth test cases',function(){
        //new window  without removing the using invoke menthod we use this for new window tab
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').then(function(el){
            const url =el.prop('href')
            cy.visit(url)
            cy.origin(url,()=>{
                cy.get("div .sub-menu-bar a[href='about.html']").click()
  
            })
        })

    })

})