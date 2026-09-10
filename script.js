// Task 1 — Student Result Analyzer

// Function to analyze student marks

function analyzeStudentResult(name, department, marks) {
    
    const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
    const average = totalMarks / marks.length;
    let isPassed = true;
    let grade = "";

    // To check if student failed any individual subject (<50 fail)
    for (let mark of marks) {
        if (mark < 50) {
            isPassed = false;
        }
    }

    if (!isPassed || average < 50) {
        isPassed = false;
        grade = "Fail";
    } else if (average >= 90) {
        grade = "A";
    } else if (average >= 75) {
        grade = "B";
    } else if (average >= 60) {
        grade = "C";
    } else {
        grade = "D";
    }

    // result
   
    console.log("     STUDENT RESULT    ");
    console.log(`Name       : ${name}`);
    console.log(`Department : ${department}`);
    console.log(`Marks      : ${marks.join(", ")}`);
    console.log(`Total Marks: ${totalMarks}`);
    console.log(`Average    : ${average.toFixed(2)}`);
    console.log(`Status     : ${isPassed ? "PASSED" : "FAILED"}`);
    console.log(`Grade      : ${grade}`);
    console.log("====================================\n");
}

// Execution
analyzeStudentResult("Rahul", "Computer Science", [85, 92, 78, 88, 95]);

// Task 2 — Employee Salary Calculator

// Employee Object

const employee = {
    name: "Arun",
    role: "Developer",
    salary: 45000,
    experience: 2
};

// Function to calculate final salary
function calculateSalary(emp) {
    let basicSalary = emp.salary;
    let bonusPercentage = 0;

    // Conditionals based on experience
    if (emp.experience >= 5) {
        bonusPercentage = 0.15; // 15% Bonus
    } else if (emp.experience >= 2) {
        bonusPercentage = 0.10; // 10% Bonus
    }

    let bonusAmount = basicSalary * bonusPercentage;
    let finalSalary = basicSalary + bonusAmount;

    // result
    console.log("     EMPLOYEE SALARY CALCULATOR     ");
    console.log(`Employee Name : ${emp.name}`);
    console.log(`Role          : ${emp.role}`);
    console.log(`Experience    : ${emp.experience} years`);
    console.log(`Basic Salary  : ₹${basicSalary}`);
    console.log(`Bonus Applied : ${bonusPercentage * 100}% (₹${bonusAmount})`);
    console.log(`Final Salary  : ₹${finalSalary}`);
    console.log("====================================\n");
}

// Execution
calculateSalary(employee);


// Task 3 — Product Filter System

let products = [
    { name: "Laptop", price: 55000, category: "electronics" },
    { name: "Mouse", price: 800, category: "electronics" },
    { name: "Shirt", price: 1200, category: "fashion" },
    { name: "Shoes", price: 2500, category: "fashion" },
    { name: "Phone", price: 30000, category: "electronics" }
];

console.log("       PRODUCT FILTER SYSTEM        ");

// 1. Get products above ₹2,000
const expensiveProducts = products.filter(p => p.price > 2000);
console.log("1. Products above ₹2,000:", expensiveProducts);

// 2. Get only electronics
const electronics = products.filter(p => p.category === "electronics");
console.log("\n2. Electronics Only:", electronics);

// 3. Find the first product below ₹1,000
const cheapProduct = products.find(p => p.price < 1000);
console.log("\n3. First product below ₹1,000:", cheapProduct);

// 4. Calculate total price of all products
const totalPrice = products.reduce((total, p) => total + p.price, 0);
console.log(`\n4. Total price of all products: ₹${totalPrice}`);

// 5. Check whether any product costs more than ₹50,000
const hasVeryExpensive = products.some(p => p.price > 50000);
console.log(`\n5. Any product > ₹50,000?: ${hasVeryExpensive}`);

// 6. Check whether every product has a price above ₹500
const allAbove500 = products.every(p => p.price > 500);
console.log(`\n6. Every product > ₹500?: ${allAbove500}`);
console.log("====================================\n");


// Task 4 — Employee Management

// Array of 6 employees
let employees = [
    { id: 101, name: "Karthik", role: "Frontend Developer", salary: 40000 },
    { id: 102, name: "Rekha", role: "Backend Developer", salary: 48000 },
    { id: 103, name: "Soorya", role: "DevOps Engineer", salary: 55000 },
    { id: 104, name: "Kiran", role: "UI/UX Designer", salary: 38000 },
    { id: 105, name: "Kumar", role: "QA Engineer", salary: 42000 },
    { id: 106, name: "Chandru", role: "Project Manager", salary: 70000 }
];

console.log("        EMPLOYEE MANAGEMENT         ");

// 1. Display all employee names
console.log("1. All Employee Names:");
employees.forEach(emp => console.log(` - ${emp.name}`));

// 2. Display employees earning above ₹40,000
const highEarners = employees.filter(emp => emp.salary > 40000);
console.log("\n2. Employees earning above ₹40,000:", highEarners);

// 3. Find employee with ID 103
const emp103 = employees.find(emp => emp.id === 103);
console.log("\n3. Employee with ID 103:", emp103);

