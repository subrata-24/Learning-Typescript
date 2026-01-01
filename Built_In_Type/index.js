//boolean
var isActive = true;
var hasPermission = false; // TypeScript infers 'boolean' type
console.log("".concat(isActive, ", ").concat(hasPermission));
//Number
var decimal = 6;
var hex = 0xf00d; // Hexadecimal
var binary = 10; // Binary
var octal = 484; // Octal
var float = 3.14; // Floating point
console.log(hex); //convert hex inot decimal
//String
var color = "blue";
var fullName = 'John Doe';
var age = 30;
var sentence = "Hello, my name is ".concat(fullName, " and I'll be ").concat(age + 1, " next year.");
console.log(fullName.split(" ")); //split by space and make array with all elements
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
//Big int
var bigNumber = 9007199254740991n;
var hugeNumber = BigInt(9007199254740991); // Alternative syntax
console.log(bigNumber);
