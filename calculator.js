// ADDITION
function addition() {
  console.log(233 + 511)
}

addition()

function additionWithParams(a, b) {
  console.log(a + b);
}

additionWithParams(12, 22)



// SUBTRACTION
function subtract() {
  console.log(100 - 15);
}

subtract()

function subtractWithParams(num1, num2) {
  console.log(num1 - num2);
}

subtractWithParams(10, 2)



// MULTIPLICATION
function multiply() {
  console.log(5 * 4);
}

multiply()

function multiplyWithParams(a, b) {
  console.log(a * b)
}

multiplyWithParams(20, 13)



// DIVISION
function division() {
  console.log(35 / 5)
}

division()

function divideWithParams(a, b) {
  if (b === 0) {
    console.log("Error: Division by zero is not allowed.");
  } 
  
  if (b > 0) {
    console.log(a / b);
  }
}

divideWithParams(10, 2.5)



// Advanced arithmetic functions
// Get the power of a number
function power(base, exponent) {
  console.log(Math.pow(base, exponent));
}

power(4, 2)

// Get the square root of a number
function squareRoot(number) {
  console.log(Math.sqrt(number));
}

squareRoot(16)