/**
 * TOPIC: Type Aliases and String Literal Types
 - A Type Alias allows you to create a custom name for a type (a "blueprint"). 
 - String Literal Types allow you to restrict a variable to a specific set of 
   exact string values, acting like a lightweight Enum.
 */

// 1. Type Alias for Objects
// Instead of rewriting the object shape, we define it once as 'objectPropType'
type objectPropType = { name: string; id: number };

let user1: objectPropType;
user1 = { name: "Subrata Biswas", id: 1902014 };

let user2: objectPropType; 
user2 = { name: "Sabuj Biswas", id: 1902045 };

// Using the type alias to define an array of specific objects
let users: objectPropType[] = [];
users.push(user1);
users.push(user2);

console.log(users);



// 2. String Literal Types with Union
/*
 Here, 'requestType' is not just any string; it MUST be exactly "GET" or "POST". This prevents typos like "get" or "Post".
 */
type requestType = "GET" | "POST";

let request1: requestType;
request1 = "GET"; 
// request1 = "DELETE"; // Error: Type '"DELETE"' is not assignable to type 'requestType'

function makeRequest(requestName: requestType): void {
  console.log(requestName);
}
makeRequest("POST"); 

// Invalid call:
// makeRequest("UPDATE"); // Error: Argument is not assignable to parameter of type 'requestType'



/*
  - Type Aliases (type) make code DRY (Don't Repeat Yourself).
  - String Literal Types provide "Intelligence" to your strings, catching 
  typos during development.
  - They are highly effective for configuration settings, API methods, 
  and UI states (e.g., "loading" | "success" | "error").
 */


//Interface:
interface IAnimal { id: number, name: string, age: number }
let animal1: IAnimal = {
  id: 24,
  name: "Kutta",
  age: 15
}

let animal2: IAnimal = {
  id: 25,
  name: "Biral",
  age:5
}

let animal: IAnimal[] = [];
animal.push(animal1);
animal.push(animal2);

const printAnimalInfo = (animal: IAnimal) => {
  console.log(`ID: ${animal.id}, name: ${animal.name}, age: ${animal.age}`)
}

animal.forEach(element => printAnimalInfo(element));