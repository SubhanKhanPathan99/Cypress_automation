class CartPage {
    proceedToCheckout() {
      cy.get('#topcartlink').click()
      cy.get('#termsofservice').check()
      cy.get('#checkout').click();
    }
  }
  
  export default CartPage;
  