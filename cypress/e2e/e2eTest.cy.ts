
describe('WiseWay ToDo List E2E', () => {

  const todo1 = "Buy groceries"
  const todo2 = "Pick up laundry"

  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('Add Todos, Mark them complete then Delete', () => {
    // Add todos
    cy.get('#task-input').clear().type(todo1);
    cy.get('button[type="submit"]').click();

    cy.get('#task-input').clear().type(todo2);
    cy.get('button[type="submit"]').click();

  
    // Check if todos exist
    cy.contains(todo1).should('exist');
    cy.contains(todo2).should('exist');

 
    // Mark first todo complete
    cy.contains(todo1)
      .parent()
      .parent()
      .find('input[type="checkbox"]')
      .check({ force: true })
    

    // Check if todo is marked complete
    cy.contains(todo1)
      .should('have.class', 'line-through');



      // --ADD TESTS HERE---
  });

  //Clears DB after test
  afterEach(() => {
    cy.get('#clear-all').click();
  });
});