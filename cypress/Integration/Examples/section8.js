///<reference types="Cypress"/>

describe('This is my first suite',function(){
    it('this is firts test cases',function(){

//section 8 34 --> alert the alert message
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

//switch to alert 


        cy.get('#alertbtn').click()

        cy.on('window:alert',(str)=>{

            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        
        cy.get('#confirmbtn').click()

        //new windowtab
        cy.get('#opentab').invoke('removeAttr','target').click()

        //new tab using this method

        cy.origin('https://www.qaclickacademy.com/',()=>{

                
        cy.get("#navbarSupportedContent a[href*='contactus.html']").click()

        cy.get('#page-banner h2').should('contain','Contact')

       

        })
    })


    it('second test cases',function(){
            cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

            
                //table get the value 
   
           cy.get('tr td:nth-child(2)').each(($e1,index,$list)=>{
            const coursename =$e1.text()
   
              if(coursename.includes('python')){
   
               cy.get('tr td:nth-child(2)').eq(index).next().then(function(price){
                const priceinRS= price.text()

                 expect(priceinRS).to.equal('25')
               })
   
   
              }
   
        
           

        })
        

    


    })

   
    
})