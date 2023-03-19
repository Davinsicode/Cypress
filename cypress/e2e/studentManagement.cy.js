describe('Student Management System',()=>{
    let userName
    it('Navigate to the Application',()=>{
        cy.visit('http://testingserver/domain/Student_Management_System/view/login.php')
        cy.url().should('include','Student_Management_System')
        cy.xpath(`//input[@ id="email"]`).should('be.visible').type('admin@gmail.com')
        cy.xpath(`//input[@ id="password"]`).should('be.visible').type('12345')
        cy.xpath(`//button[@ id="btnSubmit"]`).should('be.visible').click()
    })
    it('Verify the User',()=>{
        cy.xpath(`//p[.='Mr.Admin']`).should('be.visible').then((ref)=>
        {
            userName = ref.text()
            cy.log("UserName: "+userName)
           // expect(userName).to.equal("Mr.Admin")
        })
    })
}) 