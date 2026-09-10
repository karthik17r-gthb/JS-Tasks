
/*Variables & Data Types (Questions 1-8)

Q1: What is the difference between var, let, and const?

•	var: Function-scoped. It can be re-declared and updated. It gets hoisted and initialized as undefined.
•	let: Block-scoped (bounded by {}). It can be updated but not re-declared within the same block. It is hoisted to the Temporal Dead Zone (TDZ).
•	const: Block-scoped. It cannot be updated or re-declared. It must be initialized immediately at the time of declaration.


Q2: Can you re-declare a variable with var? What about let and const?
•	Yes, you can re-declare variables with var as many times as you want.
•	No, you cannot re-declare variables with let or const within the same scope block; doing so throws a SyntaxError..


Q3: What is the output of this code?
Output: TypeError: Assignment to constant variable.
•	Reason: The code crashes at z = 30; because z is declared as a const and its value cannot be re-assigned. If z were not changed, it would have logged 20 25 15.


Q4: What is the difference between declaring and initializing a variable?
•	Declaring: Reserving a variable name in memory without giving it a value (e.g., let x;).
•	Initializing: Assigning an initial value to that declared variable for the first time (e.g., x = 5;).


Q5: What will be the output?
Output: undefined
•	Reason: When you declare a variable using let or var but do not assign it a value, JavaScript automatically initializes it with a default value of undefined.


Q6: What is hoisting? Give an example.
Hoisting is JavaScript's default behavior of moving declarations to the top of their current scope before execution.
•	Example with var */

console.log(myVar); // Outputs: undefined 
var myVar = 10;


// Q7: What is the difference between null and undefined?undefined: Means a variable has been declared but has not yet been assigned a value. It is a default state.null: An intentional assignment value representing the complete absence of any object value. It is explicitly set by the developer.
// 

// Q8: What will be the output? Output:

"object"
"undefined"
"object"
"object"

// Operators ==========

/* Q9: What is the difference between == and ===?

• (Abstract Equality): Compares only values by performing implicit type conversion (coercion) before evaluating (e.g., 5 == "5" is true).
•	(Strict Equality): Compares both values and data types without converting them (e.g., 5 === "5" is false).


Q10: What is the difference between ++i and i++?

•	++i (Prefix): Increments the value of i by 1 first, and then returns the newly updated value.
•	i++ (Postfix): Returns the current value of i first, and then increments i by 1 in the background.


Q11: What will be the output? */
// Output:

"105" // Addition (+) string concatenation as 'y' is a string
5     // Subtraction (-) forces string "5" to implicitly convert to number 5
50    // Multiplication (*) forces string implicit conversion
2     // Division (/) forces string implicit conversion


// Q12: What are logical operators? Explain with examples.

// Logical operators are used to determine the logic between variables or values:
// •	&& (AND): Returns true only if all conditions are true. (e.g., true && false outputs false).
// •	|| (OR): Returns true if at least one condition is true. (e.g., true || false outputs true).
// •	! (NOT): Reverses the boolean state. (e.g., !true outputs false).


// Q13: What will be the output?
// Output:

true  // (5 > 3 is true) AND (10 > 5 is true)
true  // (5 > 10 is false) OR (10 > 5 is true)
false // NOT (5 > 3 is true) -> turns into false


/*Q14: What is the ternary operator? Give an example.

The ternary operator is a shorthand for an if-else statement. It takes three operands: a condition, an expression to execute if true, and an expression to execute if false.
•	Syntax: condition ? expressionIfTrue : expressionIfFalse;
•	Example: let access = (age >= 18) ? "Allowed" : "Denied";



//  Type Casting 

/*Q15: What is the difference between implicit and explicit type casting?

•	Implicit (Coercion): Done automatically by the JavaScript engine behind the scenes (e.g., 10 - "5" outputs 5).
•	Explicit (Conversion): Done manually by the developer using built-in functions (e.g., Number("123") or String(5))*/


// Q16: What will be the output?
// Output:

123     // String converted to a valid number
NaN     // "hello" cannot be converted into a valid number
1       // true converts to 1
0       // false converts to 0
false   // 0 is a falsy value
true    // Any non-empty string is a truthy value

// Q17: What is NaN? Give an example.

// NaN stands for Not-a-Number. It represents a value that is an invalid numerical result resulting from an erroneous mathematical operation.
// •	Example: let result = "Hello" * 5; // Result is NaN

// ________________________________________
// Conditional Statements 

// Q18: What is the difference between if-else and switch?

// •	if-else: Evaluates complex conditional expressions, ranges (e.g., x > 10 && x < 20), and boolean states.

// •	switch: Evaluates a single expression against multiple fixed, discrete values (cases) for exact matching. It is often cleaner than deeply nested if-else chains.
// Q19: What will be the output?
// Output: "Adult"
// •	Reason: The variable age is 20, which satisfies the conditional clause age >= 18.

// Q20: What is a nested if statement? Give an example.Answer:A nested if statement is an if statement that is placed entirely inside the block of another if statement. This allows you to test multiple conditions sequentially; the inner condition is evaluated only if the outer condition is true.

let hasCard = true;
let hasPin = true;

if (hasCard) {
    if (hasPin) {
        console.log("Transaction Approved");
    }
}


// Q21: Write a program to check if a number is even or odd using ternary operator.

let num = 7;
let checkType = (num % 2 === 0) ? "Even" : "Odd";
console.log(checkType); // Outputs: "Odd"


