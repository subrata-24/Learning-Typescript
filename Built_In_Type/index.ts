//boolean
let isActive: boolean = true;
let hasPermission = false; // TypeScript infers 'boolean' type
console.log(`${isActive}, ${hasPermission}`)

//Number
let decimal: number = 6;
let hex: number = 0xf00d;       // Hexadecimal
let binary: number = 0b1010;     // Binary
let octal: number = 0o744;      // Octal
let float: number = 3.14;      // Floating point
console.log(hex);//convert hex inot decimal

//String
let color: string = "blue";
let fullName: string = 'John Doe';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName} and I'll be ${age + 1} next year.`;
console.log(fullName.split(" "));//split by space and make array with all elements
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

//Big int
const bigNumber: bigint = 9007199254740991n;
const hugeNumber = BigInt(9007199254740991); // Alternative syntax
console.log(bigNumber);