// 4.  total salary
const totalSalaryPool = employees.reduce((total, emp) => total + emp.salary, 0);
console.log(`\n4. Total Salary of all employees: ₹${totalSalaryPool}`);

// 5. Find highest-paid employee
const highestPaid = employees.reduce((max, emp) => emp.salary > max.salary ? emp : max, employees[0]);
console.log("\n5. Highest-Paid Employee:", highestPaid);

// 6. Sort employees from highest salary to lowest

const sortedEmployees = [...employees].sort((a, b) => b.salary - a.salary);
console.log("\n6. Employees sorted by Salary (Highest to Lowest):", sortedEmployees);

// 7. New array containing only employee names
const nameOnlyArray = employees.map(emp => emp.name);
console.log("\n7. Array of names only:", nameOnlyArray);
console.log("====================================");


// Task 5 — Shopping Cart

// 1. cart array
let cart = [
    { name: "Laptop", price: 50000, quantity: 1 },
    { name: "Mouse", price: 1000, quantity: 2 },
    { name: "Keyboard", price: 2000, quantity: 1 }
];

// 2. calculateCart function

function calculateCart(cartArray) {
    console.log("--- Item Totals ---");
    cartArray.forEach(item => {
        let itemTotal = item.price * item.quantity;
        console.log(`${item.name}: ₹${itemTotal} (${item.price} x ${item.quantity})`);
    });

    //  total cart value using reduce()
    let totalCartValue = cartArray.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    console.log(`\nInitial Total Cart Value: ₹${totalCartValue}`);

    // Apply 10% discount if total > ₹50,000
    let discount = 0;
    if (totalCartValue > 50000) {
        discount = totalCartValue * 0.10;
        console.log(`10% Discount Applied: -₹${discount}`);
    } else {
        console.log("No discount applied (Total is not above ₹50,000)");
    }

    //  final payable amount
    let finalPayable = totalCartValue - discount;
    console.log(`Final Payable Amount: ₹${finalPayable}`);

    return finalPayable;
}

// Execute the function
calculateCart(cart);

// Task 6 — Student Search System

// 1. Array of students
let students = [
    { name: "Arun", age: 21, mark: 85 },
    { name: "Priya", age: 22, mark: 92 },
    { name: "Karthi", age: 20, mark: 67 },
    { name: "Dinesh", age: 23, mark: 45 }
];

// 2. Display all student names
console.log("All Student Names:");
students.forEach(student => console.log(student.name));

// 3. Display students who scored above 80
console.log("\nStudents scoring above 80:");
let highScorers = students.filter(student => student.mark > 80);
console.log(highScorers);

// 4. Find student named "Priya"
console.log('\nFinding student "Priya":');
let priya = students.find(student => student.name === "Priya");
console.log(priya);

// 5. Calculate average mark
let totalMarks = students.reduce((sum, student) => sum + student.mark, 0);
let averageMark = totalMarks / students.length;
console.log(`\nAverage Mark: ${averageMark}`);

// 6. Check whether anyone failed (assuming passing mark is 50)
let anyoneFailed = students.some(student => student.mark < 50);
console.log(`\nDid anyone fail? (Mark < 50): ${anyoneFailed}`);

// 7. Check whether everyone scored above 40
let everyoneAbove40 = students.every(student => student.mark > 40);
console.log(`Did everyone score above 40?: ${everyoneAbove40}`);

// 8. Sort students by marks (Highest to Lowest) using slice()

let sortedStudents = students.slice().sort((a, b) => b.mark - a.mark);
console.log("\nStudents sorted by marks (Highest to Lowest):");
console.log(sortedStudents);


// Task 7 — Array Transformation Challenge

// Given array
let numbers = [12 , 5, 8, 21, 44, 7, 30, 15];

// 1. Create a new array containing numbers × 2
let doubled = numbers.map(num => num * 2);
console.log("Numbers x 2:", doubled);

// 2. Get only even numbers
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log("Even numbers:", evenNumbers);

// 3. Get numbers greater than 15
let greaterThan15 = numbers.filter(num => num > 15);
console.log("Numbers > 15:", greaterThan15);

// 4. Find the first number greater than 20
let firstGreaterThan20 = numbers.find(num => num > 20);
console.log("First number > 20:", firstGreaterThan20);

// 5. Find total of all numbers
let totalSum = numbers.reduce((sum, num) => sum + num, 0);
console.log("Total of all numbers:", totalSum);

// 6. Check whether any number is greater than 40
let anyGreaterThan40 = numbers.some(num => num > 40);
console.log("Is any number > 40?:", anyGreaterThan40);

// 7. Check whether every number is positive
let everyNumberPositive = numbers.every(num => num > 0);
console.log("Is every number positive?:", everyNumberPositive);

// 8. Sort from highest to lowest
let sortedHighestToLowest = numbers.slice().sort((a, b) => b - a);
console.log("Sorted highest to lowest:", sortedHighestToLowest);


// Task 8 — String Analyzer

