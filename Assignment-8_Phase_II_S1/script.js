
/* 1. Create a function named `greet` that prints "Hello World". */
//  function greet ()
//  {
//     console.log("Hello World");
//  }
// greet();

/* 2. Create a function `add(a, b)` that returns the sum. */
// function add(a, b)
// {
//     return a + b;
// }
// console.log(add(4,7));

/* 3. Write a function to calculate the square of a number. */
// const square = (n) => {
//     return n * n;
// }
// console.log(square(63));



/* 4. Create a function that checks whether a number is even or odd. */
// const checkEven = (n) => {
//     return n % 2 === 0;
// }
// console.log(square(63));



/* 5. Write a function that converts Celsius to Fahrenheit. */
// function ConvertTempToCelsius(celsius){
//     let fahrenheit = (celsius * 9/5) + 32;
//     return fahrenheit;
// }

// console.log(ConvertTempToCelsius(37.5));



/* 6. Create a function with default parameter "Guest". */
// function greet(name = "Guest") {
//     console.log("Hello, " + name);
// }

// greet("John");
// greet();



/* 7. Write a function that returns the greater of two numbers. */




/* 8. Create a function to calculate area of rectangle. */
// const area = (a, b) => {
//     return a * b;
// };

// console.log("Area of Rectangle : ",area(32,21));



/* 9. Write a function that returns "Adult" if age ≥ 18 else "Minor". */




/* 10. Create a function to reverse a string. */
//Remember that strings are immutable.
// function reverseString(str){
//     let arr = str.split("");
//     let start = 0, end = arr.length - 1;

//     while (start < end) {
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;

//         start++;
//         end--;
//     }

//     return arr.join("");
// }

// console.log(reverseString("Welcome"));

// function reverseString(str){
//     return str.split("").reverse().join("");
// }

// console.log(reverseString("Welcome"));



/* 11. Write a function expression for multiplication. */
// const multiply = (a, b) => a * b;
// console.log(multiply(5, 4));



/* 12. Convert a normal function into an arrow function. */




/* 13. Create a function that accepts unlimited numbers and returns their sum using rest operator. */
// function sum(...numbers) {
//     let total = 0;

//     for (let num of numbers) {
//         total += num;
//     }

//     return total;
// }

// console.log(sum(10, 20, 30));
// console.log(sum(1, 2, 3, 4, 5));


// const sum = (...numbers) =>
//     numbers.reduce((total, num) => total + num, 0);

// console.log(sum(10, 20, 30));



/* 14. Write a function that counts vowels in a string. */
// function countVowels(str) {
//     let count = 0;

//     for (let char of str.toLowerCase()) {
//         if ("aeiou".includes(char)) {
//             count++;
//         }
//     }

//     return count;
// }

// console.log(countVowels("Welcome"));


// function countVowels(str) {
//     const vowels = str.match(/[aeiou]/gi);
//     return vowels ? vowels.length : 0;
// }

// console.log(countVowels("Welcome"));



/* 15. Create a function that checks if a string is palindrome. */
// const checkPalindrome = (str) => {
//     str = str.toLowerCase();
//     let start = 0, end = str.length - 1;

//     while(start <= end)
//     {
//         if(str[start] != str[end])
//         {
//             return false;
//         }
//         start++;
//         end--;
//     }

//     return true;
// }

// const checkPalindrome = str => {
//     str = str.toLowerCase();
//     return str === str.split("").reverse().join("");
// };
// console.log(checkPalindrome("Madam"));
// JavaScript string comparison is case-sensitive. So M and m are treated differently.
// console.log(checkPalindrome("India"));



/* 16. Write a callback function example using `setTimeout`. */
// setTimeout(function() {
//     console.log("3 seconds passed");
// }, 3000);



/* 17. Create a higher-order function that executes another function twice. */
// function executeTwice(fn) {
//     fn();
//     fn();
// }

// function greet() {
//     console.log("Hello");
// }

// executeTwice(greet);




/* 18. Write a function that returns another function. */
// function outer() {
//     return function () {
//         console.log("Inner function executed");
//     };
// }

// const inner = outer();
// inner();

// const outer = () => () => "Hello";

// console.log(outer()());


/* 19. Create a pure function for subtraction. */
// function subtract(a, b) {
//     return a - b;
// }

// console.log(subtract(10, 3));
// console.log(subtract(10, 3));




/* 20. Create an impure function using global variable modification. */
// let counter = 0;

// function increment() {
//     counter++;
// }

// increment();
// increment();

// console.log(counter);




/* 21. Write a recursive function for factorial. */




/* 22. Write recursive Fibonacci function. */





/* 23. Create a function that finds power using recursion. */





/* 24. Create an IIFE that prints "Executed". */





/* 25. Write a function that memoizes factorial calculation. */





/* 26. Create a closure counter function. */





/* 27. Write a function currying example for addition. */





/* 28. Create debounce function logic. */





/* 29. Create throttle function logic. */





/* 30. Write a function that executes only once. */






/* 31. Create custom implementation of `map`. */






/* 32. Create custom implementation of `filter`. */






/* 33. Create custom implementation of `reduce`. */






/* 34. Create custom `forEach`. */






/* 35. Explain output:

function test() {
    return;
    console.log("Hello");
}
console.log(test());

*/





/* 36. Create an array of 5 fruits. */






/* 37. Print first and last element of array. */





/* 38. Find length of array. */






/* 39. Add element at end using `push`. */






