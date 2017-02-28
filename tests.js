QUnit.test( "addTodo function", function( assert ) {
    // var result = (1, 1); //no change/coins just an empty array
    // var expected = [];
    // assert.deepEqual(result, expected);


    var result = todo.todoFunctions.addTodo(todo.state,{id: 0,description: 'fourth todo'});
    var expected =[
        { id: -3, description: 'first todo'},
        { id: -2, description: 'second todo'},
        { id: -1, description: 'third todo'},
        { id: 0, description: 'fourth todo'}];


    // ([
    //     {id: 1,description: 'first'},
    //     {id: 2,description: 'second'},
    //     {id: 3,description: 'third'}
    // ])

    assert.deepEqual(result, expected, "addTodo passed!" );
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
})
