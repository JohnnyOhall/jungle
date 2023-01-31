describe("Visit product detail page", () => {

  it("visits the home page", () => {
    cy.visit("/")
  })

  it("confirms there are products on the page", () => {
    cy.get(".products article").should("be.visible");
  })

  it("confirms there are 2 products on the page", () => {
    cy.get(".products article").should("have.length", 2);
  })

  it("should navigate to products/id page", () => {
    cy.contains("Scented Blade").click()
  })

})