// For Loop Tasks

console.log("1 to 10");
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

console.log("10 to 1");
for (let i = 10; i >= 1; i--) {
    console.log(i);
}

console.log("1 to 20");
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

console.log("1 to 20");
for (let i = 1; i <= 20; i += 2) {
    console.log(i);
}

console.log("Multiplication Table");
let num = 5; 
for (let i = 1; i <= 10; i++) {
    console.log(`${num} x ${i} = ${num * i}`);
}


// While Loop Tasks

console.log("Countdown from 10 to 1");
let countdown = 10;
while (countdown >= 1) {
    console.log(countdown);
    countdown--;
}

console.log("Sum of Numbers");
let sum = 0;
let count = 1;
while (count <= 10) {
    sum += count;
    count++;
}
console.log(sum);


// Do While Tasks

console.log("Print Numbers (1 to 5)");
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

console.log("Do While Understanding");
let a = 10;
do {
    console.log(a);
    a++;
} while (a <= 5);

/* 
EXPLANATION FOR TASK 9:
The output is: 10
Ans : 'do...while' loop executes the code block inside the 'do' 
Therefore, even though 'a' (10) is not less than or equal to 5, the code 
runs exactly once, logs 10, increments 'a' to 11, and then exits the loop.
*/


//  For...of Loops

console.log("String Characters");
let name = "javascript";
for (let char of name) {
    console.log(char);
}

console.log("Array Values");
let fruits = ["apple", "orange", "banana", "mango", "grapes"];
for (let fruit of fruits) {
    console.log(fruit);
}

console.log("Student Names");
let students = ["Arun", "Priya", "Rahul", "Suresh", "Divya"];
for (let student of students) {
    console.log(`Student: ${student}`);
}


//  For...in Loops

console.log(" Employee Object");
let employee = {
    name: "Arun",
    age: 25,
    role: "Developer",
    city: "Chennai"
};
for (let key in employee) {
    console.log(`${key} ${employee[key]}`);
}

console.log("Product Object");
let product = {
    productName: "Wireless Mouse",
    price: 899,
    brand: "Logitech",
    category: "Electronics",
    stock: 45
};
for (let key in product) {
    console.log(`${key}: ${product[key]}`);
}



//  Functions


console.log("Simple Function");
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();
welcome();
welcome();

console.log(" Function With Parameter  ");
function greet(name) {
    console.log(`Hello ${name}`);
}
greet("Naveen");
greet("Arun");
greet("Priya");

console.log("Function with Return (Addition)  ");
function addNumbers(num1, num2) {
    return num1 + num2;
}
let result = addNumbers(5, 7);
console.log(`Result of 5 + 7 is: ${result}`);

//  Functions & Return Values

console.log(" Addition Function  ");
function add(a, b) {
    return a + b;
}
let additionResult = add(10, 20);
console.log(additionResult); // Expected: 30

console.log(" 19: Salary  ");
function salary(amount) {
    return amount;
}
let currentSalary = salary(45000);
console.log(currentSalary);

console.log("Bonus Calculator  ");
function bonus(salary, bonusAmount) {
    return salary + bonusAmount;
}
let totalCompensation = bonus(50000, 5000);
console.log(`Total = ${totalCompensation}`); // Expected: 55000


// Default Parameters

console.log("Default Parameter");
function employee1(name, role = "Developer") {
    console.log(`Name: ${name}, Role: ${role}`);
}
employee1("Arun");             
employee1("Priya", "Designer");


//  Function Types

console.log("Named Function");
function square(number) {
    return number * number;
}
console.log(square(2));
console.log(square(4));
console.log(square(5));
console.log(square(9));
console.log(square(12));

console.log(" Anonymous Function");
let calculate = function(a, b) {
    return a + b;
};
console.log(calculate(15, 25));

console.log(" Arrow Function ");
let multiply = (a, b) => {
    return a * b;
};
console.log(multiply(6, 7));


//  Scope

console.log("Scope Analysis");
/*
PREDICTION & BEHAVIOUR ANALYSIS:
1. Inside the 'if' block: 
   - All three console.logs will print perfectly: 10, 20, 30.
2. Outside the 'if' block (but inside the function):
   - console.log(a) prints 10. This is because 'var' is FUNCTION-scoped, meaning it ignores block bounds.
   - console.log(b) will throw a ReferenceError! 'let' is BLOCK-scoped and does not exist here.
   - console.log(c) will throw a ReferenceError! 'const' is BLOCK-scoped and does not exist here.
*/
function test() {
    if (true) {
        var a = 10;
        let b = 20;
        const c = 30;
        console.log("Inside block:", a, b, c);
    }
    console.log("Outside block (var):", a); 
    // console.log(b);  b is not defined
    // console.log(c);  c is not defined
}
test();


