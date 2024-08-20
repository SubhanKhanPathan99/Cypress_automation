class SearchResultsPage {
    verifySearchResults(product) {
      cy.contains('Search').should('be.visible');
      cy.get('.product-item').each(($el) => {
        cy.wrap($el).should('contain.text', product);
      });
    }
  
    selectFirstProduct() {
      cy.get('.product-item').first().find('.product-title a').click();
    }
  }
  
  export default SearchResultsPage;
  