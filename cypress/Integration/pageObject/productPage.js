class productPage{

    clickonCheckoutpage()
    {
        return cy.get("li.nav-item.active a")
    }
    clickoncheckoutButton(){
        return cy.contains('Checkout')
    }


}

export default productPage