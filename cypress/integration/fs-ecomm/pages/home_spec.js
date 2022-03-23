describe("Application\'s home page", function () {
  it("Loads application without errors", function () {
    cy.visit("http://localhost:3000/")
    cy.url().should("include", "/")
  })
  it("Renders 'Spring Jacket' in home page", function () {
    cy.get("h1").contains("Spring Jacket")
  })
  it("Renders 'New Collection' in home page", function () {
    cy.get(".eyebrow.fs-4.text-white.opacity-50")
      .contains("New Collection")
  })
  it("Renders 'Limited Time Only'", function () {
    cy.get("small").contains("Limited Time Only")
  })

  describe("Main navigation", function () {
    it("Routes user to ' / ' page upon clicking nav 'Logo' icon", function () {
      cy.visit("http://localhost:3000/products");
      cy.get(".navbar-brand > img").click()
      cy.url().should("include", "/")
    })

    it("Routes user to '/products' page upon clicking nav 'Shop' icon", function () {
      cy.get("a.home-shop.nav-link").click()
      cy.url().should("include", "/products")
    })

    it("Routes a user to '/signin' when nav Signin button clicked", function () {
      cy.contains("Signin").click()
      cy.url().should("include", "/signin")
    })

    it("Routes a user to '/cart' when nav Cart button clicked", function () {
      cy.contains("Cart").click()
      cy.url().should("include", "/cart")
    })
  })
})
