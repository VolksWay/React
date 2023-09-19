describe('Teste de Cadastro', () => {
    it('Preencher o formulário de cadastro', () => {
      // Visite a página de cadastro (substitua a URL pelo seu ambiente)
    cy.visit('/cadastro/usuario');

    /* // Preencha o campo de nome
      cy.get('#nome').type('Seu Nome');
  
      // Preencha o campo de e-mail
      cy.get('#email').type('seuemail@example.com');
  
      // Preencha o campo de senha
      cy.get('#senha').type('suasenha'); */
      cy.get('#motorista').click();
      cy.wait(500);
      // Envie o formulário
      cy.get('.btnProximo').click();
      /* cy.get('form').submit(); */
  
      // Aguarde uma mensagem de confirmação ou uma mudança na página, se aplicável
      // Por exemplo:
      // cy.contains('Cadastro concluído com sucesso').should('be.visible');
    });
  });