//1.a. Print odd numbers in an array:
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let printOddNumbers = arr => {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers(array);

//2.b. Convert all the strings to title caps in a string array:
let stringArray = ["apple", "banana", "orange"];
let titleCaps = arr => {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
};

console.log(titleCaps(stringArray));

//3.c. Sum of all numbers in an array:
let numbers = [1, 2, 3, 4, 5];
let sumArray = arr => arr.reduce((acc, num) => acc + num, 0);

console.log(sumArray(numbers));

//4.c. Return all the prime numbers in an array:
let numbersArray = [2, 3, 4, 5, 6, 7, 8, 9];
let getPrimes = arr => arr.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
});

console.log(getPrimes(numbersArray));

//5.d. Return all the palindromes in an array:
let wordsArray = ["level", "hello", "radar", "world", "madam"];
let getPalindromes = arr => arr.filter(word => word === word.split('').reverse().join(''));

console.log(getPalindromes(wordsArray));


