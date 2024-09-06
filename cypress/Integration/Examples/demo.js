describe('Test case suite' ,function(){

    it ( " Test cases " ,function(){


cy.visit("https://github.com/SaranrajKumaar")

cy.get(".text-right > .HeaderMenu-link").click()
cy.get("#login_field").type("SaranrajKumar")
cy.get("#password").type("Saran@123")

        cy.get('input[value="Sign in"]').click()
    })
    

})