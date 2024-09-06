///<reference types="cypress"/>

import cypress from "cypress"
import HomePage from "../pageObject/Homepage"
import productPage from "../pageObject/productPage"
describe('This is my first suite',function(){
    before(function(){

        cy.fixture("example").then(function(data){
 this.data=data
        })


    })
    it('this is firts test cases',function(){

     const homepage =   new HomePage()
     const productpage = new productPage()
        cy.visit(Cypress.env('URL')+"/angularpractice/")
        homepage.getInputName().type(this.data.Name)
        homepage.getSelectGender().select(this.data.Gender)
        homepage.getTwowayBiniding().should('have.value',this.data.Name)
       homepage.getInputName().should('have.attr','minlength','2')
        homepage.getEntrepreneurDisabled().should('be.disabled')
        Cypress.config('defaultCommandTimeout',8000)

        homepage.clickShoppage().click()
       // const phonename=['iphoneX','Nokia Edge']

        //data parameterized //array
        this.data.productname.forEach(function(name)  {
            cy.Selectproduct(name)
                
            })

            productpage.clickonCheckoutpage().click()
            //string to number
            var sum=0
            cy.get('tr td:nth-child(4) strong').each(($el,index,$list)=>{

                var textamount=$el.text()
               var res= textamount.split(" ")
               res =res[1].trim()
               cy.log(res)
                                            //synrochrones 
               sum=Number(sum)+Number(res)}).then(function()
               {
                cy.log(sum)   
             })
             cy.get("h3 > strong").then(function(amounttext){
                var totalstring =amounttext.text()
                var splstr=totalstring.split(" ")
                splstr=splstr[1].trim()
                expect(Number(splstr)).to.equal(sum)
                


             })
           
            productpage.clickoncheckoutButton().click()
            
            cy.get("#country").type('United')

            //spec level Cypress.config('defaultCommandTimeout,',3000)
            cy.get(".suggestions ul li a").each(($e1,index,$list)=>{

                if($e1.text()==='United Kingdom'){

                    cy.wrap($e1).click()
               }                  
                })
                cy.get('#checkbox2').check({force: true})
                cy.get("input[type='submit']").click()
                //cy.get('.alert.alert-success').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
                cy.get('.alert.alert-success').then(function(name){
                   const actualText= name.text()
                   expect(actualText.includes('Success!')).to.be.true
                })

            })

        //debuge 
        //cy.pasue()               //
})
