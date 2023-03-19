import 'cypress-iframe'
require ('@4tw/cypress-drag-drop')
describe('Handling Mouse Actions', ()=>{
it.skip('Mouse Hover',()=>{
    cy.visit('https://demo.opencart.com/')
    cy.get(`[class="nav navbar-nav"]:first-child>li:first-child`).trigger('mouseover').click()
    cy.get(`.see-all`).contains('Show All Desktops').click()
})
it.skip('Right Click',()=>{
    cy.visit('http://swisnl.github.io/jQuery-contextMenu/demo.html')
    // Approach1
    //cy.get(`.context-menu-one.btn.btn-neutral`).trigger('contextmenu')

    // Approach2
    cy.get(`.context-menu-one.btn.btn-neutral`).rightclick()
    cy.get(`.context-menu-icon-delete > span`).click()
})
it.skip('Double Click',()=>{
    cy.visit('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3')
    cy.frameLoaded('#iframeResult')
    cy.iframe(`#iframeResult`).find(`button[ondblclick='myFunction()']`).dblclick()
    
})
it('Darg and Drop',()=>
{
    cy.visit('http://www.dhtmlgoodies.com/scripts/drag-drop-custom/demo-drag-drop-1.html')
    // Approach1 by using the PLUGIN
    cy.get(`#box1`).drag(`#dropBox2`)

})
})