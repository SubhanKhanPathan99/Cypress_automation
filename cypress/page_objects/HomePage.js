class HomePage {
    visit() {
      cy.visit('https://demowebshop.tricentis.com/');
    }

    LoginDetails() 
    {
      cy.get('.ico-login').click()
      cy.get('#Email').type('a1b2c3@gmai.com')
      cy.get('#Password').type('909090123')
      cy.get('.login-button').click()
    }
  
    search(product) {
      cy.get('input[name="q"]').type(`${product}`);
      cy.get('input[type="submit"]').click()
    }
  }
  
  export default HomePage;
  