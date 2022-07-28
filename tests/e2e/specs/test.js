// https://docs.cypress.io/api/table-of-contents

describe("HomeView.vue", () => {
  it("Visits the app root url", () => {
    cy.visit("/");
    cy.contains("h1", "Pokémon App!");
  });
});
