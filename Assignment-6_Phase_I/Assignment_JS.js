/* Print "Hello JavaScript" in the console */
// Code
// console.log("Hello JavaScript");


/* Print your name, age, and city using one console.log(). */
//Code
// console.log("Divyanshu " + "25 " + "Nagpur");


/*Print a warning message using console.warn(). */
// console.warn("This is a warning message!");


/* Print an error message using console.error(). */
// console.error("This is an error message!");


/* Use console.table() to display an array of 5 numbers. */
// let numbers = [10, 20, 30, 40, 50];
// console.table(numbers);



/* Create a variable called studentName and store your name in it. */
// var studentName = "Divyanshu";
// console.log(studentName);


/* Create a variable age and print it. */
// var age = 25;
// console.log(age);

/* Create two variables and swap their values. */
/* var a = 20;
var b = 10;
console.log("Value of a = " + a +  " and b = " + b);
var temp = a;
a = b;
b = temp;
console.log("Value of a = " + a +  " and b = " + b);*/


/* Create a constant variable for PI and print it. */
// const pi = Math.PI;
// console.log(pi);


/* Declare a variable without assigning a value and print it. */
// var a;
// console.log(a);


/* Create a variable score and increase it by 10. */
// var score = 0;
// score += 10;
// console.log(score);


/* Create three variables for first name, last name, and full name. */
// let first_name,last_name,full_name;


/* Create variables of type string, number, boolean, null, and undefined. */


/* Check the type of different variables using typeof. */


/* Store your mobile number in a variable and check its type. */
// let mob = 7866489775;
// console.log(typeof(mob));


/* Create a variable with value null and check its type. */
// let a = null;
// console.log(typeof(a));


/* Create a bigint number and print it. */
/* Convert the string "50" into a number. */
// let a = "50";
// console.log(typeof(a));
// a = Number(a);
// console.log(typeof(a));


/* Convert the number 100 into a string. */
/* Convert "true" into a boolean. */
/* 4. Check the output of:
- `"5" + 2`
- `"5" - 2`
- `true + 1`*/
// console.log("5" + 2); //52(concatenation)
//console.log("5" - 2); //3(type coercion)
// console.log(true + 1); //2



/* Create a variable with value "123abc" and convert it into a number. */
// let value = "123abc";

// let result = Number(value);

// console.log(result);  //NaN

// let result1 = parseInt(value);

// console.log(result1); //123

// let result2 = +value;

// console.log(result2); //NaN



/* Use parseInt() on "500px". */
// let value = "500px";
// let result1 = parseInt(value);
// console.log(result1); //123


/* Add two numbers and print the result. */
// let a = 8, b = 10;
// console.log(a + b);


/* Find the remainder when 25 is divided by 4. */
// console.log(25/4);


/* Find the square of a number using exponent operator. */
// let a = 7;
// let b = 7**2;
// console.log(b);


/* Increment a variable using ++. */
// let a = 14;
// console.log(a++); //14
// console.log(++a); //16


/* Decrement a variable using --. */
// let a = 14;
// console.log(a--); //14
// console.log(--a); //12


/* Use += operator to increase a variable by 20. */
// let a = 14;
// a += 20;
// console.log(a);


/* Compare two numbers using >, <, >=, <=. */
// let a = 17, b = 28;
// console.log(`${a} > ${b} = ${a > b}`);
// console.log(`${a} < ${b} = ${a < b}`);
// console.log(`${a} >= ${b} = ${a >= b}`);
// console.log(`${a} <= ${b} = ${a <= b}`);


/* Check if two values are strictly equal using ===. */
// console.log(20 === "20");


/* Compare "10" and 10 using both == and ===. */
// console.log(10 == "10"); //true
// console.log(10 === "10"); //false


/* Create two boolean variables and test &&, ||, and !. */
// let val1 = true;
// let val2 = false;

// console.log(val1 && val2); // false
// console.log(val1 || val2); // true
// console.log(!val1);         // false
// console.log(!val2);             // true


/* Create a string and print its length. */
// let str = "Welcome to JavaScript";
// console.log(str.length);

/* Convert a string into uppercase. */
/* Convert a string into lowercase. */
// let str = "Welcome to JavaScript";
// console.log(str.toUpperCase());
// console.log(str.toLowerCase());



/* Check if a string includes the word "JavaScript". */
// let str = "Welcome to JavaScript";
// let new_str = "Welcome to the world of Web Development";

// console.log(str.includes("JavaScript"));
// console.log(new_str.includes("JavaScript"));


/* Extract the word "World" from "Hello World". */
// let str = "Hello World";
// let word = str.slice(6,11);
// console.log(word);

