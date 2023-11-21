/// <reference types="cypress"/>

describe('criando cenário de testes para o site globalsqa', ()=> {
  it.skip('Registrando um usuário com sucesso', ()=> {
  })
  
  it.skip('Registrando um usuário com falha (faltando a senha)', ()=> {
    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/register')
    cy.get('#firstName').type('Guilherme')
    cy.get('#Text1').type('Muniz')
    cy.get('#username').type('Gui')
    cy.get('#password').type('1234')
    cy.get('#password').clear()
    cy.get('.has-error > .help-block').should('have.text', 'Password is required')
    cy.get('.btn-primary').should('be.disabled')
  })

  it('logando um usuário com sucesso', ()=> {
  let info = criarUsuario()
  
  cy.get('#username').type(info[0])
  cy.get('#password').type(info[1])
  cy.get('.btn-primary').click()
  cy.get('h1.ng-binding').should('contain.text', info[0])
  })

})

function criarUsuario(){
  let horas = new Date().getHours().toString()
  let minutos = new Date().getMinutes().toString()
  let segundos = new Date().getSeconds().toString()
  let user = horas + minutos + segundos + 'Id'
  let senha = horas + minutos + segundos + 'Senha'
  let userInfo = [user, senha]

  cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
  cy.get('.btn-link').click()
  cy.get('#firstName').type(user)
  cy.get('#Text1').type(user)
  cy.get('#username').type(user)
  cy.get('#password').type(senha)
  cy.get('.btn-primary').click()
  cy.get('.ng-binding').should('contain.text', 'Registration successful')

  return userInfo
}