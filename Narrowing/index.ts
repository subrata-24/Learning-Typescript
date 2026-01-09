function printTodos(todos: string[] | string | null) {
    if (todos) { // Truthy / falsy narrowing
        if (typeof todos === "object") { // typeof narrowing
                                         // Array.isArray() -> Array narrowing
            todos.map((todo)=>console.log(todo))
        } else {
            console.log(todos);
        }
    }else {
            console.log("There is no do")
        }
}

let todos = ["todo1", "todo2"];
printTodos(todos);
printTodos("Todoss");
printTodos(null);
// printTodos(); pass undefined



