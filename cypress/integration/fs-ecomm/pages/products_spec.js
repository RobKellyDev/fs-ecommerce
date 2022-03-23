describe("Products page", function() {

  it("Shows H1 heading 'Latest Products' correctly", function () {
    cy.visit("http://localhost:3000/products");
    cy.get("h1").contains("Latest Products")
  })

  describe("First product", function() {

    beforeEach(() => {
      cy.get(":nth-child(1) > .col > .card > .card-body")
        .invoke("text").as("firstItem");
    })

    it("Renders product title 'Fjallraven' correctly ", function () {
      expect(this.firstItem).to.contain("Fjallraven")
    })
    it("Renders product price '£109.95'", function () {
      expect(this.firstItem).to.contain("£109.95")
    })
    it("Renders product button 'Buy Now' correctly ", function () {
      expect(this.firstItem).to.contain("Buy Now")
    })

  })

})




