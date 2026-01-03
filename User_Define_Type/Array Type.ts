/**
    Arrays in TypeScript can be typed to ensure all elements within the list follow a specific data type. This prevents mixed-type errors that are common in standard JavaScript.
 */

// Basic Array Declaration
let userName: string[];
/* Another way: let userName: Array<string>;
   Initializing empty: let userName: string[] = [];
*/
userName = ["Subrata", "Sabuj", "Subarna"];
userName.push("Hello"); // Valid: adding a string
// userName.push(24); // Error: Argument of type 'number' is not assignable to 'string'
console.log(userName[0]);
console.log(userName.length);



// Arrays with Union Types: This allows the array to contain a mix of specific types (string OR number)
let userId: (string | number)[];
userId = [24, "24"]; // Valid: both number and string allowed

// Readonly Arrays: The 'readonly' keyword prevents the array from being modified after creation
const names: readonly string[] = ["Dylan"];
// names.push("Jack"); Error: 'push' does not exist on type 'readonly string[]'
// names[0] = "Subrata"; Error: Index signature in type only permits reading
console.log(names[0]); // Reading is allowed

/** 
    Use 'type[]' for simple arrays and '(type1 | type2)[]' for mixed arrays.
    The 'readonly' modifier is excellent for data that should remain constant (like config lists).
    TypeScript provides full IntelliSense for array methods (like map, filter, reduce) based on the type of elements inside.
 */