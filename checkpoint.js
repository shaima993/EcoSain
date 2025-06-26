
//String Manipulation Functions:
//1 Reverse a String: Write a function that reverses a given string.
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Example :
console.log(reverseString("shayma")); 

//2 Count Characters: Create a function that counts the number of characters in a string.

function countCharacters(str) {
  return str.length;
}

// Example:
console.log(countCharacters("Shayma")); 

//3 Capitalize Words: Implement a function that capitalizes the first letter of each word in a sentence.
function capitalizeWords(sentence) {
  return sentence
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Example:
console.log(capitalizeWords("shayma melliti")); 

//Array Functions:
//1 Find Maximum and Minimum: Write functions to find the maximum and minimum values in an array of numbers.
function findMaximum(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

function findMinimum(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
  }
  return min;
}

// Example:
 numbers1 = [18, 7, 4, 105, -3,-970];
console.log(findMaximum(numbers1)); 
console.log(findMinimum(numbers1)); 

//2 Sum of Array: Create a function that calculates the sum of all elements in an array.

function sumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
} 

// Example:
 numbers = [19, 78, 0, 40, -5];
console.log(sumArray(numbers)); 

//3 Filter Array: Implement a function that filters out elements from an array based on a given condition:
// removing string

function removeStrings(arr) {
  let result = [];
  let index = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') {
      result[index] = arr[i];
      index++;
    }
  }

  return result;
}


// Example :
 filterArray = ["shayma", null, 35, "false"];
console.log(removeStrings(filterArray));

//Mathematical Functions:

//1 Factorial: Write a function to calculate the factorial of a given number.

function factorial(n) {
  if (n < 0) return undefined;
  if (n === 0 || n === 1) return 1;
  return n * factorial(n - 1);
}
// Example :
console.log(factorial(7)); 

//2 Prime Number Check: Create a function to check if a number is prime or not.

function isPrime(n) {
  if (n <= 1) return false;       // 0 and 1 are not prime
  if (n === 2) return true;       // 2 is prime
  if (n % 2 === 0) return false;  // even numbers > 2 are not prime

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) return false;
  }
  
  return true;
}

// Example:
console.log(isPrime(7));  // true
console.log(isPrime(14)); // false

//3 Fibonacci Sequence: Implement a function to generate the Fibonacci sequence up to a given number of terms.

function generateFibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence.slice(0, n);
}

// Example :
console.log(generateFibonacci(10));
