var userName = "Subrata Biswas";
//userName = 24; It's not supported because userName is already initialize by string type.So only string type data can be assign inot userName.It supports on js.
console.log(userName);
function addNumber(num1, num2) {
    // In TS, this will always be a mathematical addition
    console.log(num1 + num2);
}
addNumber(20, 30);
/* Error Prevention:
  In JavaScript, addNumber(20, "30") would result in "2030" (string concatenation).
  TypeScript flags this as an error during development, preventing unexpected math results.
*/
// addNumber(20,"30"); 
