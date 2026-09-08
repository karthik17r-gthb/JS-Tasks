//* Variables//

// Create variables using var, let, and const.


// Print all values.
// Change the var value.
// Change the let value.
// Try changing the const value.
// Try redeclaring each variable and observe what happens.


// Print all values


var studentName = "karthik";
let studentAge = 27;
const collegeName = "Vemu";
// console.log("Task2");

console.log("student Name:", studentName);
console.log("student Age:", studentAge);
console.log("college Name:", collegeName);

//change the var value//

var studentName1 = "Vihaan";
console.log("student Name:", studentName1);

//change the let value//

let studentAge1 = 25;
console.log("student Age:", studentAge1);

//changing the const value//

const collegeName1 = "NIVRS";
console.log("college Name:", collegeName1)
//redeclaring const variable "collegeName" gives an error, so renamed as "collegeName1"

// Try redeclaring each variable and observe what happens.

var studentName = "satish"; // redeclaring var is allowed
console.log("redeclared student Name:", studentName);

let studentAge2 = 30; // redeclaring "studentName" let is not allowed, will throw an error,so used"studentAge2
console.log("redeclared student Age:", studentAge2);

// 2 — Printing Statements

// console.log()
console.log("I am learning Javascript training");

// alert()
alert("frontend training");

// confirm()
confirm("Do you want to continue learning JS");

// prompt()
prompt("what is batch number of your training")

// document.writeln()

document.writeln("what is your batch number of JS training");

// //Task-3: User details

let Name =prompt("Enter Name:");
let age = prompt("Enter age:");
let city = prompt("Enter your city:");

console.log("Task2");
console.log("Name:", Name);
console.log("age:", age);
console.log("city:", city);

// //Using prompt//
let userName = prompt("Enter user name:");
console.log("Task3");
alert("Welcome karthik" + userName + "!");

let BirthYear = Number(prompt("Enter your year:"));
let currentYear = 2026;
let presentAge = currentYear-BirthYear;
console.log("Task4");
console.log("Birth Year:", BirthYear);
console.log("Age:", presentAge);

// //DATA TYPES
// // creating variables

let num = 100;
let str = "Hello";
let bool = true;
let undef;
let nullVal = null;
let obj = { name: "karthik", age: 27 };
let arr = [1, 2, 3, 4, 5];

console.log("Number:", typeof(num));
console.log("String:", typeof(str));
console.log("Boolean:", typeof(bool));
console.log("Undefined:", typeof(undef));
console.log("Null:", typeof(nullVal));
console.log("Object:", typeof(obj));
console.log("Array:", typeof(arr));

// Task 5- Student Array

let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
    

console.log("Student:", students[0]);
console.log("Student:", students[1]);
console.log("Student:", students[students.length-1]);

let  studentsCount= students.length;
console.log("Total Students:", studentsCount);

//Employee object//
let employee ={
    name: "karthik",
    age: 27,
    role: "Frontend Developer",
    skills: ["HTML", "CSS", "JavaScript"],
    isWorking: true,
    Qualification: ["BSC" , "B.Tech", "Computer Science"]
};

console.log(employee.name);
console.log(employee.age);
console.log(employee.role);
console.log(employee.skills[0]);
console.log(employee.Qualification[2]);
console.log(employee.isWorking);

//Arithmetic operations - calculator

let a= 20;
let b= 5;

console.log(a+b)
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);

//Task 8 Shopping Bill//

let shirt = 999;
let pant= 1499;
let shoes= 1999;
let bag= 799;

let totalBill = shirt + pant + shoes + bag;
console.log("totalBill:", totalBill);

//Task 9 — Increment & Decrement

let x= 10;
let y= x++;
console.log(x);
console.log(y);

let xx = 10;
let yy = ++xx;
console.log(xx);
console.log(yy);


let p = 10;
let q = p--;
console.log(p);
console.log(q);

let pp = 10;
let qq = --pp;
console.log(pp);
console.log(qq);

//Task 10 — Assignment Operators//

let assignmentNum = 10;
assignmentNum += 5; 
console.log(assignmentNum);

assignmentNum -= 3;
console.log(assignmentNum);

assignmentNum *= 2;
console.log(assignmentNum);

assignmentNum /= 4;
console.log(assignmentNum);

assignmentNum %= 3;
console.log(assignmentNum);

assignmentNum **= 2;
console.log(assignmentNum);

//comparision Operators//

console.log(10>5);
console.log(10<5);
console.log(10>=10);
console.log(10<=9);

console.log(5 == "5");
console.log(5 === "5");

console.log(10 != "10");
console.log(10 !== "10");

//Logical Operators//
//Task 12 - AND

console.log(true && true);
console.log(true && false);
console.log(false && false);
console.log (false && true);

//Task 13 - OR

console.log(true || true);
console.log (true || false);
console.log(false || true);
console.log( false || false);

//Task 14 - NOT

console.log(!true);
console.log(!false);

//Task 15 - combination

