const { BooleanKeyframeTrack } = require("three");

console.log('hello, world');


(function (myArg) {
  var message = "Hello, class";
  console.log(myArg, message);
})("hello, world");

(function(arguments) {
  console.log(`this is concatenation ${arguments}`)
})(90)


// Global scope
var myname = "Travis";

function globalFunction() {
  console.log('global function')
};

globalFunction(23)

function myFunc2() {
  var localVar1 = "local variable";
  function localFunc1() {
    console.log("local function");
  }
  console.log()
}

var myFavCars = { year : "2000", name: ["ford", "Tesla", "Ferrari"], };

(function() {
  console.log("Hello, world!")
})();

var anon = func1();

function func1(anon) {
 console.log("it worked")
};


var result=0; 
(function (num) {
  result = num * num;
  console.log(result);
}
)(5);

var person = {
  name: "John",
  age: 30,
  city: "New York"
}

console.log({person});

var book = {
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  year: 1925
}

var authorName= book.author;
console.log(authorName)

var employee = {
  name: "",
  age: "",
  city: ""
}

delete employee.city
console.log(employee);

var data = {
  key:123,
}

var value = data.key

/* var str1 = "its"
var str2 = "working"

function concat() {
  bind(str1.str2)
  console.log(concat.bind)
}
concat(); */

/* function concatenateStrings(stringOne, stringTwo) {
  return this + stringOne + stringTwo
}
var greet = "Hello ";
var boundConcatenation = concatenateStrings.bind(greet);
console.log(boundConcatenation("Team ", "World"));


function countProperties(obj) {
  console.log(Object.keys(obj).length);
}

countProperties.apply(null, arguments); */

/* function countProperties(obj) {
  console.log(Object.keys(obj).length);
}

var myObject = { a: 1, b: 2, c: 3 };

countProperties.apply(null, myObject) */;

/* function countProperties(obj) {
  console.log(Object.keys(obj).length);
}

var myObject = { a: 1, b: 2, c: 3 };
countProperties.apply(null, myObject); */

/* function countProperties(obj) {
  console.log(Object.keys(obj).length);
}

var myObject = { a: 1, b: 2, c: 3 };

countProperties.apply(null, [myObject]);
f */
function modifyF(f) {
  return function() {
    console.log('starting')
      let x = f(...arguments)
      console.log('Done')
      return x;
  }
}
const print = modifyF(console.log)
print('Hi!')
console.log(print('Bye!'))