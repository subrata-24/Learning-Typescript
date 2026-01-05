/**
    A Tuple is a fixed-length array where every index has a specific  assigned type.Think of it as a "Strict Array." While standard    arrays are for lists of unknown length, Tuples are for specific   structures like [ID, Name].
 */
// The order MUST match the definition.
let user;
user = [101, "Subrata", true];
// user = ["Subrata", 101, true]; // Error: Type 'string' is not assignable to type 'number' (Wrong Order)
// user = [101, "Subrata"];       // Error: Source has 2 elements but target requires 3 (Wrong Length)
/**
    TypeScript-e sudhu 'let variable: type' likhle memory allocation hoy na.push() ba kono method use korar age variable-ke '=' diye initialize korte hoy.Tuple/array etc.-ke shudhu 'let' diye declare korle seta empty tuple `[]` bujhay na, borong seta 'nothing' bujhay.
 */
/* Error
    let customer: [number, string];
    customer.push(24, "Subrata");
*/
// The "Push" Confusion (The Leak)
/**
  TypeScript allows .push() on Tuples because it sees them as Arrays.
  However, this is a "Type-System loophole." Even if you push a value, TypeScript will NOT let you access it via index because it still  respects the original length of 3.
 */
let employee = [1, "Sabuj"];
employee.push("Manager"); // JS adds this to memory, BUT...
// console.log(employee[2]);
// Error: Tuple type of length '2' has no element at index '2'.
// REASON: TS protects the "contract." If you said length 2, it stays length 2 in the eyes of TS.
console.log(employee); //shows the whole data including "Manager" but can not access it
// The Pro Solution: Readonly Tuples
// This is how you stop the confusion. Use 'readonly' to disable .push() and .pop() entirely.
const point = [10, 20];
const success = [200, "Success"];
// 5. Destructuring Tuples
// This is the most common and useful way to use Tuples.
const [code, msg] = success;
console.log(code); // 200 (Type is number)
console.log(msg); // "Success" (Type is string)
export {};
/**
 - Use Tuples only when the size and order of data are 100% predictable.
 - Pushing to a Tuple is allowed by the compiler but blocked by the type-checker when you try to read it. It is a "bad practice" to push to tuples.
 - ALWAYS use 'readonly' if you want a guaranteed fixed-length structure.
 - If you need a list that grows and shrinks, use an Array `(string | number)[]` instead.
 */ 
//# sourceMappingURL=Tupple_Type.js.map