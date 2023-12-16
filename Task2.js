// 1. Define 2 functions
// 1st function named as checkEven which will check if the num passed is even or not.
// 2nd function named as filterEvens which will take an array of numbers and the checkEven function as arguments.
// This filterEvens function will filter out  only even numbers using the checkEven function and generate a new array of the even numbers.

//COMPLETE YOUR CODE HERE 

function checkEven(num) {
  return num % 2 === 0;
}

function filterEvens(numbers, checkEvenFunction) {
  const evenNumbers = numbers.filter(checkEvenFunction);
  return evenNumbers;
}

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var evenNumbers = filterEvens(num, checkEven);

console.log("Original numbers:", num);
console.log("Even numbers:", evenNumbers);


//2. Write an IIFE that calculates the factorial of a given number and immediately logs the result to the console.

//COMPLETE YOUR CODE HERE 

(function() {
  function factorial(num) {
    if (num === 0 || num === 1) {
      return 1;
    } else {
      return num * factorial(num - 1);
    }
  }

  var inputNumber = 15;
  var result = factorial(inputNumber);
  console.log(`Factorial of ${inputNumber}:`, result);
})();


//3. Implement a function calculate that takes three arguments: a, b, and an operation function. 
//The operation function should accept two parameters and perform a specific mathematical operation like addition, subtraction, multiplication and division. 
//Use call(), apply(), or bind() to apply the operation function to the arguments a and b.

//COMPLETE YOUR CODE HERE 

function calculate(a, b, operation) { 
    if (typeof operation === 'function') {
      var result = operation.call(null, a, b);
      console.log(`Result: ${result}`);
    } else {
      console.log('Invalid operation function.');
    }
}

function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return x/y;
}

calculate(4, 5, add);
calculate(30, 59, subtract);
calculate(30, 59, multiply);
calculate(204, 40, divide);

//4. Given an array of person objects, define a function to find oldest person object.

persons = [{"name" : "Harry", "age" : 12}, {"name" : "Ron", "age" : 11}, {"name" : "Hermione", "age" : 13}]
//COMPLETE YOUR CODE HERE 

(function() {
  var oldestPerson = persons.reduce(function(maxPerson, currentPerson) {
    return (maxPerson.age > currentPerson.age ? maxPerson : currentPerson);
  }
  console.log("Oldest person:", oldestPerson);
})();


//5.  Create a function that calculates the sum of an array using IIFE function.

//COMPLETE YOUR CODE HERE 