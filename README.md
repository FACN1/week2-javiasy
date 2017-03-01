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

Joudy edit this

**deleteTodo function**
- Pure function
    Use Array.prototype.filter method to remove any todo object within the array with the given id.
- Tests
    Test the deleteTodo function with a mock array, and test with a hardcoded output.

**Marktodo**

Mavis edit this

**sortfunction**

alphabetSort takes each character, compares them, and returns them to be sorted by sortTodos accordingly

sortTodos sorts the given todo array using .sort(func). If no func argument is given use alphabet sort

**EditTodos**

- todo: Write about todo app


## DOM Manipulation

### Function - createTodoNode

*spanNode* : Adds a span holding the description of the todo item, and appends to an li node (the todo Node).

*deleteButtonNode* : Deletes the li node of the todo item with the given ID, using the deleteTodo function.

*markButtonNode*: Adds a button which can be used to toggle between a tick or a cross, using the markTodo function.

*sortButtonNode*: Adds a button which sorts the to do list alphabetically by calling the sortTodos function when clicked (using addEventListener). Has a class name of "sort-todos" for CSS styling and using insertBefore is appended onto the body after the submit form but before the to do list.

**edit button node**

- Add an edit button for each state child / todo list item.
- There is an event listener for click events on this edit button, which replaces the spanNode paragraph with an input and submit button
- There is an event listener inside the edit button event listener, which listens to submit events (enter keyboard key, since button is hidden for design purposes)
- On a submit event, the editTodos pure function is used to generate a new todos array, which is then rendered on the page

### Add to Todo form

Steps
1. Use an addEventListener on all submit actions executed by the element '#add-todo'
- Cancel default submit action (post request/reload page)
- Pull the input description with event.target.description.value
- Create new todo item object
- Update the state array with the addTodo "pure function"
- Execute the controller.render method


Todo state structure:

  Todo array (main variable for storing todo items), where todoObject1 is an example object:

    [todoObject1, todoObject2, todoObject3]

  Todo object structure:

    todoObject1 = {
        id: num (e.g. 0),
        description: information-about-todo-item (e.g. 'Write an email later today'),
        done: boolean (e.g. true or false) // this is for keeping track of what todo items have been completed
    }
