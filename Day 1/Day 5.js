//✅ Day 5: Window Object & Timers in JavaScript

// 🌐 What is the window Object?
// In the browser, the window object is the global object that holds everything:

// Functions

// Variables (var)

// Timers (setTimeout, setInterval)

// DOM elements, alert, prompt, etc.


//  Global Scope and window
// 📌 var and function are attached to window

var a = 10;
function greet() {
  console.log("Hello");
}

console.log(window.a);       // ✅ 10
console.log(window.greet);   // ✅ function: greet()

// ❌ let and const are not attached to window

let b = 20;
const c = 30;

console.log(window.b); // ❌ undefined
console.log(window.c); // ❌ undefined

//⏲️ JavaScript Timers

//1. setInterval(callback, ms)
// Repeats the function every ms milliseconds

setInterval(() => {
  console.log("Hello from setInterval");
}, 3000); // runs every 3 seconds

// 2. setTimeout(callback, ms)
// Executes the function only once after ms milliseconds

setTimeout(() => {
  console.log("Hello from setTimeout");
}, 3000); // runs once after 3 seconds

//  clearInterval(intervalId)
// Stops the interval from repeating

const myInterval = setInterval(() => {
  console.log("Repeating...");
}, 2000);

setTimeout(() => {
  console.log("Stopping the interval...");
  clearInterval(myInterval); // stops repeating
}, 5000)

// 📌 Real Use Case for Timers
// setInterval is great for:

// animations

// live clocks

// repeated polling (like chat updates)

// setTimeout is great for:

// delaying execution

// scheduling something once

// stopping a spinner after delay

