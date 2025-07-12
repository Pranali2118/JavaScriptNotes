// ✅ Day 3: Object and Array Destructuring

//📦 What is Destructuring?
//Destructuring is a way to unpack values from arrays or objects into distinct variables.

//🔹 Object Destructuring
let user = {
  name: "Parvez",
  age: 20,
  country: "India"
};

const { name, age } = user;
console.log(name); // Parvez
console.log(age);  // 20

//🔹 Array Destructuring
 arr = [1, 2, 3, 4, 5];
const [a1, , b1, ...rest] = arr;

console.log(a1);    // 1
console.log(b1);    // 3
console.log(rest); // [4, 5]

//🔁 Using Spread (...) in Objects/Arrays
 a = [1, 2, 3];
 b = [...a, 4, 5];
console.log(b); // [1, 2, 3, 4, 5]

//✅ Spread in Object
js
Copy
Edit
let x = {
  name: "Parvez",
  age: 25
};

let y = {
  ...x,
  country: "India"
};

console.log(y);
// { name: "Parvez", age: 25, country: "India" }

// ❗ Edge Case
// Spreading array into an object creates numeric keys:


let arr = [10, 20, 30];
let obj = { ...arr };
console.log(obj);
// { '0': 10, '1': 20, '2': 30 }

//❌ Why This Fails?
 a = {
    name: "Parvez",
    age: 20
};

 b = [...a];  // ❌ Error
console.log(b);

//TypeError: a is not iterable
// ✅ Reason Explained:
// 📌 Arrays are iterable
// Arrays can be looped using for...of

// Arrays use numeric indexes: arr[0], arr[1], ...

// 📌 Objects are not iterable by default
// They don’t have a built-in order

// You can’t spread them into an array using ...object directly unless you extract keys or values

// 🧠 Rule:
// Operation	Valid?	Why?
// [...array]	✅	Arrays are iterable
// {...object}	✅	Object spread is valid to copy/extend objects
// [...object]	❌	Objects are not iterable, so cannot be spread into arrays directly
// {...array}	✅	Arrays can be spread into objects; keys will be '0', '1', etc.


// ✅ Valid Example: Spreading Array into Object

// let arr = [1, 2, 3];
// let obj = { ...arr };
// console.log(obj);
// // Output: { '0': 1, '1': 2, '2': 3 }
// ✅ Keys are indexes as strings.




