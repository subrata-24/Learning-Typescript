/**
    TypeScript Enums (Numeric, String, and Heterogeneous)
    Enums (Enumerations) allow a developer to define a set of named constants.They make code more readable by using descriptive names instead of mysterious numbers or strings.
 */
// 1. Numeric Enums & Auto-Incrementing
var CardinalDirections;
(function (CardinalDirections) {
    CardinalDirections[CardinalDirections["North"] = 0] = "North";
    CardinalDirections[CardinalDirections["East"] = 1] = "East";
    CardinalDirections[CardinalDirections["South"] = 8] = "South";
    CardinalDirections[CardinalDirections["West"] = 9] = "West"; // Auto-increments from previous: becomes 9
})(CardinalDirections || (CardinalDirections = {}));
/*
    * CONFUSION CLEARANCE:
    'currentDirection' is typed as the Enum 'CardinalDirections'.
    While it holds a number, TypeScript treats it as a member of this specific group.We cannot change the Enum definition (CardinalDirections.North = 3) because Enum members are read-only.
*/
var currentDirection = CardinalDirections.North;
console.log(currentDirection); // Logs 0
// 2. Custom Numeric Values
var statusCode;
(function (statusCode) {
    statusCode[statusCode["failed"] = 404] = "failed";
    statusCode[statusCode["success"] = 200] = "success";
    statusCode[statusCode["accepted"] = 202] = "accepted";
    statusCode[statusCode["badRequest"] = 400] = "badRequest";
    // Note: Different keys can have the same value (though rare)
})(statusCode || (statusCode = {}));
console.log(statusCode.failed);
//String Enums
var CardinalDirection;
(function (CardinalDirection) {
    CardinalDirection["North"] = "North";
    CardinalDirection["East"] = "East";
    CardinalDirection["South"] = "South";
    CardinalDirection["West"] = "West";
})(CardinalDirection || (CardinalDirection = {}));
console.log(CardinalDirection.North);
// 4. Heterogeneous Enums (Mixed Types)
/**
 * RULE: If the first member is not initialized, it starts at 0.
 * However, if a previous member was a STRING, the very next member must be manually initialized.
 */
var user;
(function (user) {
    user[user["id1"] = 0] = "id1";
    user["name"] = "Subrata Biswas";
    // id2,                  // ERROR: Enum member must have initializer because previous is string.
    user[user["id2"] = 34] = "id2";
    user[user["id3"] = 35] = "id3"; // Auto-increments from 34: becomes 35
})(user || (user = {}));
/**
 - Numeric Enums: Support "Reverse Mapping" (we can get the name from the number).
 - String Enums: Do NOT support reverse mapping but are easier to read in logs.
 - Mixed Enums: Generally discouraged in professional code as they lead to confusion.It is better to stay consistent with one type.
 - Const Enums: Use 'const enum' if you want to improve performance by removing the Enum object entirely during compilation.
 */ 
