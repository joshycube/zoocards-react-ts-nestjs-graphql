import SELECTORS from "../../support/selectors";

describe("Search functionality", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should render a result", () => {
    cy.get(SELECTORS.SEARCH_INPUT).clear().type("Skywalker");
    cy.get(SELECTORS.SEARCH_SUBMIT).should("be.visible").click();
    cy.get(SELECTORS.NOT_FOUND_WRAPPER).should("not.be.visible");
    cy.get(SELECTORS.RESULTS_WRAPPER).should("be.visible");
    cy.contains("Luke Skywalker");
  });

  it("Should render a 404", () => {
    cy.get(SELECTORS.SEARCH_INPUT).clear().type("Boris");
    cy.get(SELECTORS.SEARCH_SUBMIT).should("be.visible").click();
    cy.get(SELECTORS.ERROR_WRAPPER).should("be.visible");
    cy.contains("Unfortunately, Boris has not found. Try Skywalker.");
  });
});
