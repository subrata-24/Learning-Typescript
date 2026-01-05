/*
    TypeScript allows us to define the exact structure (shape) of an object.We can make certain properties optional using the '?' symbol, which is extremely useful for data that might not always be present.
*/
let user1;
user1 = { name: "Subrata Biswas", id: 1902014 };
console.log(user1);
// Here, 'id' is optional, so we can initialize the object with just a name.
let user2 = {
    name: "Sabuj Biswas"
};
console.log(user2);
/*
    Defining an Array of Specific Objects:
    INSTEAD OF: let users: object[] = [];
    WE USE: A specific shape so we can access properties safely later.
*/
let users = [];
users.push(user1);
users.push(user2);
console.log(users);
// Correct Way to Loop in array -> 'for...of'
for (const user of users) {
    console.log(user.name);
}
export {};
/*
 - Avoid using the generic 'object' type; it prevents you from accessing specific properties.
 - Use the '?' modifier to handle data that is missing or undefined.
 - Use 'for...of' for iterating over array values and 'for...in' for object keys.
*/ 
//# sourceMappingURL=Object_Type.js.map