///<reference types="cypress"/>

describe("This is first test suite",function(){


    it("this is test cases",function(){
        //mark your request------> 
       // cy.intercept({Requestobject},{Response Object})

       //modify real http responses ,changing the body , headers, or Http status code befoe they are received by browser

       cy.visit("https://rahulshettyacademy.com/angularAppdemo/")


       cy.intercept(
        {
            method :'GET',
            url : 'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'

       },
       {
        statusCode : 200,
        body :
         [ {
            
            "book_name": "RestAssured with Java",
            "isbn": "BSG",
             "aisle": "2302"
  },
  /**{    
             "book_name": "RestAssured with Java",
            "isbn": "LSA",
            "aisle": "2303"

  }**/
]


       }).as('Bookreterival')

       cy.get(".btn.btn-primary").click()
       //unitil promise is resolved
       cy.wait('@Bookreterival')
       /** .should(({request,response})=>{

        cy.get('tr').should('have.length', response.body.length+1)

    })**/
       cy.get('p').should('have.text','Oops only 1 Book available')


    })
})