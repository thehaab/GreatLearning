const prompt = require ("prompt-sync")({sigint: true})

// 1. Define and invoke an anonymous function which takes a number and returns its square.
// If input is 2, output should be 4.

//COMPLETE YOUR CODE HERE 

/* let square = num => num * num; */

const square = function(num) {
   return num * num;
}

console.log(square(2));

// 2. Define an IIFE function which takes a personName as input and displays a greeting message containing the personName.
// If input is "Harry", output should be "Hello Harry, Welcome to Great Learning!"

//COMPLETE YOUR CODE HERE 

(() => {
    var personName = prompt("What is your name?");
    console.log(`Hello ${personName}, Welcome to Great Learning!`)
})();

// 3. Define a global array variable containing 3 numbers. 
// Define a function which increments the value of each of the elements of this array by 2. 
// Display the array after you have invoked this function.

//COMPLETE YOUR CODE HERE 

let arrayOfNumbers = [1, 3, 5];
let newArray = arrayOfNumbers.map(number => number + 2);
console.log(newArray);



// 4. Create a "course" object having following information - 
// courseName as "Computer Science", durationInMonths as 24, level as "Beginner". 
// Display object information.
// Change the value of level as "Intermediate". 
// Display object information again.

//COMPLETE YOUR CODE HERE 
var course = {
    courseName : 'Computer Science',
    durationInMonths : 24,
    level : 'Beginner',
}
console.log(course);
course.level = 'Intermediate';
console.log(course);

// 5. Given an array "students" of JSON objects write a code to iterate through each of these codes and extract first name and last name of each students.

var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];

//COMPLETE YOUR CODE HERE 

var fisrtNameLastName = students.map(student => `${student.firstName} ${student.lastName}`);
console.log(fisrtNameLastName);

// 6. Given a function doubleNumber which takes a number as an argument and returns its double value.
// Write a function which takes 2 arguments- 1st an array of numbers and 2nd the doubleNumber function as a callback function
// This function should iterate through each of the array number and use the doubleNumber function to double it.
// In the end it should display the updated array

function doubleNumber(num) {
    return num * 2;
}

//COMPLETE YOUR CODE HERE 

var someNumbers = [1351,65,351,351,31,531]
var doubleNow = someNumbers.map(doubleNumber);
console.log(doubleNow);

// 7. Implement a function called `multiplyBy` that multiplies a number by a specific factor using an IIFE (Immediately Invoked Function Expression).

//COMPLETE YOUR CODE HERE 

var multiplyBy = (function () {
    var factor = 3;
    return function (number) {
        return number * factor;
    };
})();

var result = multiplyBy(11);
console.log(result);



//8. Using the `call` method, write a function that finds the maximum number in an array.

//COMPLETE YOUR CODE HERE 



function maxNum() {
    const numbersArray = Array.from(arguments);
    const maxNumber = Math.max.apply(null, numbersArray);
    console.log(`The maximum number is: ${maxNumber}`);
}

maxNum.call(null, ...someNumbers);


//9. Declare an object named "car" with an empty object as its initial value. 
// Add the properties "make" and "model" with values "Toyota" and "Camry" respectively.

//COMPLETE YOUR CODE HERE 

var car = {

}

car.make = "Toyota";
car.model = "Camry";
console.log(car);

//10. Given an array "students" of JSON objects define a function displayByKey which takes this array object 
// and a keyName as string and displays the value of the key for each of the JSON objects.
var students = [
    { firstName: "Harry", lastName: "Potter", house: "Slytherin" },
    { firstName: "Ron", lastName: "Weasley", house: "Gryffindor" },
    { firstName: "Hermione", lastName: "Granger", house: "Gryffindor" }
];
//COMPLETE YOUR CODE HERE 

function displayByKey(students, keyName) {
    students.forEach(student => {
        if (keyName in student) {
            console.log(`${keyName}: ${student[keyName]}`);
        } else {
            console.log(`${keyName} not found for this student`);
        }
    });
}

displayByKey(students, 'firstName');