console.log(5 == "5" && !(5 === 5) || 6 > 7);
console.log(7 === 7 && 10 != "10" || 5 >= 5);
console.log(15 < 10 || 20 >15 && 5 == "5");
console.log(15 < 10 || 20 > 15 && 5 == "5");

//Ternary Operator//
//Task 16 - Voting

let votingAge = 20;
let votingStatus = votingAge >= 18 ? "Eligible to vote" : "Not eligible";
console.log(votingStatus); 

//Task 17 - password

let password = true;
let loginStatus = password ? "Login successful" : "Wrong password";
console.log(loginStatus); 

//Concatenation & Template String
// Task 18 — User Introduction

let name = "Naveen";
let userAge = 25;
let introductionCity = "Trichy";

// Way 1: Using + operator
console.log("My name is " + name + ". I am " + userAge + " years old. I live in " + introductionCity + ".");

// Way 2: Using template literals ${}
console.log(`My name is ${name}. I am ${userAge} years old. I live in ${introductionCity}.`);

// Type Casting Tasks
// Task 19 — String Conversion

let val1 = String(100);
let val2 = String(true);
let val3 = String(undefined);
let val4 = String(null);
let val5 = String([1, 2]);

console.log(val1, typeof val1); 
console.log(val2, typeof val2); 
console.log(val3, typeof val3); 
console.log(val4, typeof val4); 
console.log(val5, typeof val5); 

//Task 20 — Number Conversion

console.log(Number());          
console.log(Number(""));        
console.log(Number("123"));     
console.log(Number("a1"));      
console.log(Number(true));      
console.log(Number(false));     
console.log(Number(undefined));
console.log(Number(null)); 

//Task 21 — Boolean Conversion

console.log(Boolean());          
console.log(Boolean(""));         
console.log(Boolean("hello"));  
console.log(Boolean(123));      
console.log(Boolean(true));     
console.log(Boolean(false));    
console.log(Boolean(undefined)); 
console.log(Boolean(null));      
console.log(Boolean([]));        
console.log(Boolean({}));   

// Flow Control Tasks
// Task 22 — Voting Eligibility

let checkAge = Number(prompt("Enter your age:"));

if (checkAge >= 18) {
    console.log("You can vote");
} else {
    console.log("You can't vote");
}

//Task 23 — Positive or Negative

let signedNum = Number(prompt("Enter a number:"));

if (signedNum > 0) {
    console.log("Positive");
} else if (signedNum < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

//Task 24 — Grade System

let marks = Number(prompt("Enter your marks:"));

if (marks >= 90 && marks <= 100) {
    console.log("A Grade");
} else if (marks >= 80 && marks < 90) {
    console.log("B Grade");
} else if (marks >= 70 && marks < 80) {
    console.log("C Grade");
} else if (marks >= 60 && marks < 70) {
    console.log("D Grade");
} else if (marks < 60) {
    console.log("Fail");
} else {
    console.log("Invalid marks entered");
}

// Nested If Task
// Task 25 — Job Eligibility

let applicantAge = Number(prompt("Enter your age:"));
let height = Number(prompt("Enter your height in cm:"));
let weight = Number(prompt("Enter your weight in kg:"));

if (applicantAge >= 18) {
    if (height >= 160) {
        if (weight >= 60) {
            console.log("Congratulations! You are selected");
        } else {
            console.log("Rejected: Weight must be 60kg or above.");
        }
    } else {
        console.log("Rejected: Height must be 160cm or above.");
    }
} else {
    console.log("Rejected: Age must be 18 or older.");
}

//Switch Tasks
// Task 26 — Traffic Light

let lightColor = prompt("Enter traffic light color (red/yellow/green):").toLowerCase();

switch (lightColor) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid color");
}

//Task 27 — Day

let day = 1;

switch (day) {
    case 1: console.log("Monday"); break;
    case 2: console.log("Tuesday"); break;
    case 3: console.log("Wednesday"); break;
    case 4: console.log("Thursday"); break;
    case 5: console.log("Friday"); break;
    case 6: console.log("Saturday"); break;
    case 7: console.log("Sunday"); break;
    default: console.log("Invalid day");
}

//🏆 FINAL MINI PROJECT//
//Task 28 — Student Result System//

// Step 1 — Get user details
let studentName = prompt("Enter Name:");
let resultStudentAge = Number(prompt("Enter Age:"));
let studentCity = prompt("Enter City:");

// Step 2 — Get marks
let tamil = Number(prompt("Enter Tamil Marks:"));
let english = Number(prompt("Enter English Marks:"));
let maths = Number(prompt("Enter Maths Marks:"));

// Step 3 — Calculate
let total = tamil + english + maths;
let average = total / 3;

// Step 4 — Check result (Grade)
let grade;
if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}


// Step 5 — Check voting
let votingEligibility = studentAge >= 18 ? "Eligible" : "Not Eligible";

// Step 6 — Display 

console.log(`
Name: ${studentName}
Age: ${studentAge}
City: ${studentCity}
Total: ${total}
Average: ${average.toFixed(2)}
Grade: ${grade}
Voting: ${votingEligibility}
`);






