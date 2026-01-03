/**
    TypeScript Enums (Numeric, String, and Heterogeneous)
    Enums (Enumerations) allow a developer to define a set of named constants.They make code more readable by using descriptive names instead of mysterious numbers or strings.
 */

// 1. Numeric Enums & Auto-Incrementing
enum CardinalDirections {
    North,      // Starts at 0
    East,       // Becomes 1
    South = 8,  // Manually set to 8
    West        // Auto-increments from previous: becomes 9
}

/*
    * CONFUSION CLEARANCE:
    'currentDirection' is typed as the Enum 'CardinalDirections'. 
    While it holds a number, TypeScript treats it as a member of this specific group.We cannot change the Enum definition (CardinalDirections.North = 3) because Enum members are read-only.
*/

let currentDirection = CardinalDirections.North; 
console.log(currentDirection); // Logs 0

// 2. Custom Numeric Values
enum statusCode {
    failed = 404,
    success = 200,
    accepted = 202,
    badRequest = 400
    // Note: Different keys can have the same value (though rare)
}
console.log(statusCode.failed); 

//String Enums
enum CardinalDirection {
    North = 'North',
    East = "East",
    South = "South",
    West = "West"
}
console.log(CardinalDirection.North); 

// 4. Heterogeneous Enums (Mixed Types)
/**
 * RULE: If the first member is not initialized, it starts at 0.
 * However, if a previous member was a STRING, the very next member must be manually initialized.
 */
enum user {
    id1,                     // Default: 0
    name = "Subrata Biswas", // String value
    // id2,                  // ERROR: Enum member must have initializer because previous is string.
    id2 = 34,                // Manually initialized to continue
    id3                      // Auto-increments from 34: becomes 35
}

/**
 - Numeric Enums: Support "Reverse Mapping" (we can get the name from the number).
 - String Enums: Do NOT support reverse mapping but are easier to read in logs.
 - Mixed Enums: Generally discouraged in professional code as they lead to confusion.It is better to stay consistent with one type.
 - Const Enums: Use 'const enum' if you want to improve performance by removing the Enum object entirely during compilation.
 */