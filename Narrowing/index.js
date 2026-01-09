function printTodos(todos) {
    if (todos) { // Truthy / falsy narrowing
        if (typeof todos === "object") { // typeof narrowing
            // Array.isArray() -> Array narrowing
            todos.map(function (todo) { return console.log(todo); });
        }
        else {
            console.log(todos);
        }
    }
    else {
        console.log("There is no do");
    }
}
var todos = ["todo1", "todo2"];
printTodos(todos);
printTodos("Todoss");
printTodos(null);
// printTodos(); pass undefined
