describe("Validar pantalla politica", () => {
  let fixtureFilePath = "../fixtures/dataEsquemaSample.json";

  /* ==== Test Created with Cypress Studio ==== */
  it("ValidarPantallaPolitica", function () {
    /* ==== Generated with Cypress Studio ==== */
    cy.fixture(fixtureFilePath).then((datos) => {
      let { url, usuario, password } = datos;
      cy.visit(url);
      cy.get("#txtUsuario").clear("v");
      cy.get("#txtUsuario").type(usuario);
      cy.get("#txtClave").clear("1");
      cy.get("#txtClave").type(password);
      cy.get(".btn").click();
      cy.get(".botonhabilitado").should("be.visible");
      cy.get(".botonhabilitado").should("have.class", "botonhabilitado");
      cy.get(".botonhabilitado").click();
      cy.get(".toggle-sidebar > a > .fa").click();
      cy.get(":nth-child(3) > .notExpand > .txt").should(
        "have.text",
        "RESTAURANTE"
      );
      cy.get(":nth-child(3) > .notExpand > .txt").should("be.visible");
      cy.contains("ESTACION").click();
      cy.get("#\\35 A89AF63-362C-E611-80CC-0050568602D0 > a > .txt").click();
      cy.get(".row > .btn").should(
        "have.text",
        "Ir a Administración Políticas"
      );
      cy.get(".row > .btn").should("be.visible");
    });

    /* ==== End Cypress Studio ==== */
  });
});
