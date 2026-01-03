/**
 Union types allow a variable to hold more than one type of value. This is useful when data might come in different formats (e.g., an ID from an API might be a string or a number).
 */

// The vertical bar (|) acts as an "OR" operator for types.
let userId: string | number | boolean;

userId = "101"; 
userId = 101;    
userId = true;   
// userId = {};   // Error: Type '{}' is not assignable to string | number | boolean.

function printStatusCode(code: string | number): void {
    console.log(`My status code is ${code}.`);
}

printStatusCode(404);     
printStatusCode('404');   

/**
 Use Union Types when a value can legitimately be multiple types.
 It provides more flexibility than a single type but more safety than 'any'.
 */