/* Replace "apple" with "mango" in a sentence. */
// let str = "Apple season has arrived."
// console.log(str);
// str = str.replace("Apple", "Mango");
// console.log(str);

/* Split "HTML,CSS,JS" into an array. */
// let str = "HTML,CSS,JS";

// let arr = str.split(",");

// console.log(arr);


/* Remove extra spaces from a string. */
// let text1 = "   Hello World   ";

// console.log(text1.trim());

// let text2 = "  Hello    World   JS  ";

// let cleaned = text2.trim().replace(/\s+/g, " ");

// console.log(cleaned);

/*trim() → removes outer spaces
/\s+/g → finds multiple spaces
" " → replaces them with a single space
*/

/* Repeat the word "Hi" 5 times. */
// let str = "Hi";
// console.log(str.repeat(5));

/* Print the first character of a string. */
// let str = "Hello World ";

// console.log(str[0]);
// console.log(str.charAt(0));
// console.log(str.slice(0, 1));
// let [first] = str;
// console.log(first);
// console.log(str.substring(0, 1));



/* Use template literals to print:"My name is Aman and I am 20 years old" */
// let name = "Aman";
// let age  = 20;

// console.log(`My name is ${name} and I am ${age} years old.`);

/* Round 4.7 using Math.round(). */
// let val = 4.7;
// console.log(Math.round(val)); //5

/* Find the square root of 81. */
// let val = 81;
// console.log(Math.sqrt(val));


/* Find the maximum number from 10, 20, 5, 99. */
/* Generate a random number between 1 and 10. */
// let min = 1;
// let max = 10;

// let num = Math.floor(Math.random() * (max - min + 1)) + min;
// console.log(num);


/* Convert "99.99" into an integer. */
/* Check whether 25 is an integer or not. */


/* Use toFixed(2) on 3.141592. */
// let val = 3.141592;
// console.log(val.toFixed(2));


/* Check whether a number is positive or negative. */
/* Check whether a number is even or odd. */


/* Check whether a person is eligible to vote. */
// let age = 24;
// if(age >= 18)
// {
//     console.log("Eligible to vote."); 
// }
// else{
//     console.log("Not eligible to vote."); 
// }


/* Find the largest among two numbers. */
// let num1 = 29, num2 = 17;
// if(num1 >= num2)
// {
//     console.log(num1 + " is greater than " + num2);   
// }
// else
//     {
//     console.log(num2 + " is greater than " + num1);
// }

/* Find the largest among three numbers. */
// let num1 = 29, num2 = 17, num3 = 45;
// if(num1 >= num2 && num1 >= num3)
// {
//     console.log(num1 + " is greater than " + num2 + " and " + num3);   
// }
// else if(num2 >= num1 && num2 >= num3)
//     {
//     console.log(num2 + " is greater than " + num1 + " and " + num3);
// }
// else{
//     console.log(num3 + " is greater than " + num1 + " and " + num2);
// }

/* Check whether a year is a leap year. */
/* Check whether a number is divisible by both 3 and 5. */
 /*let num1 = 24, num2 = 45;
if(num1 % 3 === 0 && num1 % 5 === 0)
{
    console.log(num1 + " is divisible by both 3 and 5");
}
else
{
    console.log(num1 + " is not divisible by both 3 and 5");
}
if(num2 % 3 === 0 && num2 % 5 === 0)
{
    console.log(num2 + " is divisible by both 3 and 5");
}
else
{
    console.log(num2 + " is not divisible by both 3 and 5");
}*/


/* 8. Create a simple grading system:
- 90+ → A
- 75+ → B
- 50+ → C
- below 50 → Fail */
// let marks = 67;
// if(marks >= 90)
// {
//     console.log("Your grade is A");
// }
// else if(marks <90 && marks >=75)
// {
//     console.log("Your grade is B");
// }
// else if(marks <75 && marks >=50)
// {
//     console.log("Your grade is  C");
// }
// else
// {
//     console.log("Failed");
// }


/* Check whether a character is a vowel or consonant. */
// let char = "a";

// char = char.toLowerCase();

// if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u") {
//     console.log("Vowel");
// } else {
//     console.log("Consonant");
// }

/* Create a calculator using switch statement. */
// let a = 10;
// let b = 5;
// let operator = "+"; // +, -, *, /

// switch (operator) {
//     case "+":
//         console.log(a + b);
//         break;
//     case "-":
//         console.log(a - b);
//         break;
//     case "*":
//         console.log(a * b);
//         break;
//     case "/":
//         console.log(a / b);
//         break;
//     default:
//         console.log("Invalid operator");
// }

/* Print the day name based on a number (1–7). */
// let day = 3;

// switch (day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;
//     case 5:
//         console.log("Friday");
//         break;
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid day number");
// }

