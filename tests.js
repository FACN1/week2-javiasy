QUnit.test( "addTodo function", function( assert ) {
    var testtodos = [
      { id: -3, description: 'first todo'},
      { id: -2, description: 'second todo'},
      { id: -1, description: 'third todo'}
    ];

    var result = todo.todoFunctions.addTodo(testtodos,{id: 0,description: 'fourth todo'});
    var expected =[
        { id: -3, description: 'first todo'},
        { id: -2, description: 'second todo'},
        { id: -1, description: 'third todo'},
        { id: 0, description: 'fourth todo'}
    ];

    var result2 = todo.todoFunctions.addTodo(testtodos,{id: null, description: "fourth todo"})
    var expected2 =[
        { id: -3, description: 'first todo'},
        { id: -2, description: 'second todo'},
        { id: -1, description: 'third todo'},
        { id: 1, description: 'fourth todo'}
    ];

    var result3 = todo.todoFunctions.addTodo(testtodos,{description: "fourth todo"})
    var expected3 =[
        { id: -3, description: 'first todo'},
        { id: -2, description: 'second todo'},
        { id: -1, description: 'third todo'},
        { id: 2, description: 'fourth todo'}
    ];


    assert.deepEqual(result, expected, "addTodo passed!" );
    assert.deepEqual(result2,expected2, "adds correct id");

});

QUnit.test("deleteTodo function", function(assert) {
    var input = [
        { id: -3, description: 'first todo'},
        { id: -2, description: 'second todo'},
        { id: -1, description: 'third todo'}
    ];
    var output1 = [
        { id: -3, description: 'first todo'},
        { id: -2, description: 'second todo'}
    ];

    var output2 = [
       { id: -2, description: 'second todo'},
       { id: -1, description: 'third todo'}
    ];

    var badinput = [1,3,4]

    var deleter = todo.todoFunctions.deleteTodo;


    assert.deepEqual(deleter(input, -1), output1, "Removed the third todo (id: -1) from todoList" );
    assert.deepEqual(deleter(input, -3), output2, "Removed the third todo (id: -3) from todoList" );
    assert.deepEqual(deleter(input, 1), input, "No id should return the same" );
    assert.deepEqual(deleter(badinput, 1), badinput, "Test for no id element" );


});

QUnit.test("markTodo function", function(assert) {
    var input1 = [
        { id: 0, description: 'first todo', done: false},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: false}
    ];
    var output1 = [
        { id: 0, description: 'first todo', done: false},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: true}
    ];
    var input2 = [
        { id: 0, description: 'first todo', done: false},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: false}
    ];
    var output2 = [
        { id: 0, description: 'first todo', done: true},
        { id: 1, description: 'second todo', done: false},
        { id: 2, description: 'third todo', done: false}
    ];



    var marker = todo.todoFunctions.markTodo;


    assert.deepEqual(marker(input1, 2), output1, "Marked the third todo as done" );
    assert.deepEqual(marker(input1, 2), output1, "Marked the third todo as done" );
    assert.deepEqual(marker(input2, 0), output2, "Marked the first todo as done" );

})

QUnit.test("sortfunction test", function(assert){

    var input1 = [
        { id: 0, description: 'c', done: false},
        { id: 1, description: 'b', done: false},
        { id: 2, description: 'a', done: false}
    ];
    var output1 = [
        { id: 2, description: 'a', done: false},
        { id: 1, description: 'b', done: false},
        { id: 0, description: 'c', done: false}
    ];

    var input2 = [
        { id: 0, description: 'c', done: false},
        { id: 2, description: 'a', done: false},
        { id: 1, description: 'b', done: false},
    ];
    var output2 = [
        { id: 2, description: 'a', done: false},
        { id: 1, description: 'b', done: false},
        { id: 0, description: 'c', done: false}
    ];

    result = todo.todoFunctions.sortTodos(input1);

    assert.deepEqual(result,output1,"first sort test (reverse would work)");

    console.log(input1); //use console to check for mutations

    result = todo.todoFunctions.sortTodos(input2);

    assert.deepEqual(result,output2,"second sort test");

    var input3 = [
        { id:0, description: '3', done: false},
        { id:1, description: '2', done: false},
        { id:2, description: '1', done: false},
    ];

    var output3 = [
        { id:2, description: '1', done: false},
        { id:1, description: '2', done: false},
        { id:0, description: '3', done: false},
    ];



    result = todo.todoFunctions.sortTodos(input3);

    assert.deepEqual(result,output3,"third sort test, use numbers");

    var input4 = [
        { id:0, description: 'long description 3', done: false},
        { id:1, description: 'long description 2', done: false},
        { id:2, description: 'long description 1', done: false},
    ];

    var output4 = [
        { id:2, description: 'long description 1', done: false},
        { id:1, description: 'long description 2', done: false},
        { id:0, description: 'long description 3', done: false},
    ];



    result = todo.todoFunctions.sortTodos(input4);

    assert.deepEqual(result,output4,"fourth sort test, using longer descriptions");


});





QUnit.test("sort alphabetically", function(assert){
    var object1 =         {description: 'first todo', done: true};
    var object2 =         {description: 'second todo', done: false};
    var object3 =         {description: 'third todo', done: false};

    var result = todo.todoFunctions.alphabetSort(object3,object1);
    var expected = 1;
    assert.equal(result,expected,"this is supposed to return true because 'third todo' comes after 'first todo' alphabetically");

    var result = todo.todoFunctions.alphabetSort(object1,object2);
    var expected = -1;
    assert.equal(result,expected,"this is supposed to return false because 'second todo' comes after 'first todo' alphabetically");

    var result = todo.todoFunctions.alphabetSort(object2,object2);
    var expected = 0;
    assert.equal(result,expected,"this is supposed to return 0 because they are the same");






});
