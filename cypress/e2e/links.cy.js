// describe('template spec', () => {
//   it('passes', () => {
//     cy.visit('https://example.cypress.io')
//   })
// })
describe("Teste de Links Externos do Site", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5500/index.html"); // Altere para a URL do seu site
  });

  it("Deve verificar se a estrutura básica do HTML está presente", () => {
    cy.get("#container").should("exist");
    cy.get("#profile").should("exist");
    cy.get("ul").should("exist");
    cy.get("#social-links").should("exist");
    cy.get("footer").should("exist");
  });

  it("Deve ser responsivo em diferentes tamanhos de tela", () => {
    cy.viewport("iphone-6"); // Simula a tela de um iPhone 6
    cy.get("#container").should("be.visible");

    cy.viewport("macbook-15"); // Simula a tela de um MacBook 15"
    cy.get("#container").should("be.visible");
  });

  it("Deve verificar se os links da lista são abertos corretamente", () => {
    cy.get("a")
      .contains("WHATSAPP")
      .should(
        "have.attr",
        "href",
        "https://wa.me/5511951472889?text=Gostaria%20de%20informações%20sobre%20às%20coberturas%20da%20MalokasTV!"
      );
    cy.get("a")
      .contains("YOUTUBE")
      .should(
        "have.attr",
        "href",
        "https://www.youtube.com/channel/UCAx_KZkPDoXSL-1KES4Tw4w"
      );
    cy.get("a")
      .contains("SITE")
      .should("have.attr", "href", "https://malokas-website.vercel.app/");
    cy.get("a")
      .contains("PODCAST")
      .should("have.attr", "href", "https://anchor.fm/malokas-tv");
    cy.get("a")
      .contains("INSTAGRAM")
      .should("have.attr", "href", "https://www.instagram.com/malokastv");
    cy.get("a")
      .contains("FACEBOOK")
      .should("have.attr", "href", "https://www.facebook.com/malokastv");
    cy.get("a")
      .contains("TIKTOK")
      .should("have.attr", "href", "https://www.tiktok.com/@malokas_tv");
  });

  it("Deve verificar se os links de ícones de redes sociais são abertos corretamente", () => {
    cy.get(
      '#social-links a[href="https://www.youtube.com/channel/UCAx_KZkPDoXSL-1KES4Tw4w"]'
    ).should("have.attr", "target", "_blank");
    cy.get(
      '#social-links a[href="https://open.spotify.com/show/5cBcronJ7EyQb4dwQYFTqd"]'
    ).should("have.attr", "target", "_blank");
    cy.get(
      '#social-links a[href="https://www.instagram.com/malokastv/"]'
    ).should("have.attr", "target", "_blank");
    cy.get('#social-links a[href="https://www.facebook.com/malokastv"]').should(
      "have.attr",
      "target",
      "_blank"
    );
    cy.get('#social-links a[href="https://www.tiktok.com/@malokas_tv"]').should(
      "have.attr",
      "target",
      "_blank"
    );
    cy.get(
      '#social-links a[href="https://wa.me/5511951472889?text=Gostaria%20de%20informações%20sobre%20às%20coberturas%20da%20MalokasTV!"]'
    ).should("have.attr", "target", "_blank");
  });

  it("Deve verificar se o link do rodapé é aberto corretamente", () => {
    cy.get("footer a#personal-link").should(
      "have.attr",
      "href",
      "https://portifolionextjs.vercel.app/"
    );
  });

  it("Deve alternar entre os temas Light e Dark corretamente", () => {
    cy.get("#switch").click(); // Clica para alternar o tema
    // cy.get('body').should('have.class', 'dark-mode');  // Verifica se a classe de dark mode foi adicionada

    cy.get("#switch").click(); // Clica novamente para voltar ao tema original
    // cy.get('body').should('not.have.class', 'dark-mode');  // Verifica se a classe de dark mode foi removida
  });

  it("Deve carregar a imagem do logotipo corretamente", () => {
    cy.get("#profile img")
      .should("be.visible")
      .and(($img) => {
        expect($img[0].naturalWidth).to.be.greaterThan(0);
      });
  });
  
});
