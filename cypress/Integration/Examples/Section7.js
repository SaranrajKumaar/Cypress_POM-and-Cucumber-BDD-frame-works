///<reference types="cypress"/>

describe('This is my first suite',function(){
    it('this is firts test cases',function(){

        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        //checkbox verfiy with assestion 

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')

        cy.get('#checkBoxOption2').check().should('be.checked').and('have.value','option2')

        //uncheckbox verify with assertion

        cy.get('#checkBoxOption2').uncheck().should('not.be.checked').and('have.value','option2')

        //array list 

        cy.get('input[type="checkbox"]').check(['option3','option2'])

        //static dropdown

        cy.get('select').select('Option2').should('have.value','option2')

        //dynamic dropdown

        cy.get('#autocomplete').type('am')

        cy.get('.ui-menu-item div').each(($e1,index,$list)=>{

            if($e1.text()==='Gambia'){
                cy.wrap($e1).click()
            }

        })

        cy.get('#autocomplete').should('have.value','Gambia')


        //show and hide 
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()
        cy.get('#displayed-text').should('be.visible')

        //radio button'
        cy.get("input[type='radio']").check(['radio2'])


        //table
        cy.get('tr td:nth-child(2)').each(($e1,index,$list)=>{

           const coursename= $e1.text()
           if(coursename.includes('Appium')){

            cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                const courseprice=price.text()
                expect(courseprice).to.equal('30')

            })
           }

          
        })
         //Mousemover
        //using jquery 
       /// cy.get('#mouse-hover-content').invoke('show')
        cy.contains('Top').click({force:true})
        cy.url().should('include','top')
        



         


    })
})