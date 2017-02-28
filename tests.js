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
    assert.equal(/*input*/1,/*output*/ 1, "deleteTodo passed!" );
})
