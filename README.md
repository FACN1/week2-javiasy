# week2-javiasy
Week 2 project for Javiasy - make a to do list

## File structure:

- *index.html* : for main site
- *todo.js* : JS file for the to do list
- *style.css* : our style sheet
- *test.html* : QUnit html file for testing
- *tests.js* : JS testing file for QUnit

### todoFunctions

**addTodo function**

**deleteTodo function**
- Pure function
    Use Array.prototype.filter method to remove any todo object within the array with the given id.
- Tests
    Test the deleteTodo function with a mock array, and test with a hardcoded output.

## DOM Manipulation

### Function - createTodoNode

*spanNode* : Adds a span holding the description of the todo item, and appends to an li node (the todo Node).

*deleteButtonNode* : Deletes the li node of the todo item with the given ID, using the deleteTodo function.

*markButtonNode*: Adds a button which can be used to toggle between a tick or a cross, using the markTodo function.

### Add to Todo form