// Loops

/*Q22: What is the difference between while and do-while?

•	while: Checks the evaluation condition first. If the condition is false initially, the block of code inside never executes.
•	do-while: Executes the code block once first, and then evaluates the condition. It guarantees the loop runs at least once.


Q23: What will be the output? */

Output:
1
2
3
4
5

/* Q24: What is the difference between for-of and for-in?

•	for...of: Iterates over the values of an iterable object like an Array, String, or Set.
•	for...in: Iterates over the enumerable property keys of an Object.


Q25: Write a program to find sum of numbers from 1 to 100.*/

let totalSum = 0;
for (let i = 1; i <= 100; i++) {
    totalSum += i;
}
console.log(totalSum); // Outputs: 5050

// Arrays

// Q26: What is the difference between slice and splice?

// •	slice(): Returns a shallow copy of a portion of an array into a new array object. It does not modify the original array.
// •	splice(): Changes the contents of an array by removing, replacing, or adding elements. It directly modifies the original array.


// Q27: What will be the output?

Output: [ 1, 2, 3 ]

// •	Step-by-step breakdown:
// 1.	let arr = [1, 2, 3]; ➔ [1, 2, 3]
// 2.	arr.push(4); ➔ Adds 4 to end: [1, 2, 3, 4]
// 3.	arr.pop(); ➔ Removes 4 from end: [1, 2, 3]
// 4.	arr.unshift(0); ➔ Adds 0 to start: [0, 1, 2, 3]
// 5.	arr.shift(); ➔ Removes 0 from start: [1, 2, 3]


//  Functions


/* Q28: What is the difference between function declaration and function expression?

•	Function Declaration: Defined with a name statement. They are fully hoisted, meaning you can call them before they are declared in the code file.

function sayHi() { return "Hi"; }

Function Expression: A function is assigned inside a variable. They are not hoisted as executable functions and cannot be called early.

let sayHi = function() { return "Hi"; };


Q29: What is an arrow function?
 Give an example.An arrow function is a shorter, cleaner syntax introduced in ES6 to write functions. They do not have their own this binding context.
 
 Example
 const double = (n) => n * 2;

 Q30: What will be the output? */

Output: "Hello"
// •	Reason: The function greet() executes and returns the string "Hello", which is saved in message and printed.

//  Executable JavaScript File (script.js)



// ==========================================
// Variables & Data Types
// ==========================================

console.log("--- Q3 Code Output ---");
var x = 5;
let y = 10;
const z = 15;
x = 20;
y = 25;
// z = 30; Assignment to constant variable. 
// Commenting out the crashing line above to allow the rest of the script to run cleanly.
console.log(x, y, z); // Output: 20 25 15

console.log("\n--- Q5 Code Output ---");
let a;
console.log(a); // Output: undefined

console.log("\n--- Q8 Code Output ---");
console.log(typeof null);      // Output: "object"
console.log(typeof undefined); // Output: "undefined"
console.log(typeof []);        // Output: "object"
console.log(typeof {});        // Output: "object"


// Operators

console.log("\n--- Q11 Code Output ---");
let opX = 10;
let opY = "5";
console.log(opX + opY); // Output: "105"
console.log(opX - opY); // Output: 5
console.log(opX * opY); // Output: 50
console.log(opX / opY); // Output: 2

console.log("Code Output");
console.log(5 > 3 && 10 > 5); // Output: true
console.log(5 > 10 || 10 > 5); // Output: true
console.log(!(5 > 3));         // Output: false

console.log("Ternary Shorthand Example");
let userAge = 21;
let accessGranted = (userAge >= 18) ? "Allowed Access" : "Denied Access";
console.log(accessGranted);


// Type Casting

console.log("\n--- Q16 Code Output ---");
console.log(Number("123"));   // Output: 123
console.log(Number("hello")); // Output: NaN
console.log(Number(true));    // Output: 1
console.log(Number(false));   // Output: 0
console.log(Boolean(0));      // Output: false
console.log(Boolean("hello"));// Output: true


// Conditional Statements

console.log("\n--- Q19 Code Output ---");
let age = 20;
if(age >= 18) {
    console.log("Adult");
} else {
    console.log("Minor");
}

console.log("\n--- Q21: Even/Odd via Ternary Operator ---");
let checkNumber = 7;
let evenOrOdd = (checkNumber % 2 === 0) ? "Even" : "Odd";
console.log(`The number ${checkNumber} is ${evenOrOdd}.`);


//  Loops

console.log("\n--- Q23 Code Output ---");
for(let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("\n--- Q25: Sum from 1 to 100 ---");
let totalSumvalue = 0;
for(let i = 1; i <= 100; i++) {
    totalSumvalue += i;
}
console.log(`Sum of 1 to 100 is: ${totalSum}`); // Output: 5050


// Arrays

console.log("\n--- Q27 Code Output ---");
let arr = [1, 2, 3];
arr.push(4);
arr.pop();
arr.unshift(0);
arr.shift();
console.log(arr); // Output: [1, 2, 3]


// Functions

console.log("\n--- Q29: Arrow Function Example ---");
const multiplyNumbers = (num1, num2) => num1 * num2;
console.log(`Multiplication Result: ${multiplyNumbers(4, 5)}`);

console.log("\n--- Q30 Code Output ---");
function greet() {
    return "Hello";
}
let message = greet();
console.log(message); // Output: "Hello"

