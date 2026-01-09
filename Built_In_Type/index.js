//boolean
let isActive = true;
let hasPermission = false; // TypeScript infers 'boolean' type
console.log(`${isActive}, ${hasPermission}`);
//Number
let decimal = 6;
let hex = 0xf00d; // Hexadecimal
let binary = 0b1010; // Binary
let octal = 0o744; // Octal
let float = 3.14; // Floating point
console.log(hex); //convert hex inot decimal
//String
let color = "blue";
let fullName = 'John Doe';
let age = 30;
let sentence = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;
console.log(fullName.split(" ")); //split by space and make array with all elements
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());
//Big int
const bigNumber = 9007199254740991n;
const hugeNumber = BigInt(9007199254740991); // Alternative syntax
console.log(bigNumber);
export {};
//# sourceMappingURL=index.js.map