//  Hoisting

console.log("Hoisting Analysis");
/*
Task 26 Output: undefined
Why? Variables declared with 'var' are hoisted and initialized with 'undefined'.

Task 27 Output: ReferenceError: Cannot access 'b' before initialization
Why? 'let' variables are hoisted but placed in the Temporal Dead Zone (TDZ). They cannot be accessed before the declaration line.

Task 28 Output: ReferenceError: Cannot access 'c' before initialization
Why? 'const' variables follow the same strict TDZ rules as 'let'.

THE CRITICAL DIFFERENCE:
- 'var' is hoisted and initialized to 'undefined', letting you use it early without crashing (though it holds no value).
- 'let' and 'const' are hoisted but strictly uninitialized. Accessing them early triggers immediate execution crashes to keep your code safer.
*/


// IIFE (Immediately Invoking Function Expression)

console.log("IIFEs");
// Simple IIFE
(function() {
    console.log("Welcome to JavaScript");
})();

// IIFE with parameters
(function(product, discount) {
    console.log(`The product "${product}" has a discount of ${discount}%.`);
})("Laptop", 15);



// Callback / Higher-Order Function


console.log("Callbacks");
function welcome() {
    console.log("Welcome");
}

function execute(callback) {
    callback();
}

execute(welcome);
/*
CONCEPT ROLES:
- `welcome` is the CALLBACK function because it is passed down into another function as an argument.
- `execute` is the HIGHER-ORDER function because it accepts a function as an input parameter.
*/



//  Generator Function


console.log(" Cashback Generator");
function* cashback() {
    yield "10% cashback";
    yield "20% cashback";
    yield "30% cashback";
    yield "Better luck next time";
}

let cashbackGen = cashback();
for (let value of cashbackGen) {
    console.log(value);
}



// FINAL MINI PROJECT


console.log("🏆 TASK 32 — EMPLOYEE MANAGEMENT CONSOLE");


// 1. Employee data Array
let employees = [
    { name: "Arun", age: 25, department: "IT", role: "Developer", salary: 40000 },
    { name: "Priya", age: 24, department: "HR", role: "HR Executive", salary: 35000 },
    { name: "Rahul", age: 30, department: "Sales", role: "Manager", salary: 60000 },
    { name: "Divya", age: 28, department: "IT", role: "QA Engineer", salary: 38000 }
];

// 3. Function to display employee info (accepts parameters)
function displayEmployeeInfo(emp) {
    console.log(` Info Profile for ${emp.name}  `);
    // 2. Using for...in to iterate over object keys and values
    for (let key in emp) {
        console.log(`${key.toUpperCase()}: ${emp[key]}`);
    }
}

// 5. Function that returns an employee's salary
function getSalary(emp) {
    return emp.salary;
}

// 7. Arrow function for a simple calculation (e.g., Annual Salary calculation)
let calculateAnnualSalary = (monthlySalary) => monthlySalary * 12;

// 8. Generator for employee benefits
function* benefitGenerator() {
    yield "Medical Insurance";
    yield "Transport Allowance";
    yield "Food Allowance";
    yield "Annual Performance Bonus";
}

// Main execution process using for...of to process every employee
for (let emp of employees) {
    // Requirements 3 & 4: Display info via function
    displayEmployeeInfo(emp);
    
    // Requirement 5: Fetch salary via return statement
    let currentSalary = getSalary(emp);
    
    // Requirement 6: Conditional Check (Salary >= 40000)
    if (currentSalary >= 40000) {
        console.log("Status: Tier-1 Salary Bracket");
    } else {
        console.log("Status: Standard Salary Bracket");
    }
    
    // Requirement 7: Arrow Function Execution
    console.log(`Estimated Annual Earnings: ₹${calculateAnnualSalary(currentSalary)}`);
    
    // Requirement 8: Allocating Generator Benefits
    console.log("Assigned Corporate Benefits:");
    let benefits = benefitGenerator();
    for (let benefit of benefits) {
        console.log(`  - ${benefit}`);
    }
    console.log("\n"); // spacing separator
}
