//1. Create a variable `isHappy` and assign it a boolean value based on the value of the given String variable `action`, whether it is `Smile` or not.

var action = "Smile"
//COMPLETE THE CODE HERE
var isHappy = action == "Smile" ? true : false;
console.log(`Observation: ${action} \n Interpretation: isHappy = ${isHappy}`);

// 2. Create a variable `favoriteSubjects` and assign it an array of strings representing your favorite subjects.

//COMPLETE THE CODE HERE
var favoriteSubjects = ["computers","art","camping","gardening","travel"];
console.log("Travis' favorite subjucts are:");
favoriteSubjects.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});

// 3. Write a program to compare two numbers, `num1` and `num2`, and check if `num1` is greater than or equal to `num2`.

var num1 = 10;
var num2 = 5;

//COMPLETE THE CODE HERE
function compareNumbers(num1, num2) {
  let result = "";

  if (num1 > num2) {
    result = `${num1} is greater than ${num2}.`;
  } else if (num2 > num1) {
    result = `${num2} is greater than ${num1}.`;
  } else {
    result = `${num1} and ${num2} are equal.`;
  }

  return result;
}

const comparisonResult = compareNumbers(num1, num2);

console.log(comparisonResult);

// 4. Write a program to calculate the square of a given number, `num`.

var num = 4;
//COMPLETE THE CODE HERE

function square(num) {
  var result = num **2;
  return result
}
var runSquare = square(num);
console.log(`${num} squared is ${runSquare}.`);

// 5. Write a program to check if a given number, `num`, is even or odd.

var num = 7;
//COMPLETE THE CODE HERE

function oddOrEven(num) {
  var result ="";
  if (num % 2 === 0) {
    result = `${num} is even.`
  } else {
    result = `${num} is odd.`
  }
  return result;
}

var isOddOrEven = oddOrEven(num);
console.log(isOddOrEven);

// 6. Write a program to check if a given year, `year`, is a leap year and divisible by 400 or divisible by 4 but not divisible by 100.

var year = 2024;
//COMPLETE THE CODE HERE

function isLeapYear(year) {
  if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
    return `${year} is a leap year`;
  } else {
    return `${year} is not a leap year`;
  }
}

var leapYearResult = isLeapYear(year);
console.log(leapYearResult);

// 7. Write a program that checks if a given character, `char`, is a vowel or a consonant.

var char = "a";
//COMPLETE THE CODE HERE

var vowels = ["a", "e", "i", "o", "u"];

function vowelOrCons(char) {
  if (vowels.includes(char)) {
    console.log(`${char} is a vowel.`)
  } else if (char === "y") {
    console.log("Generally, 'y' is considered a vowel when it is the only vowel in a syllable or when it appears at the end of a word and follows a consonant.")    
  } else {
    console.log(`${char} is a consonant.`)
  }
}

vowelOrCons(char);

// 8. Write a program that determines the largest among three numbers, `num1`, `num2`, and `num3`.

var num1 = 10;
var num2 = 5;
var num3 = 8;
var largest;
//COMPLETE THE CODE HERE

function isLargest(num1, num2, num3) {
  if (num1 > num2 && num1 > num3) {
    console.log(`${num1} is largest number.`)
  } else if (num2 > num1 && num2 > num3) {
    console.log(`${num2} is largest number.`)
  } else {
    console.log(`${num3} is largest number.`)
  }
}

isLargest(num1, num2, num3);

// 9. Write a program that determines the sign of a given number, `num` (positive, negative, or zero), using the ternary operator.

var num = -5;
//COMPLETE THE CODE HERE  

function posNegOrZero(num) {
  return (num > 0) ? `${num} is positive`: (num < 0) ? `${num} is negative` : `${num} is zero.`;
}

var signOfNum = posNegOrZero(num);
console.log(signOfNum);

// 10. Write a program that determines the grade based on a given percentage, `percentage`. Use the following grading scale: A (90-100), B (80-89), C (70-79), D (60-69), F (0-59).

var percentage = 85;
//COMPLETE THE CODE HERE

function calculateGrade(percentage) {
  var grade;

  switch (true) {
    case percentage >= 90:
      grade = 'A';
      break;
    case percentage >= 80:
      grade = 'B';
      break;
    case percentage >= 70:
      grade = 'C';
      break;
    case percentage >= 60:
      grade = 'D';
      break;
    default:
      grade = 'F';
  }
  return grade;
}

var studentGrade = calculateGrade(percentage);
console.log(`Percentage: ${percentage}\n Grade: ${studentGrade}`);
