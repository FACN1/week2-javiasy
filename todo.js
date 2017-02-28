var todo = (function() {
    // Part 1. Fill in any missing parts of the todoFunction object!
    // you can access these on todo.todoFunctions
    // For part one we expect you to use tdd

    // each of these functions takes an array of todos
    // [todo]
    // where a todo has the form
    // {
    //   id: /*the id of the todo*/,
    //   description: /*the description of the todo item*/,
    //   done: /*true or false, indicates whether the todo is done*/
    // }


// var utilities = { REMOVE THIS
//     clone: function(obj) {
//         if (null == obj || "object" != typeof obj) return obj;
//         var copy = obj.constructor();
//         for (var attr in obj) {
//             if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
//         }
//         return copy;
//     }
// }


var todoFunctions = {
    generateId: (function() {
        var idCounter = 0;
        return function () {
            return idCounter++;
        }
    })(),
    addTodo: function (todos, newTodo) {
        // should leave the input argument todos unchanged
        // return a new array, it should contain todos with the newTodo added to the end.
        // add an id to the newTodo. You can use the generateId function to create an id.
        // hint: array.concat
        return todos.concat(newTodo);
    },
    deleteTodo: function (todos, idToDelete) {
        // should leave the input argument todos unchanged
        // return a new array, this should not contain any todo with an id of idToDelete
        // hint: array.filter
        return todos.filter(function(todo) {
            return (todo.id === idToDelete) ? false : true;
        });
    },
    markTodo: function (todos, idToMark) {


        // should leave the input argument todos unchanged
        // in the new todo list, all elements will remain unchanged except the on with id: idToMark
        // this element will have its id toggled
        // hint: array.map
        // var newTodos = todos.slice();
        // console.log(newTodos.map(function(todo){
        //     var newTodo = todo.cloneNode(true);
        //   if (newTodo.id === idToMark){
        //     // if {todo.done === undefined) {}
        //     newTodo.done = !newTodo.done;
        //   }
        //   return newTodo;
        // }))
        return todos.map(function(todo){
            // var newTodo = utilties.clone(todo);
            var todoCopy = todo.constructor();
            for (var attr in todo) {
                if (todo.hasOwnProperty(attr)) todoCopy[attr] = todo[attr];
            }

          if (todoCopy.id === idToMark) {
              // if {todo.done === undefined) {}
              if (todoCopy.done === true) {
                  todoCopy.done = false;
              }
              else if (todoCopy.done === false) {
                  todoCopy.done = true;
              }
            //   newTodo.done = !newTodo.done;
          }
          return todoCopy;
        });
    },
    sortTodos: function(todos, sortFunction) {
        // stretch goal! Do this last
        // should leave the input arguement todos unchanged
        // sortFunction will have same signature as the sort function in array.sort
        // hint: array.slice, array.sort
    }
}

// part 2. The DOM
var state = [
    { id: -3, description: 'first todo'},
    { id: -2, description: 'second todo'},
    { id: -1, description: 'third todo'}
]; // this is our todoList

var controller = {
    createTodoNode: function(todoData) {
        var todoNode = document.createElement('li');
        // you will need to use addEventListener

        // add span holding description
        // this adds the delete button
        var deleteButtonNode = document.createElement('button');
        deleteButtonNode.addEventListener('click', function(event) {
            state = todoFunctions.deleteTodo(state, todoData.id);
            controller.render(state);
        });
        todoNode.appendChild(deleteButtonNode);

        // add markTodo button

        // add classes for css

        return todoNode;
    },
    render: function(state) {
        var todoListWrapper = document.getElementById('todo-container');
        var todoListNode = document.createElement('ul');
        state.forEach(function(todoData) {
            todoListNode.appendChild(controller.createTodoNode(todoData));
        });

        // you may want to add a class for css
        console.log(todoListWrapper.firstChild);
        todoListWrapper.replaceChild(todoListNode, todoListWrapper.firstChild);
    }
}

// bind create todo form
var addTodoForm = document.getElementById('add-todo');
addTodoForm.addEventListener('submit', function(event) {
    // https://developer.mozilla.org/en-US/docs/Web/Events/submit
    // what does event.preventDefault do?
    // what is inside event.target?
    console.log('click');

    var description = "?"; //event.target ....

    state = state // change this!! you should use todoFunctions.addTodoForm
    controller.render(state);
});

controller.render(state);


return { todoFunctions: todoFunctions, state: state };

})();
