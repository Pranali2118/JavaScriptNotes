// ✅ Day 4: JavaScript Object Essentials

// 🧠 What is an Object?
// An object is a collection of key-value pairs, where keys are always strings (or Symbols), and values can be any type.

let person = {
  name: "Parvez",
  age: 20
};

//  Object Utility Methods
// 1. Object.keys(obj)
// Returns an array of keys in the object.

console.log(Object.keys(person)); 
// // Output: ["name", "age"]
// 2. Object.values(obj)
// Returns an array of values.


console.log(Object.values(person)); 
// // Output: ["Parvez", 20]
// 3. Object.entries(obj)
// Returns an array of [key, value] pairs.

console.log(Object.entries(person)); 
// // Output: [["name", "Parvez"], ["age", 20]]
// 4. Object.fromEntries(array)
// Converts a 2D array back to an object.

let arr = [["name", "Parvez"], ["age", 20]];
let obj = Object.fromEntries(arr);

console.log(obj);
// Output: { name: "Parvez", age: 20 }

// 🔒 Object Protection Methods
// 5. Object.freeze(obj)
// Makes object completely immutable

// Cannot modify, add, or delete properties


// Object.freeze(person);
// person.name = "Khan"; // ❌ won't change
// person.country = "India"; // ❌ won't add
// 6. Object.seal(obj)
// Allows property modification, but disallows new property additions or deletions


// Object.seal(person);
// person.name = "Khan";  // ✅ allowed
// person.country = "India"; // ❌ not added
// 🔍 Check for Property Existence
// 7. hasOwnProperty(key)
// Returns true if the object has that key.

// console.log(person.hasOwnProperty("name")); // true
// console.log(person.hasOwnProperty("country")); // false

// 🔄 Convert Array to Object with Loop

let entries = [
  ["name", "Parvez"],
  ["age", 20],
  ["name", "pr"],
  ["age", 20]
];

let newObj = {};

for (let [key, value] of entries) {
  newObj[key] = value;
}

 console.log(newObj);
// // Output: { name: "pr", age: 20 }
// ⚠️ If key repeats, last value will overwrite previous ones.

// 💡 Polyfill Concept (📘 Theory Only)
// A polyfill is a piece of code (usually JS) used to implement a feature on older browsers/environments that do not support it natively.

// Example: You can write a custom version of Object.fromEntries() using a loop.
