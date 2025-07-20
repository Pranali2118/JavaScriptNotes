//Example

const user = {
  name: "Parvez",
  getName: function () {
     function test () {
      console.log("Inner this.name:", this.name);
    };
    return test;
  }
};



const fn = user.getName();
fn();//undefined

//  Why is it undefined?
// getName() is a regular function, so this inside it refers to the user object.

// But inside getName(), you're declaring another regular function test.

// When you return test and then call fn() (which is test()), it is invoked without any context, so this inside test becomes:

// undefined in strict mode

// window (or global) in non-strict mode — but since window.name isn’t set, it's undefined.


//2

// closure Concept - when a function is called inside a another fucntion it remembers the value from its parent even after the parent function is done running- but it is not case with object 
function outer() {
    const msg = "hello";   // `msg` belongs to outer()
    
    function inner() {
        console.log(msg);  // inner() can still access `msg` even after outer() is done
    }

    return inner; // returning inner function without calling it
}

const myfun = outer(); // outer() runs and returns inner function
myfun(); // calls inner(), which still remembers `msg = "hello"`

// 🧾 Key Takeaways:
// Even though outer() has finished running, myfun() (which is inner) can still access msg because of the closure.

// The function "remembers" the environment in which it was created.
// // 🔁 What is Closure?
// A closure is created when:

// A function is defined inside another function, and

// The inner function retains access to the outer function’s variables, even after the outer function has finished executing.

//3rd

class Developer {
  constructor(name) {
    this.name = name; // this → instance of Developer
  }

  sayHi() {
    // Regular function inside setTimeout
    setTimeout(function () {
      console.log("Regular function:", this.name);
    }, 1000);

    // Arrow function inside setTimeout
    setTimeout(() => {
      console.log("Arrow function:", this.name);
    }, 2000);
  }
}

// 🧾 1. Regular Function:

// setTimeout(function () {
//   console.log("Regular function:", this.name);
// }, 1000);
// Here, this refers to the global object (window in browsers, global in Node.js), not the class instance.

// So this.name is undefined.

// 🧾 2. Arrow Function:

// setTimeout(() => {
//   console.log("Arrow function:", this.name);
// }, 2000);
// Arrow functions do not have their own this.

// They inherit this from the surrounding scope, which in this case is the sayHi method.

// sayHi was called on the dev object, so this refers to the Developer instance → ✅ this.name = "Parvez"



//4th

function Car(name) {
  this.name = name; // this → refers to the instance of Car

  this.start = function () {
    console.log("Outer this.name:", this.name); // ✅ Ferrari

    function engineStart() {
      console.log("Inner this.name:", this.name); // ❌ undefined
    }

    engineStart();
  };
}

const myCar = new Car("Ferrari");
myCar.start()
// 🧾 this.start() is called on myCar, so:
// this inside start() refers to myCar

// ✅ So this.name → "Ferrari"

// 🔁 engineStart() is a regular function, called without object context
// So its this refers to the global object

// this.name is undefined
const user1 = {
  name: "Parvez",

  greet: function () {
    console.log("1. Regular function this.name:", this.name);  // ✅ Parvez

    const inner = () => {
      console.log("2. Arrow function this.name:", this.name);  // ✅ Parvez
    };

    inner();
  }
};

user1.greet();

// 🔹 Line 1: Regular Function
// greet() is a regular function called with user.greet()

// So this refers to the user object → this.name = "Parvez"

// 🔹 Line 2: Arrow Function inside Regular Function
// inner() is an arrow function

// Arrow functions do not have their own this, they inherit it from the surrounding scope

// So this inside inner() = this from greet() = user → this.name = "Parvez"

//6th

function c(){
    console.log("hello");
}
let a={
    value: 20,
    greet: function (){
    console.log(this);// object
        const y=()=>{
            console.log(this);//object
            const z=()=>{
                console.log(this);//object
                const b=()=>{
                    console.log(this);//object
                     function c(){
                        console.log(this);
                    }
                    c();// window
                    global.c(); undefined
                }
                b();
            }
            z();
        }
        y();
    }
    
}
a.greet();



// ✅ Summary Table:
// Function Type	this Refers To
// greet()	a object
// y, z, b	Inherited → still a
// regular c()	undefined (in strict) / global (non-strict)
// global.c()	undefined (not globally defined)