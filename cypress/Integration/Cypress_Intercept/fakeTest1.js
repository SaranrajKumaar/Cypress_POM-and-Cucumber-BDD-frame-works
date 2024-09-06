///<reference types='cypress'/>

describe("suites",function(){

    it('cases',function(){


        cy.visit("https://rahulshettyacademy.com/angularAppdemo/")
        //response body -------> is different 

        cy.intercept('GET','https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty',
        (req)=>
            {
                req.url="https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=Saranraj"
                req.continue((res)=>
                {
                    expect(res.statusCode).to.equal(404)

                 })


             }).as ("Dummy")
             cy.get(".btn.btn-primary").click()
             cy.wait('@Dummy')
    })
})