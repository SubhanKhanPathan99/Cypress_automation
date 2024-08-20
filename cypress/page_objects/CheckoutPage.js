class CheckoutPage {
    addBillingAddress(address) {
      cy.get('#BillingNewAddress_Address1').type(address);
      cy.get('#BillingNewAddress_CountryId').select('United States')
      cy.get('#BillingNewAddress_StateProvinceId').select('Kansas')
      cy.get('#BillingNewAddress_City').type('Wichita')
      cy.get('#BillingNewAddress_Address1').type('abcdef')
      cy.get('#BillingNewAddress_ZipPostalCode').type('231234')
      cy.get('#BillingNewAddress_PhoneNumber').type('3161123421')
      cy.get("input[onclick='Billing.save()']").click()
      cy.get('#shipping-address-select').should('contain',address)
      cy.get("input[onclick='Shipping.save()']").click()
      cy.get('#shippingoption_0').should('be.checked')
      cy.get("input[onclick='ShippingMethod.save()']").click()
      cy.get('#paymentmethod_0').should('be.checked')
      cy.get("input[onclick='PaymentMethod.save()']").click()
      cy.get("input[onclick='PaymentInfo.save()']").click()
      cy.get('.billing-info').should('contain',address)
      cy.get('.shipping-info').should('contain',address)
      cy.get("input[onclick='ConfirmOrder.save()']").click()
      cy.get('.order-completed').should('contain','Your order has been successfully processed!')
    }
  }
  
  export default CheckoutPage;
  