//✅ Day 2: null vs undefined in JavaScript

// 🔍 Difference Between null and undefined
// Feature	null	undefined
// Meaning	Intentional absence of value	Variable declared but not assigned
// Type	object (quirk in JS)	undefined
// Default Value	Not default, must be assigned	Default for uninitialized variables
// Equality (==)	null == undefined → ✅ true	
// Strict (===)	null === undefined → ❌ false	


//Example
let a = null;
let b;
console.log(typeof a); // object
console.log(typeof b); // undefined

console.log(null == undefined);  // true
console.log(null === undefined); // false


//✅ Falsy Checks
if (!null) console.log("null is falsy");         // ✔️
if (!undefined) console.log("undefined is falsy"); // ✔️

//🧠 undefined Occurs When:
//1.Variable is declared but not initialized:
let x;
console.log(x); // undefined
//2 Object property doesn't exist:
let arr = [1, 2];
console.log(arr[5]); // undefined
//Array index out of range:
 arr = [1, 2];
console.log(arr[5]); // undefined
//4 Function is called without passing a parameter:
function test(x) {
  console.log(x); // undefined
}
test();

