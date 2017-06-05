
Feature('User adds a new todo');

Scenario('User adds a new todo', (I) => {
const todoContent = 'Learnong to add a new Todo';
I.amOnPage('/');
I.dontSeeElement('#todo-count');
I.fillField('newTodo', 'Write a guide');
I.pressKey('Enter');
I.see('Write a guide', {repeater: "todo in todos"});
I.see('1 item left', '#todo-count');
});
