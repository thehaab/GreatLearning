// 1. Write a program that determines the type of triangle based on the lengths of its sides (`side1`, `side2`, and `side3`). The types of triangles are equilateral, isosceles, and scalene.

var side1 = 5;
var side2 = 5;
var side3 = 8;
var triangleType;
//COMPLETE THE CODE HERE

function triangleType(side1, side2, side3) {
  if (side1 === side2 && side2 === side3) {
    console.log(`Equilateral triangle`);
  } else if (side1 === side2 || side2 === side3 || side1 === side3) {
    console.log(`Isosceles triangle`);
  } else {
    console.log(`Scalene triangle`);
  }
}

triangleType(side1, side2, side3);


// 2. Write a JavaScript program that counts the number of occurrences of a specific element in an array using a for...of loop.

function countOccurrences(arr, target) {
  //COMPLETE THE CODE HERE
  let count = 0;

  for (const element of arr) {
    if (element === target) {
      count++;
    }
  }
  return count;
}
  
  const numbers = [1, 2, 3, 2, 4, 2, 5];
  console.log(countOccurrences(numbers, 2)); 


// 3. Write a function that takes an array of product prices and returns the total price. 
//You can assume that the array contains only numbers.

function calculateTotalPrice(prices) {
  //COMPLETE THE CODE HERE
  let sum = 0;

  for (const price of prices) {
    sum += price;
  }
  return sum;
}

// Example usage:
var productPrices = [10, 20, 30, 40];
console.log(calculateTotalPrice(productPrices));


// 4. Write a function that takes an array of product prices and a discount percentage. 
//Apply the discount to each product price and return the updated prices as an array.

function applyDiscount(prices, discount) {
  //COMPLETE THE CODE HERE
  var discountedPrices = [];

  for (var price of prices) {
    var discountedPrice = price - (price * discount / 100);
    discountedPrices.push(discountedPrice);
  }

  return discountedPrices;
}

// Example usage:
var productPrices = [10, 20, 30, 40];
var discountPercentage = 20;
console.log(applyDiscount(productPrices, discountPercentage)); 

// 5. Write a function that takes an array of product quantities and 
//returns an array of indices for products that are out of stock (quantity is 0).

function getOutOfStockProducts(quantities) {
  //COMPLETE THE CODE HERE
  var outOfStockIndices = [];

  for (var i = 0; i < quantities.length; i++) {
    if (quantities[i] === 0) {
      outOfStockIndices.push(i);
    }
  }
  return outOfStockIndices;
}

// Example usage:
var productQuantities = [2, 0, 4, 0, 3];
console.log(getOutOfStockProducts(productQuantities)); 

