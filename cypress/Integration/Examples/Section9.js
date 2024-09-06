///<reference types="Cypress"/>
///<reference types="cypress-iframe"/>
import 'cypress-iframe'


describe('This is my first suite',function(){
    it('this is firts test cases',function(){

        // new window tab , and new window separate window

        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

        cy.get('#opentab').then(function(el){

           const url= el.prop('href')
           cy.visit(url)

           cy.origin(url,()=>{

            cy.get("div .sub-menu-bar a[href='about.html']").click()

           })

        })

       
        })
        it('second test for frames',function(){

            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
            cy.frameLoaded('#courses-iframe')
            cy.iframe().find("a[href*='mentorship']").eq(0).click()
           // cy.iframe().find('.pricing-title').should('have.length',2)
        })

        it("third test cases",function(){

          /**  cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")

            cy.get("a[href='#/offers']").invoke('removeAttr','target').click()

            cy.origin('https://rahulshettyacademy.com/seleniumPractise/#/offers',()=>{

                cy.get('.react-date-picker__inputGroup').eq(0).click()
            })***/

                const year ="2029"
                const date ='20'
                const month ='11'

                const expectedResult =[month,date,year];


                cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
                cy.get('.react-date-picker__inputGroup').eq(0).click()
                cy.get(".react-calendar__navigation__label").click()
                cy.get(".react-calendar__navigation__label").click()
                cy.contains('button',year).click()
                cy.get(".react-calendar__year-view__months__month").eq(Number(month)-1).click()
                cy.contains('abbr',date).click()

                //assertion 
                cy.get('.react-date-picker__inputGroup__input').each(($e1,index,$list)=>{

                    cy.wrap($e1).invoke('val').should('eq',expectedResult[index])
                })






        })





    })
