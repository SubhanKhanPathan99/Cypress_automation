import HomePage from '../page_objects/HomePage';
import SearchResultsPage from '../page_objects/SearchResultsPage';
import ProductDetailsPage from '../page_objects/ProductDetailsPage';
import CartPage from '../page_objects/CartPage';
import CheckoutPage from '../page_objects/CheckoutPage';

const homePage = new HomePage();
const searchResultsPage = new SearchResultsPage();
const productDetailsPage = new ProductDetailsPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();

describe('Demo Web Shop Automation', () => {
  it('should search for a product, add to cart, and proceed to checkout', () => {
    // Define the search term dynamically
    const searchTerm = 'laptop'; 

    // Visit the homepage and search for a product
    homePage.visit();
    homePage.LoginDetails();
    homePage.search(searchTerm);

    // Store the search term in a Cypress alias
    cy.get('.search-text').invoke('val').as('searchTerm');
   

    // Verify search results and select the first product
    cy.get('@searchTerm').then((term) => {
      searchResultsPage.verifySearchResults(term);
    });
    searchResultsPage.selectFirstProduct();

    // Verify product details and add to cart
    
    productDetailsPage.addToCart();

    // Proceed to checkout from the cart page
    cartPage.proceedToCheckout();

    // Add billing address and verify
    const billingAddress = '123 Demo Street';
    checkoutPage.addBillingAddress(billingAddress);
  });
});
