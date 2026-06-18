/* 1. Create an Object - Beginner
Create an object for a student with:
- name
- age
- course

Then print all values.
*/

/* 2. Access Properties - Beginner
Given:

const car = {
  brand: "BMW",
  model: "M4",
  year: 2022
}

Print:
- brand
- model

using both:
- dot notation
- bracket notation
*/

/* 3. Update Object Value - Beginner
Change the age of a user from 20 to 25.

const user = {
  name: "Anubhav",
  age: 20
}
*/

/* 4. Add New Property - Beginner
Add a new property:

isAdmin: true

to this object.
*/

/* 5. Delete Property - Beginner
Remove the password property from the object.

const account = {
  username: "john",
  password: "12345"
}
*/

/* 6. Count Properties - Intermediate
Write a function that returns how many properties an object has.

Example:

countProperties({a:1,b:2,c:3})
// 3

Hint:
Use:
Object.keys()
*/

/* 7. Loop Through Object - Intermediate
Print all keys and values from this object.

const person = {
  name: "Rahul",
  age: 22,
  city: "Delhi"
}

Hint:
Use:
for...in
*/

/* 8. Check Property Exists - Intermediate
Check whether "email" exists inside an object or not.

Hint:
Use:
in
*/

/* 9. Merge Two Objects - Intermediate
Merge these two objects into one.

const obj1 = { a: 1, b: 2 }
const obj2 = { c: 3, d: 4 }

Hint:
Use:
spread operator
*/

/* 10. Convert Object to Array - Intermediate
Convert this object into an array of key-value pairs.

const user = {
  name: "Aman",
  age: 21
}

Hint:
Use:
Object.entries()
*/

/* 11. Find Highest Value - Problem Solving
Find the student with highest marks.

const marks = {
  Anubhav: 95,
  Rahul: 82,
  Aman: 90
}

Expected Output:
"Anubhav"
*/

/* 12. Sum of Object Values - Problem Solving
Find total salary.

const salaries = {
  john: 1000,
  alex: 2000,
  bob: 1500
}

Expected Output:
4500
*/

/* 13. Nested Object Access - Problem Solving
Print:
- city
- pincode

const user = {
  name: "Anubhav",
  address: {
    city: "Bhopal",
    pincode: 462001
  }
}
*/

/* 14. Object Method Practice - Problem Solving
Create an object with:
- name
- marks
- method called getResult

If marks > 40:
"Pass"

else:
"Fail"
*/

/* 15. Convert Array to Object - Problem Solving
Convert this array into an object.

const arr = ["name", "Anubhav", "age", 24]

Expected Output:
{
  name: "Anubhav",
  age: 24
}
*/

/* 16. Frequency Counter - Hard
Count frequency of each character.

Input:
"banana"

Expected Output:
{
  b: 1,
  a: 3,
  n: 2
}
*/

/* 17. Group By Property - Hard
Group users by age.

const users = [
  { name: "A", age: 20 },
  { name: "B", age: 21 },
  { name: "C", age: 20 }
]

Expected Output:
{
  20: [
    { name: "A", age: 20 },
    { name: "C", age: 20 }
  ],
  21: [
    { name: "B", age: 21 }
  ]
}
*/

/* 18. Deep Property Check - Hard
Check whether this property exists:

"user.address.city"

inside an object dynamically.

Hint:
Use:
split(".")
*/

/* 19. Object Comparison - Hard
Check if two objects have same keys and values.

Example:

{a:1,b:2}
{a:1,b:2}

Expected Output:
true
*/

/* 20. Remove Duplicate Objects - Hard
Remove duplicate objects from array based on id.

Input:
[
  {id:1,name:"A"},
  {id:2,name:"B"},
  {id:1,name:"A"}
]

Expected Output:
[
  {id:1,name:"A"},
  {id:2,name:"B"}
]
*/