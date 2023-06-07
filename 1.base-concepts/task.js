"use strict";

function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;

  if (discriminant < 0) {
    // no roots
  } else if (discriminant === 0) {
    // one root
    arr.push(-b / (2 * a));
  } else {
    // two roots
    arr.push((-b + Math.sqrt(discriminant)) / (2 * a));
    arr.push((-b - Math.sqrt(discriminant)) / (2 * a));
  }

  return arr;
}

// Example usage
console.log(solveEquation(1, 2, -3));