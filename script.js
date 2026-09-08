// 1. Create variables

var studentName = "Rajesh";
let initialStudentAge = 23;
const collegeName = "Vemu Engineering College";

// 2. Print all three values

console.log(studentName);
console.log(initialStudentAge);
console.log(collegeName);

// 3. Change var value
studentName = "Rajesh"; 

// 4. Change let value
initialStudentAge = 23; 

// 5. Try changing const value (This will throw a TypeError)
// collegeName = "Vijayam University"; 
// Error: Assignment to constant variable.

// 6. Try redeclaring var variable (Allowed)
var studentName = "Arun"; 

// 7. Try redeclaring let variable (This will throw a SyntaxError)
// let studentAge = 25; 
// Error: Identifier 'studentAge' has already been declared

// Task 2 — User Information

let name = prompt("Enter your Name:");
let age = prompt("Enter your Age:");
let city = prompt("Enter your City:");

console.log("Name: " + name);
console.log("Age: " + age);
console.log("City: " + city);

// Task 3 — Welcome Message

let userName = prompt("Enter your name:");
alert("Welcome " + userName + "!");

// Task 4 — Age Calculator

let birthYear = prompt("Enter your birth year:");
let currentYear = 2026; 
let calculatedAge = currentYear - birthYear;

console.log("Age: " + calculatedAge);

// Data Type TasksTask 5 — Identify Data Types

let v1 = "Hello";
let v2 = 100;
let v3 = 25.5;
let v4 = true;
let v5 = false;
let v6 = undefined;
let v7 = null;

console.log(typeof v1); 
console.log(typeof v2); 
console.log(typeof v3); 
console.log(typeof v4); "
console.log(typeof v5); "
console.log(typeof v6); ed"
console.log(typeof v7); 

// Task 6 — Student Data

let student = {
    name: "Naveen",
    age: 22,
    city: "Trichy",
    qualification: "B.E.",
    isStudent: true
};

console.log(student);                 
console.log(student.name);            
console.log(student.age);             
console.log(student.qualification);   
console.log(student.isStudent);  

// Task 7 — Fruit Array

let fruits = ["Apple", "Mango", "Orange", "Banana", "Grapes", "Papaya"];

console.log(fruits[0]);                   
console.log(fruits[1]);                  
console.log(fruits[fruits.length - 1]);   
console.log(fruits.length); 

// Arithmetic Operator
// Task 8 — Basic Calculator

let a = 20;
let b = 5;

console.log("Addition: " + (a + b));          
console.log("Subtraction: " + (a - b));       
console.log("Multiplication: " + (a * b));    
console.log("Division: " + (a / b));          
console.log("Modulus: " + (a % b));           
console.log("Exponentiation: " + (a ** b));   

// Task 9 — Shopping Bill

let shirt = 999;
let pant = 1499;
let shoes = 1999;

let total = shirt + pant + shoes;
console.log("Total = " + total); // 4497

// Task 10 — Simple Marks Calculation

let tamil = 80;
let english = 75;
let maths = 90;

let totalMarks = tamil + english + maths;
let averageMarks = totalMarks / 3;

console.log("Total marks: " + totalMarks);    // 245
console.log("Average marks: " + averageMarks); // 81.666...

// Increment & Decrement 
// Task 11 — Post-Increment / Decrement Demonstration

let count = 10;

// Post-Increment: Uses the current value first, then increments
console.log(count++); 
console.log(count);   

// Post-Decrement: Uses the current value first, then decrements
console.log(count--); 
console.log(count);   

// Pre-increment:

let c = 10;
let d = ++c; 

console.log(a); 
console.log(b); 

// Pre Decrement

let x = 20;
let y = --x; 

console.log(x); 
console.log(y); 

// Challenge TasksTask 15 —
//  Find the Final Values

let challengeA = 5;
let challengeB = challengeA++; 
let challengeC = ++challengeA; 
let challengeD = challengeB--; 

console.log(challengeA); 
console.log(challengeB); 
console.log(challengeC); 
console.log(challengeD); 

//Task 16 — Assignment Operators

let num;

num = 10; num += 5;  console.log(num); 
num = 10; num -= 5;  console.log(num); 
num = 10; num *= 5;  console.log(num); 
num = 10; num /= 5;  console.log(num); 
num = 10; num %= 5;  console.log(num); 
num = 10; num **= 5; console.log(num); 

// Task 17 — Mini Student Profile

// 1. Variables
let studentName2 = "Vinod";
let studentAge = 26;
let studentCity = "Chennai";
let studentCollege = "Tirumalai Engineering College";

// 2. Array
let favSubjects = ["Tamil", "English", "Maths", "Science", "History"];

// 3. Object
let studentProfile = {
    name: studentName,
    age: studentAge,
    city: studentCity,
    college: studentCollege,
    subjects: favSubjects,
    isStudent: true
};

// 4. Print Outputs
console.log("Student name: " + studentProfile.name);
console.log("Student age: " + studentProfile.age);
console.log("City: " + studentProfile.city);
console.log("First subject: " + studentProfile.subjects[0]);
console.log("Last subject: " + studentProfile.subjects[studentProfile.subjects.length - 1]);
console.log("Total subjects: " + studentProfile.subjects.length);
console.log(studentProfile); // Complete object

// Final Challenge — User + Calculator


let num1 = Number(prompt("Enter the first number:"));
let num2 = Number(prompt("Enter the second number:"));

// Perform calculations and display results
console.log("Addition: " + (num1 + num2));
console.log("Subtraction: " + (num1 - num2));
console.log("Multiplication: " + (num1 * num2));
console.log("Division: " + (num1 / num2));
console.log("Modulus: " + (num1 % num2));
console.log("Power: " + (num1 ** num2));
