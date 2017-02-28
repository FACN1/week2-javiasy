QUnit.test( "addTodo function", function( assert ) {
    assert.equal(/*input*/1,/*output*/ 1, "addTodo passed!" );
});

QUnit.test("deleteTodo function", function(assert) {
    var input = [
        { id: -3, description: 'first todo'},
        { id: -2, description: 'second todo'},
        { id: -1, description: 'third todo'}
    ];
    var output = [
        { id: -3, description: 'first todo'},
        { id: -2, description: 'second todo'},
    ];
    assert.deepEqual(todo.todoFunctions.deleteTodo(input, -1), output, "Removed the third todo (id: -1) from todoList" );


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