/* Check whether a username is "admin" and password is "1234". */
// let username = "admin";
// let password = "1234";

// let inputUser = "admin";
// let inputPass = "1234";

// if (inputUser === username && inputPass === password) {
//     console.log("Login successful");
// } else {
//     console.log("Invalid credentials");
// }


/* Check whether an empty string is truthy or falsy. */
// if ("") {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// } //falsy


/* Check whether 0 is truthy or falsy. */
// if (0) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// } //falsy


/* Check whether [] is truthy or falsy. */
// if ([]) {
//     console.log("Truthy");
// } else {
//     console.log("Falsy");
// } //truthy


/* Create a variable and print "Valid" if it has a value otherwise print "Invalid". */
// let value = "Hello";
// console.log(value ? "Valid" : "Invalid");


/* Check whether a number is even or odd using ternary operator. */
// let num = 18;
// num % 2 === 0 ? console.log("Even") : console.log("Odd");



/* Check whether age is above 18 using ternary operator. */
// let age = 13;
// age % 2 == 0 ? console.log("Age above 18") : console.log("Age is below 18");


/* Find the greater number between two values using ternary operator. */
// let num1 = 77, num2 = 34;
// num1 > num2 ? console.log(`${num1} is greater than ${num2}`) : console.log(`${num2} is greater than ${num1}`);


/* Create a mini biodata program using variables and template literals. */
// let name = "Divyanshu";
// let age = 25;
// let city = "Nagpur";
// let course = "Computer Science";
// let hobby = "Playing Cricket";

// let biodata = `
// ----- MINI BIODATA -----

// Name   : ${name}
// Age    : ${age}
// City   : ${city}
// Course : ${course}
// Hobby  : ${hobby}
// `;

// console.log(biodata);



/* Calculate the area of a rectangle. */
// let rectangle_length = 8, rectangle_breadth = 12;
// let area = rectangle_length * rectangle_breadth;
// console.log("Area of rectangle : ", area);


/* Calculate the simple interest. */
// let principal = 10000, rate = 3, year = 2;
// let simple_interest = (principal * rate * year ) / 100;
// console.log("Simple interest : ", simple_interest);


/* Convert temperature from Celsius to Fahrenheit. */
// let celsius = 30;
// let fahrenheit = (celsius * 9/5) + 32;
// console.log(fahrenheit);


/* Convert kilometers into meters. */
// let kilometers = 5;
// let meters = kilometers * 1000;
// console.log(meters);



/* Calculate total marks and percentage of 5 subjects. */
// let marks = [34, 38, 66, 49, 86];
// let total_marks = 0;
// for(let i = 0; i<5; i++)
// {
//     total_marks += marks[i];
// }
// console.log("Percentage : ", (total_marks/5).toFixed(2));


/* Calculate electricity bill based on units consumed. */
// let units = 250;
// let bill = 0;

// if (units <= 100) {
//     bill = units * 5;
// } else if (units <= 200) {
//     bill = (100 * 5) + (units - 100) * 7;
// } else {
//     bill = (100 * 5) + (100 * 7) + (units - 200) * 10;
// }
// console.log("Electricity Bill:", bill);


/* Create a username generator using first name and birth year. */
// function generateUsernames(firstName, birthYear) {
//     const name = firstName.toLowerCase().replace(/\s+/g, "");

//     return [
//         `${name}${birthYear}`,
//         `${name}_${birthYear}`,
//         `${name}${String(birthYear).slice(-2)}`,
//         `${name}.${birthYear}`,
//         `${name}x${birthYear}`,
//         `${name}_official`,
//         `the${name}${String(birthYear).slice(-2)}`,
//         `${name}${Math.floor(Math.random() * 1000)}`,
//         `${name}_${birthYear}_${Math.floor(Math.random() * 100)}`,
//         `${name}pro${String(birthYear).slice(-2)}`
//     ];
// }

// // Example usage
// const usernames = generateUsernames("John", 1995);

// console.log("Generated Usernames:");
// usernames.forEach(username => console.log(username));



/* Check whether a string starts with a specific letter. */
// const str = "Hello";

// if (str.startsWith("H")) {
//     console.log("String starts with H");
// } else {
//     console.log("String does not start with H");
// }


/* Count the total characters in a sentence excluding spaces. */
// function countCharacters(sentence) {
//     return sentence.replace(/\s/g, "").length;
// }

// console.log(countCharacters("Hello World"));

/* Take two numbers and print which one is greater. */
// const greater = (a, b) => a > b ? a : b;

// console.log(greater(10, 20)); 

/* Check whether a number lies between 10 and 50. */
// const isBetween = num => num >= 10 && num <= 50;

// console.log(isBetween(25));

