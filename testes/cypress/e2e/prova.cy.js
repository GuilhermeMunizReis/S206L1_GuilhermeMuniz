/// <reference types="cypress"/>
const usuario = 'abcde'
const senha = 'abcde'
    
describe('criando cenário de testes para o site demoblaze', ()=> {
    it('Logando um usuário com sucesso', ()=> {
        let info = crairUsuario()
        let _ = logarUsuario()
    })

    it('Logando um usuário e acessando a página do Galaxy S6', ()=> {
        let _ = logarUsuario()

        cy.wait(100)

        cy.get(':nth-child(1) > .card > :nth-child(1) > .card-img-top').click()
        cy.get('.name').should('have.text', 'Samsung galaxy s6')
    })

    it('Logando um usuário com falha', ()=> {
        cy.visit('https://www.demoblaze.com/index.html')
        cy.get('#login2').click()
        cy.get('#loginusername').type('falha')
        cy.get('#loginpassword').type(' ')
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
        cy.get('#logInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
        // Caso o login seja feito com sucesso não haverá opção para fechar a tela de login
    })
})

function crairUsuario(){
    let info = [usuario, senha]

    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#signin2').click()
    cy.get('#sign-username').type(usuario)
    cy.get('#sign-password').type(senha)
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#signInModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
    
    return info
}

function logarUsuario(){
    cy.visit('https://www.demoblaze.com/index.html')
    cy.get('#login2').click()
    cy.get('#loginusername').type(usuario)
    cy.get('#loginpassword').type(senha)
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()  

    return null
}