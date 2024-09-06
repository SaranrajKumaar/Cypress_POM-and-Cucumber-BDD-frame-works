class HomePage{

    getInputName ()
    {
       return  cy.get("input[name='name']:nth-child(2)")

    }
    getSelectGender() 
    {
      return  cy.get("select")
    }
    getTwowayBiniding()
    {
       return cy.get("input[name='name']:nth-child(1)")
    }
    getEntrepreneurDisabled()
    {
      return  cy.get("#inlineRadio3")
    }
    clickShoppage()
    {
       return  cy.get(":nth-child(2) > .nav-link")
    }





}
//make sure avaliable of all page work .
export default HomePage