// 1. Ask the user to enter a sentence
let sentence = prompt("Enter a sentence:") || "I am using Javascript to learn programming."; 
console.log(`Original Sentence: "${sentence}"\n`);

// 2. Total characters
console.log("Total characters:", sentence.length);

// 3. Uppercase sentence
console.log("Uppercase sentence:", sentence.toUpperCase());

// 4. Lowercase sentence
console.log("Lowercase sentence:", sentence.toLowerCase());

// 5. Whether it contains "JavaScript"
console.log("Contains 'JavaScript'?:", sentence.includes("JavaScript"));

// 6. First character
console.log("First character:", sentence.charAt(0)); // Or sentence[0]

// 7. Last character
console.log("Last character:", sentence.slice(-1));

// 8. Number of words

let wordCount = sentence.trim().split(/\s+/).length;
console.log("Number of words:", wordCount);

// 9. Replace "JavaScript" with "Python"
console.log("Replaced sentence:", sentence.replace("JavaScript", "Python"));

// 10. Convert sentence into an array using split()
let sentenceArray = sentence.split(" ");
console.log("Sentence converted to array:", sentenceArray);



/*Final Mini Project — Employee Dashboard
This would be a good intermediate-level class project.
Create an Employee Dashboard using JavaScript.*/


// --- 1. INITIAL DATA SETUP ---
let employeess = [
    { id: 101, name: "Arun", department: "IT", salary: 45000, experience: 2 },
    { id: 102, name: "Priya", department: "HR", salary: 50000, experience: 4 },
    { id: 103, name: "Karthi", department: "IT", salary: 65000, experience: 6 }
];

// --- 2. FUNCTIONS ---

// 1. Employee List: Display all employees

function displayEmployees(employeeList = employees) {
    console.log(`\n--- Showing ${employeeList.length} Employee(s) ---`);
    if (employeeList.length === 0) {
        console.log("No employees found.");
        return;
    }
    employeeList.forEach(emp => {
        console.log(`ID: ${emp.id} | Name: ${emp.name} | Dept: ${emp.department} | Salary: ₹${emp.salary} | Exp: ${emp.experience} yrs`);
    });
}

// 2. Search: Search employee by name

function searchByName(nameQuery) {
    console.log(`\n🔍 Searching for name: "${nameQuery}"`);
    let results = employees.filter(emp => 
        emp.name.toLowerCase().includes(nameQuery.toLowerCase())
    );
    displayEmployees(results);
}

// 3. Department Filter: Filter employees by department

function filterByDepartment(dept) {
    console.log(`\n📁 Filtering by Department: "${dept}"`);
    let results = employees.filter(emp => 
        emp.department?.toUpperCase() === dept.toUpperCase()
    );
    displayEmployees(results);
}

// 4. Salary Filter: Show employees earning > ₹50,000

function showHighEarners() {
    console.log(`\n💰 Employees earning more than ₹50,000:`);
    let results = employees.filter(emp => emp.salary > 50000);
    displayEmployees(results);
}

// 5. Salary Calculation: Calculate total company salary

function calculateTotalSalary() {
    return employees.reduce((total, emp) => total + emp.salary, 0);
}

// 6. Highest Salary: Find the highest-paid employee object

function getHighestPaidEmployee() {
    return employees.reduce((highest, current) => 
        current.salary > highest.salary ? current : highest
    , employees[0]);
}

// 7. Experience : Find employees with more than 3 years' experience

function showExperiencedEmployees() {
    console.log(`\n⏳ Employees with > 3 years experience:`);
    let results = employees.filter(emp => emp.experience > 3);
    displayEmployees(results);
}

// 8. Sorting: Sort employees by salary 
function sortEmployeesBySalary(direction = "lowToHigh") {
    console.log(`\n🔄 Sorting employees by salary: [${direction}]`);
    let sorted = [...employees]; 
    
    if (direction === "lowToHigh") {
        sorted.sort((a, b) => a.salary - b.salary);
    } else if (direction === "highToLow") {
        sorted.sort((a, b) => b.salary - a.salary);
    }
    displayEmployees(sorted);
}

// 9. Statistics: Display dashboard statistics

function displayDashboardStats() {
    let totalEmployees = employees.length;
    let totalSalary = calculateTotalSalary();
    let highestPaid = getHighestPaidEmployee();
    let averageSalary = Math.round(totalSalary / totalEmployees);

    console.log("\n📊 === DASHBOARD STATISTICS ===");
    console.log(`Total Employees : ${totalEmployees}`);
    console.log(`Total Salary    : ₹${totalSalary}`);
    console.log(`Highest Salary  : ₹${highestPaid.salary} (${highestPaid.name})`);
    console.log(`Average Salary  : ₹${averageSalary}`);
}


// Display full list initially
console.log("--- Initial Dashboard State ---");
displayEmployees();

// Test Search and Filtering features
searchByName("pri");
filterByDepartment("IT");
showHighEarners();
showExperiencedEmployees();

// Test Sorting features
sortEmployeesBySalary("lowToHigh");
sortEmployeesBySalary("highToLow");

// Display Final Summary Statistics
displayDashboardStats();
