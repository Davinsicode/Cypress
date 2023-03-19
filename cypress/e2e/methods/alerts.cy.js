describe('Handling the Alerts', ()=>{
    let value 
    let windowtext = "Welcome Suresh"
    beforeEach('Launching the Application',()=>{
        // It use used to launch the  application before every it block
        cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
    })
    it.skip('AlertPopup-1', ()=>{
        // Normal Alert Button Automatically handled by the Cypress
        cy.get('button[onclick="jsAlert()"]').click()
        cy.get('#result').then((ref)=>{
            value = ref.text()
            expect(value).to.contains('You successfully clicked an alert')
        })
    })
    it.skip('AlertPopup-2, Handled by OK Button', ()=>
    {
        // Normal Alert Button Automatically handled by the Cypress By Clicking the OK Button
        cy.get('button[onclick="jsConfirm()"]').click()
        cy.get('#result').then((ref)=>
        {
            value = ref.text()
            expect(value).to.contains('You clicked: Ok')
        })
    })
    it.skip('AlertPopup-2, Handled by CANCEL Button', ()=>
    {
        // If want to click the Cancel Button, We need to "Trigger the Event"
        cy.get('button[onclick="jsConfirm()"]').click()
        // Clicking the Cancel button
        cy.on('window:confirm', ()=>false)
        cy.get('#result').then((ref)=>
        {
            value = ref.text()
            expect(value).to.contains('You clicked: Cancel')
        })
    })
    it('AlertPopup-3', ()=>{
        // It will enter the data before the window opened
        cy.window().then((ref)=>
        {
            cy.stub(ref,'prompt').returns(windowtext)
        })
        // It will click the button and automatically handled the alert by click ok button
        cy.get('button[onclick="jsPrompt()"]').click()
        cy.get('#result').then((ref)=>{
            value = ref.text()
            expect(value).to.contains(`You entered: ${windowtext}`)
        })
        
    })  
})