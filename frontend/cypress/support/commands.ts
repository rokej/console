/* Copyright Contributors to the Open Cluster Management project */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
    cy.visit(`/multicloud`, { failOnStatusCode: false })
    cy.getCookie('acm-access-token-cookie').then((cookie) => {
        if (!cookie) {
            cy.get('button').click()
            cy.contains('kube:admin').click()
            cy.contains('Username').type('kubeadmin')
            cy.contains('Password').type(Cypress.env('PASSWORD'))
            cy.get('.pf-c-button').click()
        }
    })
})

Cypress.Commands.add('multiselect', { prevSubject: 'element' }, (subject: JQuery<HTMLElement>, text: string) => {
    cy.wrap(subject)
        .click()
        .get('.pf-c-check')
        .contains(text)
        .parent()
        .within(() => cy.get('[type="checkbox"]').check())
})

before(() => {
    cy.login()
})