/* Check whether a password length is greater than 8. */
// let pass = "password"
// if(pass.length > 8)
// {
//     console.log("Password length is greater than 8");
// }



/* 4. Check if a person can drive:
- age > 18
- has license = true */
// let  age = 20;
// let license = true;
// if(age > 18 && license === true)
// {
//     console.log("Person can drive");
// }
// else
// {
//     console.log("Person can't drive.");
// }



/* Check whether a number is divisible by 2, 3, or both. */
// let num = 33;
// if(num % 2 === 0)
// {
//     if(num % 3 === 0)
//     {
//         console.log("Divisible by both 2 and 3");
//     }
//     else
//     {
//         console.log("Divisible by 2");
        
//     }
// }
// else if(num % 3 === 0)
// {
//     console.log("Divisible by 3");
// }
// else
// {
//     console.log("Not Divisible by both 2 and 3");
// }


/* Print "Good Morning", "Good Afternoon", or "Good Evening" based on time. */
// let hour = new Date().getHours();

// if (hour < 12) {
//     console.log("Good Morning");
// } else if (hour < 18) {
//     console.log("Good Afternoon");
// } else {
//     console.log("Good Evening");
// }



/* Find whether a number is a multiple of 10. */
// let num = 50;
// (num % 10 === 0) ? console.log(num + " is a multiple of 10") : console.log(num + " is not a multiple of 10");


/* Create a simple discount calculator. */
// let price = 1500;
// let discount = 0;

// if (price > 1000) {
//     discount = price * 0.10;
// }

// let finalPrice = price - discount;

// console.log("Final Price:", finalPrice);



/* Check whether a product is in stock. */
// let stock = 5;

// if (stock > 0) {
//     console.log("Product is in stock");
// } else {
//     console.log("Out of stock");
// }


/* Calculate final bill after GST. */
// let bill = 2000;
// let gst = 0.18;

// let finalBill = bill + (bill * gst);

// console.log("Final Bill after GST:", finalBill);



/* Generate a random OTP of 4 digits. */
// let otp = Math.floor(1000 + Math.random() * 9000);

// console.log("OTP:", otp);



/* Reverse a 3-letter string manually. */
// let str = "cat";

// let reversed = str[2] + str[1] + str[0];

// console.log(reversed);


// let str = "dog";

// let reversed = str.split("").reverse().join("");

// console.log(reversed);

/* Find the last character of a string. */
// let str = "Hello";

// console.log(str.at(-1)); 
// console.log(str.slice(-1));

/* Convert a full name into uppercase initials. */
// let fullName = "John Doe";

// let initials = fullName
//     .split(" ")
//     .map(word => word[0].toUpperCase())
//     .join("");

// console.log(initials);

// let initials = fullName
//     .trim()
//     .split(/\s+/)
//     .map(word => word[0].toUpperCase())
//     .join("");

// console.log(initials); 

/* Check whether two strings are equal ignoring case sensitivity. */
// let str1 = "Hello";
// let str2 = "HELLO";

// console.log(str1.toUpperCase() === str2.toUpperCase());

/* Create a simple login validation system. */
// let username = "admin";
// let password = "1234";

// let inputUser = "admin";
// let inputPass = "1234";

// if (inputUser === username && inputPass === password) {
//     console.log("Login successful");
// } else {
//     console.log("Invalid credentials");
// }

/* Find whether a number is a 2-digit or 3-digit number. */
// let num = 456;

// if (num >= 10 && num <= 99) {
//     console.log("2-digit number");
// } else if (num >= 100 && num <= 999) {
//     console.log("3-digit number");
// } else {
//     console.log("Other number");
// }

/* Create a mini ATM balance checker. */
// let balance = 5000;
// let withdraw = 2000;

// if (withdraw <= balance) {
//     balance -= withdraw;
//     console.log("Withdrawal successful. Remaining balance:", balance);
// } else {
//     console.log("Insufficient balance");
// }

/* Simulate a traffic light system using switch. */
// let light = "red";

// switch (light) {
//     case "red":
//         console.log("Stop");
//         break;
//     case "yellow":
//         console.log("Ready");
//         break;
//     case "green":
//         console.log("Go");
//         break;
//     default:
//         console.log("Invalid signal");
// }

/* Build a small marksheet generator using variables and conditionals. */
// let name = "John";
// let marks = 78;

// let grade;

// if (marks >= 90) {
//     grade = "A+";
// } else if (marks >= 75) {
//     grade = "A";
// } else if (marks >= 60) {
//     grade = "B";
// } else if (marks >= 40) {
//     grade = "C";
// } else {
//     grade = "Fail";
// }

// console.log("Name:", name);
// console.log("Marks:", marks);
// console.log("Grade:", grade);

