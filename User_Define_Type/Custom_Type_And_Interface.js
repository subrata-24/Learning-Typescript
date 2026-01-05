/**
 * TOPIC: Type Aliases and String Literal Types
 - A Type Alias allows you to create a custom name for a type (a "blueprint").
 - String Literal Types allow you to restrict a variable to a specific set of
   exact string values, acting like a lightweight Enum.
 */
var user1;
user1 = { name: "Subrata Biswas", id: 1902014 };
var user2;
user2 = { name: "Sabuj Biswas", id: 1902045 };
// Using the type alias to define an array of specific objects
var users = [];
users.push(user1);
users.push(user2);
console.log(users);
var request1;
request1 = "GET";
// request1 = "DELETE"; // Error: Type '"DELETE"' is not assignable to type 'requestType'
function makeRequest(requestName) {
    console.log(requestName);
}
makeRequest("POST");
var animal1 = {
    id: 24,
    name: "Kutta",
    age: 15
};
var animal2 = {
    id: 25,
    name: "Biral",
    age: 5
};
var animal = [];
animal.push(animal1);
animal.push(animal2);
var printAnimalInfo = function (animal) {
    console.log("ID: ".concat(animal.id, ", name: ").concat(animal.name, ", age: ").concat(animal.age));
};
animal.forEach(function (element) { return printAnimalInfo(element); });
