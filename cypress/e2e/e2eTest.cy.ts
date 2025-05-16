
describe('WiseWay ToDo List E2E', () => {

  const todo1 = "Buy groceries";
  const todo2 = "Pick up laundry";
  const timedTask = "Submit assignment";

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



    // ✅ Delete the second todo
    cy.contains(todo2)
      .parent()
      .parent()
      .find('button')
      .click();
    
    // Confirm deletion
    cy.contains(todo2).should('not.exist');
  });

  it('Add a timed task with a deadline', () => {
    // Change type to "Timed"
    cy.get('select').first().select('timed');

    // Enter task text
    cy.get('#task-input').clear().type(timedTask);

    // Set a deadline (e.g., today + 1)
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const isoDate = tomorrow.toISOString().split("T")[0];

    cy.get('input[type="date"]').type(isoDate);

    // Submit task
    cy.get('button[type="submit"]').click();

    // Verify task was added
    cy.contains(timedTask).should('exist');
    cy.contains(isoDate).should('exist');
  });

  //Clears DB after test
  afterEach(() => {
    cy.get('#clear-all').click();
  });
});