import SELECTORS from "../../support/selectors";

describe("Character list functionality", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should add items", () => {
    cy.get(SELECTORS.SEARCH_INPUT).clear().type("Skywalker");
    cy.get(SELECTORS.SEARCH_SUBMIT).should("be.visible").click();
    cy.get(SELECTORS.RESULTS_WRAPPER).should("be.visible");
    cy.get(SELECTORS.ADD_ITEM).eq(0).click();
    cy.get(SELECTORS.ADD_ITEM).eq(1).click();
    cy.get(SELECTORS.ADD_ITEM).eq(2).click();
    cy.get(SELECTORS.CHARACTERS_WRAPPER).should("be.visible");
    cy.contains("Luke Skywalker - (X)");
    cy.contains("Anakin Skywalker - (X)");
    cy.contains("Shmi Skywalker - (X)");
    cy.get(SELECTORS.REMOVE_ITEM).should("have.length", 3);
  });

  it("Should remove an item", () => {
    cy.get(SELECTORS.CHARACTERS_WRAPPER).should("be.visible");
    cy.contains("Luke Skywalker - (X)");
    cy.contains("Anakin Skywalker - (X)");
    cy.contains("Shmi Skywalker - (X)");
    cy.get(SELECTORS.REMOVE_ITEM).eq(2).click();
    cy.get(SELECTORS.CHARACTERS_WRAPPER).should("be.visible");
    cy.contains("Luke Skywalker - (X)");
    cy.contains("Anakin Skywalker - (X)");
    cy.get(SELECTORS.REMOVE_ITEM).should("have.length", 2);
  });
});
