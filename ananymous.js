//1. a. Print odd numbers in an array
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let printOddNumbers = function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

printOddNumbers(array);

// IIFE
(function(arr) {
    arr.forEach(function(num) {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})(array);


//2.b. Convert all the strings to title caps in a string array
let stringArray = ["apple", "banana", "orange"];
let titleCaps = function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
};

console.log(titleCaps(stringArray));

// IIFE
let titleCapsResult = (function(arr) {
    return arr.map(function(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
})(stringArray);

console.log(titleCapsResult);

//3.c. Sum of all numbers in an array
let numbers = [1, 2, 3, 4, 5];
let sumArray = function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
};

console.log(sumArray(numbers));

// IIFE
let sumArrayResult = (function(arr) {
    return arr.reduce(function(acc, num) {
        return acc + num;
    }, 0);
})(numbers);

console.log(sumArrayResult);

//4.d. Return all the prime numbers in an array
let numbersArray = [2, 3, 4, 5, 6, 7, 8, 9];
let getPrimes = function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
};

console.log(getPrimes(numbersArray));

// IIFE
let getPrimesResult = (function(arr) {
    return arr.filter(function(num) {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return num > 1;
    });
})(numbersArray);

console.log(getPrimesResult);

//5.e. Return all the palindromes in an array
let wordsArray = ["level", "hello", "radar", "world", "madam"];
let getPalindromes = function(arr) {
    return arr.filter(function(word) {
        return word === word.split('').reverse().join('');
    });
};

console.log(getPalindromes(wordsArray));

// IIFE
let getPalindromesResult = (function(arr) {
    return arr.filter(function(word) {
        return word === word.split('').reverse().join('');
    });
})(wordsArray);

console.log(getPalindromesResult);

//6.f.Return median of two sorted arrays of the same size.
let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
let medianOfArrays = function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort(function(a, b) {
        return a - b;
    });
    let length = sortedArray.length;

    return (sortedArray[Math.floor((length - 1) / 2)] + sortedArray[Math.ceil((length - 1) / 2)]) / 2;
};

console.log(medianOfArrays(array1, array2));

// IIFE
let medianOfArraysResult = (function(arr1, arr2) {
    let mergedArray = arr1.concat(arr2);
    let sortedArray = mergedArray.sort(function(a, b) {
        return a - b;
    });
    let length = sortedArray.length;

    return (sortedArray[Math.floor((length - 1) / 2)] + sortedArray[Math.ceil((length - 1) / 2)]) / 2;
})(array1, array2);

console.log(medianOfArraysResult);

//6.g. Remove duplicates from an array:
let arrayWithDuplicates = [1, 2, 3, 4, 2, 5, 6, 3];
let removeDuplicates = function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
};

console.log(removeDuplicates(arrayWithDuplicates));

// IIFE
let removeDuplicatesResult = (function(arr) {
    return arr.filter(function(value, index, self) {
        return self.indexOf(value) === index;
    });
})(arrayWithDuplicates);

console.log(removeDuplicatesResult);

//7.h. Rotate an array by k times:
let arrayToRotate = [1, 2, 3, 4, 5];
let k = 2;
let rotateArray = function(arr, k) {
    let rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
};

console.log(rotateArray(arrayToRotate, k));

// IIFE
let rotateArrayResult = (function(arr, k) {
    let rotations = k % arr.length;
    return arr.slice(rotations).concat(arr.slice(0, rotations));
})(arrayToRotate, k);

console.log(rotateArrayResult);


