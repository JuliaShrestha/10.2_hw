/*
Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.
*/

const array = [1, 2, 5, 8, 10, 13, 14, 17, 23];

const newArrayOfEvenNumbers = array.filter(number => number % 2 === 0);

console.log(newArrayOfEvenNumbers);