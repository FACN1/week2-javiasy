# week2-javiasy
Week 2 project for Javiasy - make a to do list. Site [here](https://facn1.github.io/week2-javiasy/).

## File structure:

- *index.html* : for main site
- *todo.js* : JS file for the to do list
- *style.css* : our style sheet
- *test.html* : QUnit html file for testing
- *tests.js* : JS testing file for QUnit

### todoFunctions

**addTodo function**

it gives the newTodo an id, and increases its id every time this.generateId() is used
newTodo.id = this.generateId();

it creates a new array of the todos array with newTodo added onto the end

return todos.concat(newTodo);

**deleteTodo function**
- Pure function
    Use Array.prototype.filter method to remove any todo object within the array with the given id.
- Tests
    Test the deleteTodo function with a mock array, and test with a hardcoded output.

**markTodo function**

- Use the map function to look through the to do's and change to one with the given ID to toggle done.
- Have to create a new object using Object.keys().forEach() to avoid reference the same objects. array.slice() will create a new array but this will refer to the same objects.
- We use the ternary operator to check the todo with the ID to mark and toggle it to the opposite.

**Sort functions**

- *alphabetSort* takes each character, compares them, and returns them to be sorted by sortTodos accordingly

- *sortTodos* sorts the given todo array using .sort(func). If no func argument is given use alphabet sort

**EditTodos**

- The function takes three inputs/arguments: the original todo list array, the id to edit and the new description.
- An Array.prototype.forEach is used to loop through the array items, and if the current array item object should be edited, a new description is added
- A beingEdited object is created and set to true. This prevents multiple todo items from being edited at the same time.


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
