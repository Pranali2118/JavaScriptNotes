// Working with this and function
//working with function context (this), strict mode, and arrow functions.

//✅ Code with Explanation:

"use strict"
function x(){
    console.log("hello", this);
}

//📍 Line:

// global.x = x;
global.x();
//✅ Output:
//hello [global Object]

// 🔍 use strict:
// Enables strict mode, which changes the behavior of this.

// In non-strict mode, this inside a standalone function refers to the global object (window in browser, global in Node).

// In strict mode, this inside a normal function is undefined if the function is called without an object.

// ✅ Explanation:
// x is added as a method on global (Node.js).

// So this inside x() refers to global, not undefined.

//📍 Line:
x();
//✅ Output:
//hello undefined
// ✅ Explanation:
// You are in strict mode.

// x() is called as a standalone function, so this is undefined.

//📍 Line:

var a = 20;
// console.log(a, window.a); // ❌ window is not defined in Node.js
// ✅ Explanation:
// var declarations get attached to the window (in browser) or global object (in Node.js).

// But in Node.js, window is not available — only global.

// ✅ Function inside Object:

let b = {
  c: function() {
    console.log(this);
  },
  name: "parvez"
};

b.c(); // ✅ Output: { c: [Function: c], name: 'parvez' }
// ✅ Explanation:
// this refers to the object b because c is being called like object.method().

// ⚠️ Arrow Function and this:

let x = {
  c: {
    a: () => {
      console.log(this);
    },
    age: 20
  },
  name: "Parvezzz"
};

x.c.a(); // ✅ Output: {} (or global/window depending on environment)
// ✅ Explanation:
// Arrow functions do not have their own this.

// They capture the this from the surrounding (lexical) scope.

// Since the surrounding scope isn't inside any object method, this is likely to be:

// {} in strict Node.js module

// Or undefined in strict mode

//Non - strict mode example

const obj ={
  name:"parvez",
  fn:function(){
  console.log(this, "inside fn")
      const y= function(){
          console.log(this, "inside y");
          const ob = {
              age:20,
              fnn:function(){
                  console.log(this, "inside ob");
              }
          }
          ob.fnn();
          const z=()=>{
              console.log(this, "inside z");
          }
          z();
      }
      y();
}
}

obj.fn();

// ✅ Non-Strict Mode

// const obj = { ... }
// obj.fn();
// Output Summary:

// this inside fn → refers to obj

// this inside y → refers to global (non-strict, standalone function)

// this inside ob.fnn → refers to ob (method of object)

// this inside arrow function z → same as y's this → global (lexically inherited)

//Strict mode example
"use strict"
const obj1 ={
  name:"parvez",
  fn:function(){
  console.log(this, "inside fn")
      const y= function(){
          console.log(this, "inside y");
          const ob = {
              age:20,
              fnn:function(){
                  console.log(this, "inside ob");
              }
          }
          ob.fnn();
          const z=()=>{
              console.log(this, "inside z");
          }
          z();
      }
      y();
}
}

obj1.fn();

// ✅ Strict Mode

// "use strict"
// const obj = { ... }
// obj.fn();
// Output Summary:

// this inside fn → refers to obj

// this inside y → undefined (strict + standalone function)

// this inside ob.fnn → refers to ob

// this inside arrow function z → same as y's this → undefined (lexical)

// 🔁 this keyword summary:
// ✅ Non-strict mode:
// Agar koi normal function direct call ho raha hai (kisi object ka method nahi hai), to this → global object (browser me window, Node me global).

// 🔒 Strict mode:
// Direct function call me this → undefined (kyunki strict mode me default global binding hata di gayi hoti hai).

// 🧱 Method of object:
// Agar function ko object ke method ke roop me call kiya jaye to this → object khud.

// ➡️ Arrow function:
// Arrow function me this → lexically inherit hota hai, yaani uske parent scope ka this use hota hai. Yeh khud ka this define nahi karta.

// 🔄 Arrow vs Normal function:

// Arrow Function → outer (lexical) this use karega.

// Normal Function → apne context ke according this set karega (jaha se call hua hai, uspe depend karega).

