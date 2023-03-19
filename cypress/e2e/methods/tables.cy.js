import '@cypress/xpath'
describe('Handling the Tables', ()=>{
    let email = new Array()
    // Before Hook it Executes before every (---it-BLOCK---)
    beforeEach('Navigate to Application and Click the Customer Details',()=>
    {
        cy.visit('https://demo.opencart.com/admin/')
        cy.get(`[name="username"]`).type('demo')
        cy.get(`[name="password"]`).type('demo')
        cy.get(`[type="submit"]`).click()

        // Navigate Parent Customer ---> Child Customer
        cy.get(`[class="btn-close"]`).should('be.visible').click()
        cy.get(`#menu-customer > .parent`).click()
        cy.get(`#collapse-5 > :nth-child(1) > a`).click()
    })
    it.skip('Checks the Rows and Columns',()=>
    {
        // Check the Count of the ROWS present in the Table
        cy.get(`table[class="table table-bordered table-hover"]>tbody>tr`).should('have.length','10')
        // Check the Count of the COLUMNS present in the Table
        cy.get(`table[class="table table-bordered table-hover"]>thead>tr>td`).should('have.length','7')
    })
    it.skip('Check the data which is present for the particular row and column',()=>
    {
        cy.get(`table[class="table table-bordered table-hover"]>tbody>tr:nth-child(4)>td:nth-child(3)`).contains('gorankrezic90@gmail.com')
    })
    it.skip('Read all the rows and columns from this table',()=>
    {
        // Capture all the repeat one by one
        cy.get(`table[class="table table-bordered table-hover"]>tbody>tr`)
        .each((row, index, rows)=>
        {
            // Wrap method which is used to wrap the elements presenet in (---row---)
            // It will get ONE ROW
            cy.wrap(row).within(()=>
            {
                cy.get('td').each((column, indexn, columns)=>{
                    
                    cy.log(column.text())
                })
            })
        })

    })
    it.skip('Read the data from Paticular Column',()=>{
        // Get All the rows from the table
        cy.get(`table[class="table table-bordered table-hover"]>tbody>tr`)
        .each((row, index, rows)=>{
            // Wrap the the one by one
            cy.wrap(row).within(()=>{
                    cy.get("td:nth-child(3)").each((column, index, columns)=>{
                    email.push(column.text())
                    
                })
            })
        })
    })
    it.skip('Get the value from array', ()=> 
    {
        email.forEach((ref)=>{
            cy.log("Array Value: "+ref)
        })
    })
    it('Getting the tables values from multiple page(---PAGINATION---)',()=>{
        // We need to find the page number 1st --> Showing 1 to 10 of 11394 (1140 Pages)
        //let totalPageNumber 
        /* cy.get(`.col-sm-6.text-end`).then((ref)=>
        {
            let page = ref.text()
            totalPageNumber = page.substring(page.indexOf("(")+1,page.indexOf("P")-1) // Here we are getting the starting value ending value of the total page number
            cy.log("Total Page Number is: "+totalPageNumber)
        }) */

        let totalPageNumber = 5;
        for (let p = 1; p <= totalPageNumber; p++) 
        {
            if(p>1)
            {
                // For the Next Page Button
                cy.get(`.pagination>li:nth-child(${p})`).click()
                cy.wait(5000);
            }

            cy.get(`table[class="table table-bordered table-hover"]>tbody>tr`).each((row, index, rows)=>
            {
                cy.wrap(row).within(()=>
                {
                    cy.get(`td:nth-child(3)`).then((ref)=>
                    {
                        cy.log("Email: "+ref.text())
                    })
                })
            })

            
        }
    })
    
})