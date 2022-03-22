describe("Application's home page", function () {
  it('Loads application without errors', function () {
    cy.visit('http://localhost:3000/')
    cy.url().should('include', '/')
  })
  it('Renders "Spring Jacket" in home page', function () {
    cy.get('h1').contains('Spring Jacket')
  })
  it.only('Renders "New Collection" in home page', function () {
    cy.get('.eyebrow.fs-4.text-white.opacity-50').contains('New Collection')
  })
  it.only('Renders "Limited Time Only"', function () {
    cy.get('small').contains('Limited Time Only')
  })

  describe('Main navigation', function () {
    it('Routes user to "/products" page upon clicking "Shop" icon', function () {
      cy.get('a.home-shop.nav-link').click()
      cy.url().should('include', '/products')
    })

    it('Routes a user to "/signin" when Signin button clicked', function () {
      cy.contains('Signin').click()
      cy.url().should('include', '/signin')
    })

    it('Routes a user to "/cart" when Cart button clicked', function () {
      cy.contains('Cart').click()
      cy.url().should('include', '/cart')
    })
  })
})
