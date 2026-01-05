// Function signature:If we do not follow this rule at function declaration then it gets error
// This function does NOT accept any parameters
// and does NOT return any value (return type is void)
let userInfo1: () => void;

userInfo1 = () => {
    console.log("Subrata Biswas age is 26 years old");
};
userInfo1();


// This function accepts two parameters:
// - name: string
// - age: number
// and does NOT return any value (void)
let userInfo2: (name: string, age: number) => void;

userInfo2 = (name: string, age: number) => {
    console.log(`${name} is ${age} years old`);
};
userInfo2("Subrata Biswas", 26);


// This function accepts two parameters:
// - name: string
// - age: number
// and RETURNS a string value
let userInfo3: (name: string, age: number) => string;

userInfo3 = (name: string, age: number) => {
    return `${name} is ${age} years old`;
};
console.log(userInfo3("Subrata Biswas", 26));
