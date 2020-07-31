import SELECTORS from "../../support/selectors";

describe("Cards CRUD functionality", () => {
  before(() => {
    cy.visit("http://localhost:8080");
  });

  it("Should create an item", () => {
    cy.get(SELECTORS.ADD_FORM_CARD).should("be.visible");
    cy.get(SELECTORS.BTN_SUBMIT).should("be.visible").should("be.disabled");
    cy.get(SELECTORS.FIELD_NAME).should("be.visible").type("  Velociraptor  ");
    cy.get(SELECTORS.FIELD_NUTRITION).should("be.visible").select("Carnivore");
    cy.get(SELECTORS.FIELD_CLASSIFICATION)
      .should("be.visible")
      .select("Mammal");
    cy.get(SELECTORS.FIELD_EXTICNT).should("be.visible").click();
    cy.get(SELECTORS.BTN_SUBMIT).click();
    cy.contains("Velociraptor");
    cy.get(SELECTORS.FIELD_NAME).should("be.visible").should("have.value", "");
  });

  it("Should edit an item", () => {
    cy.get(SELECTORS.ITEM_CARD).eq(3).find(SELECTORS.BTN_EDIT).click();
    cy.contains("Edit");
    cy.get(SELECTORS.EDIT_FORM_CARD).should("be.visible");
    cy.get(SELECTORS.EDIT_FORM_CARD)
      .find(SELECTORS.BTN_SUBMIT)
      .should("be.visible")
      .should("be.disabled");
    cy.get(SELECTORS.EDIT_FORM_CARD)
      .find(`${SELECTORS.FIELD_NAME} input`)
      .should("be.visible")
      .clear()
      .type("T-Rex");
    cy.get(SELECTORS.EDIT_FORM_CARD)
      .find(SELECTORS.FIELD_NUTRITION)
      .should("be.visible")
      .select("Carnivore");
    cy.get(SELECTORS.EDIT_FORM_CARD)
      .find(SELECTORS.FIELD_CLASSIFICATION)
      .should("be.visible")
      .select("Fish");
    cy.get(SELECTORS.EDIT_FORM_CARD)
      .find(SELECTORS.FIELD_EXTICNT)
      .should("be.visible")
      .click();
    cy.get(SELECTORS.EDIT_FORM_CARD).find(SELECTORS.BTN_SUBMIT).click();
    cy.contains("T-Rex");
    cy.get(SELECTORS.ITEM_CARD)
      .eq(3)
      .find(SELECTORS.FIELD_NAME)
      .should("not.be.visible");
  });

  it("Should delete an item", () => {
    cy.get(SELECTORS.ITEM_CARD).should("have.length", 4);
    cy.get(SELECTORS.ITEM_CARD).eq(3).find(SELECTORS.BTN_DELETE).click();
    cy.get(SELECTORS.ITEM_CARD).should("have.length", 3);
  });

  it("Should cancel an edit", () => {
    cy.get(SELECTORS.ITEM_CARD).eq(0).find(SELECTORS.BTN_EDIT).click();
    cy.contains("Edit");
    cy.get(SELECTORS.EDIT_FORM_CARD)
      .find(`${SELECTORS.FIELD_NAME} input`)
      .should("be.visible")
      .clear()
      .type("T-Rex");
    cy.get(SELECTORS.EDIT_FORM_CARD)
      .find(SELECTORS.BTN_CANCEL)
      .should("be.visible")
      .click();
    cy.contains("Lion");
  });

  it("Should cancel a create", () => {
    cy.get(SELECTORS.ADD_FORM_CARD);
    cy.contains("Add new");
    cy.get(SELECTORS.ADD_FORM_CARD)
      .find(`${SELECTORS.FIELD_NAME} input`)
      .should("be.visible")
      .clear()
      .type("T-Rex ********");
    cy.get(SELECTORS.ADD_FORM_CARD)
      .find(SELECTORS.BTN_CANCEL)
      .should("be.visible")
      .click();
    cy.get(SELECTORS.ADD_FORM_CARD)
      .find(`${SELECTORS.FIELD_NAME} input`)
      .should("have.value", "");
  });
});
