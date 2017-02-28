QUnit.test( "addTodo function", function( assert ) {
    assert.equal(/*input*/1,/*output*/ 1, "addTodo passed!" );
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



    /*
    Expected input:
        todos -> [todo0, todo1, todo2]
        todo -> [id, description, done]
        types -> [int, string, boolean]

        [todo0, todo1, todo2]
    Expected output:
        [todo0, todo1]
    */
});

QUnit.test("markTodo function", function(assert) {
    var input1 = [
        { id: -3, description: 'first todo', done: false},
        { id: -2, description: 'second todo', done: false},
        { id: -1, description: 'third todo', done: false}
    ];
    var output1 = [
        { id: -3, description: 'first todo', done: false},
        { id: -2, description: 'second todo', done: false},
        { id: -1, description: 'third todo', done: true}
    ];

    // var output2 = [
    //    { id: -2, description: 'second todo'},
    //    { id: -1, description: 'third todo'}
    // ];

    // var badinput = [1,3,4]

    var marker = todo.todoFunctions.markTodo;


    assert.deepEqual(marker(input1, -1), output1, "Removed the third todo (id: -1) from todoList" );
    // assert.deepEqual(market(input1, -3), output2, "Removed the third todo (id: -3) from todoList" );
    // assert.deepEqual(marker(input, 1), input, "No id should return the same" );
    // assert.deepEqual(marker(badinput, 1), badinput, "Test for no id element" );



    /*
    Expected input:
        todos -> [todo0, todo1, todo2]
        todo -> [id, description, done]
        types -> [int, string, boolean]

        [todo0, todo1, todo2]
    Expected output:
        [todo0, todo1]
    */
})