/* 40. Remove last element using `pop`. */






/* 41. Add element at beginning using `unshift`. */






/* 42. Remove first element using `shift`. */







/* 43. Reverse an array. */






/* 44. Sort numbers ascending. */





/* 45. Sort numbers descending. */





/* 46. Use `splice` to remove elements. */





/* 47. Use `splice` to insert elements. */





/* 48. Use `slice` to copy array. */





/* 49. Find index of an element. */






/* 50. Check if array contains a value. */





/* 51. Join array elements with "." */





/* 52. Merge two arrays using spread operator. */






/* 53. Copy array using spread operator. */






/* 54. Find maximum value using `Math.max`. */






/* 55. Swap two variables using destructuring. */






/* 56. Use `forEach` to print all numbers doubled. */







/* 57. Use `map` to square all numbers. */







/* 58. Use `filter` to get even numbers. */






/* 59. Use `reduce` to calculate sum. */







/* 60. Use `reduce` to find maximum number. */







/* 61. Use `find` to get first even number. */







/* 62. Use `findIndex` to locate number > 50. */







/* 63. Use `some` to check if any number is negative. */






/* 64. Use `every` to check if all numbers are positive. */







/* 65. Create array of names and convert all to uppercase. */







/* 66. Filter all students with marks > 80. */







/* 67. Calculate average using reduce. */






/* 68. Count occurrences of numbers in array. */








/* 69. Flatten nested arrays using `flat`. */








/* 70. Remove duplicates using `Set`. */







/* 71. Sort array of objects by age. */







/* 72. Find total price of shopping cart. */







/* 73. Group users by age. */








/* 74. Chain `filter` and `map`. */






/* 75. Explain difference between `map` and `forEach`. */






/* 76. Create object for a student. */







/* 77. Access properties using dot notation. */






/* 78. Access properties using bracket notation. */






/* 79. Add new property dynamically. */






/* 80. Update existing property. */






/* 81. Delete a property. */






/* 82. Create object method. */






/* 83. Use `this` keyword inside method. */






/* 84. Create nested object. */







/* 85. Access deeply nested property. */







/* 86. Destructure object properties. */






/* 87. Rename variables while destructuring. */







/* 88. Add default values during destructuring. */







/* 89. Copy object using spread operator. */






/* 90. Merge two objects. */







/* 91. Use `Object.keys()` on object. */







/* 92. Use `Object.values()`. */







/* 93. Use `Object.entries()`. */







/* 94. Loop through object using `for...in`. */








/* 95. Freeze an object and test modification. */








/* 96. Seal an object and test modification. */






/* 97. Create array of objects for users. */







/* 98. Find user with highest age. */







/* 99. Build a mini TODO app using arrays + objects. */







/* 100. Build a shopping cart system with:
- add item
- remove item
- calculate total
- quantity update
*/







/* 101. Debugging Question:

const arr = [1,2,3];
arr[10] = 5;
console.log(arr.length);

*/






/* 102. Debugging Question:

console.log(typeof []);

*/






/* 103. Debugging Question:

console.log([] == false);

*/






/* 104. Debugging Question:

console.log([1,2] + [3,4]);

*/





/* 105. Debugging Question:

function x(a,b){
   return a+b;
}
console.log(x(2));

*/






/* 106. Build custom `Array.prototype.map`. */





/* 107. Build custom `Array.prototype.filter`. */






/* 108. Build custom `Array.prototype.reduce`. */






/* 109. Implement deep clone function. */






/* 110. Create student management system. */






/* 111. Create library management system. */






/* 112. Create expense tracker logic. */






/* 113. Build inventory management system. */






/* 114. Create function composition utility. */






/* 115. Build calculator using objects and methods. */






/* 116. Scenario:
You have an array of users. Return only active users.
*/






/* 117. Scenario:
Calculate total revenue from orders array.
*/




/* 118. Scenario:
Find second largest number in array.
*/





/* 119. Scenario:
Find missing number in array.
*/






/* 120. Scenario:
Check whether two objects are equal.
*/





/* 121. Difference between:
- function declaration
- function expression
- arrow function
*/







/* 122. Difference between:
- `slice`
- `splice`
*/





/* 123. Difference between:
- `map`
- `filter`
- `reduce`
*/






/* 124. Difference between:
- `for...in`
- `for...of`
*/






/* 125. Difference between:
- shallow copy
- deep copy
*/





/* 126. Rotate array by k positions. */





/* 127. Find frequency of characters in string. */






/* 128. Find longest word in sentence. */






/* 129. Check if two strings are anagrams. */





/* 130. Capitalize first letter of every word. */






/* 131. Remove falsy values from array. */






/* 132. Convert array into object. */






/* 133. Convert object into array. */






/* 134. Find duplicate elements. */







/* 135. Merge two sorted arrays. */







/* 136. Create authentication validation functions. */






/* 137. Create OTP generator. */







/* 138. Create password strength checker. */






/* 139. Build leaderboard system. */







/* 140. Create attendance management logic. */







/* 141. Implement compose function. */







/* 142. Implement pipe function. */







/* 143. Create custom event emitter. */







/* 144. Build promise-like function logic. */







/* 145. Create retry mechanism function. */







/* 146. Build complete Notes App logic. */







/* 147. Build Student Dashboard logic. */







/* 148. Build Quiz App data handling. */







/* 149. Build E-commerce Cart System. */







/* 150. Build Mini Netflix Watchlist System. */


