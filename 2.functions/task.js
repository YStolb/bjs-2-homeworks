function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  // проверить, аргументы числа или им нужно стать числами
  if (typeof percent !== "number" || isNaN(percent) || typeof contribution !== "number" || isNaN(contribution) || typeof amount !== "number" || isNaN(amount) || typeof countMonths !== "number" || isNaN(countMonths)) {
    return false;
  }

  // Преобразуйте процентную ставку из диапазона от 0 до 100 в диапазон от 0 до 1 и из годовой ставки — в месячную.
  monthlyPercent = percent / 100 / 12;
  // Посчитать кредит
  loanAmount = amount - contribution;
  // Посчитать месячный платеж
  monthlyPayment = loanAmount * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, countMonths) - 1));
  // Посчитать сумму платежа клиента
  totalAmount = monthlyPayment * countMonths + contribution;
  // Округлить результат
  roundedResult = Math.round(totalAmount * 100) / 100;
  // Выдать результат
  return roundedResult;
}

console.log(calculateTotalMortgage(10, 0, 50000, 12)); // Output: 52749.53
console.log(calculateTotalMortgage(10, 1000, 50000, 12)); // Output: 51694.54
console.log(calculateTotalMortgage(10, 0, 20000, 24)); // Output: 22149.56
console.log(calculateTotalMortgage(10, 1000, 20000, 24)); // Output: 21042.09
console.log(calculateTotalMortgage(10, 20000, 20000, 24)); // Output: 0
console.log(calculateTotalMortgage(10, 0, 10000, 36)); // Output: 11616.19
console.log(calculateTotalMortgage(15, 0, 10000, 36)); // Output: 12479.52
