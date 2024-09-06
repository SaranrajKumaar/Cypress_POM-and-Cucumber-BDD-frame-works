///<reference types="cypress"/>

describe('This is my first suite',function(){
    it('this is firts test cases',function(){

        cy.visit("https://rahulshettyacademy.com/angularpractice/")

        //name 
        cy.get('input[name="name"]:nth-child(2)').type("MamathaSaran")
        cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
        //Email 
        cy.get('input[name="email"]').type('mamatha@gmail.com')
        //passowrd
        cy.get('input[type="password"]').type("Saran@123")
        //checkbox
        cy.get("#exampleCheck1").check().should('be.checked')
        //gender select
        cy.get('select').select('Female').should('have.value','Female')
        //Radio button
        cy.get("#inlineRadio1").check()

        cy.get('#inlineRadio3').should('be.disabled')

        
       

//two-way data-Binding

cy.get('input[name="name"]:nth-child(1)').should('have.value','MamathaSaran')
cy.contains('Submit').click()

//message
cy.get('.alert.alert-success').then(function(name){
   const actualtext= name.text()
   expect(actualtext.includes('Success!')).to.be.true

})








    })
})