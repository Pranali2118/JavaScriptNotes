// Examples
const app = {
  name: "MainApp",

  outerMethod: function () {
    console.log("outerMethod:", this.name);//MainAPP

    const innerObject = {
      name: "InnerObject",
      regularFn: function () {
        console.log("innerObject.regularFn:", this.name); 

        const arrowFn = () => {
          console.log("arrowFn inside regularFn:", this.name); 
        };

        arrowFn(); // InnerObject
      },

      arrowFnAsMethod: () => {
        console.log("arrowFnAsMethod:", this.name);
      }
    };

    innerObject.regularFn();// InnerObject
    innerObject.arrowFnAsMethod();  //InnerObject
  }
};

const a=app.outerMethod;
a();

//Output
// outerMethod: undefined
// innerObject.regularFn: InnerObject
// arrowFn inside regularFn: InnerObject
// arrowFnAsMethod: undefined
// ✅ Output Summary:
// outerMethod: undefined
// → Because a() was called without an object, this is undefined.

// innerObject.regularFn: InnerObject
// → Regular function was called via innerObject, so this refers to innerObject.

// arrowFn inside regularFn: InnerObject
// → Arrow function takes this from its lexical scope (i.e., from regularFn), so this = innerObject.

// arrowFnAsMethod: undefined
// → Arrow function used directly as object method, but its this comes from where outerMethod was called (which was undefined), so this = undefined.


//2nd

const app1 = {
  name: "MainApp",

  outerMethod: function () {
    console.log("outerMethod:", this.name);//MainAPP

    const innerObject = {
      name: "InnerObject",
      regularFn: function () {
        console.log("innerObject.regularFn:", this.name); 

        const arrowFn = () => {
          console.log("arrowFn inside regularFn:", this.name); 
        };

        arrowFn(); // InnerObject
      },

      arrowFnAsMethod: () => {
        console.log("arrowFnAsMethod:", this.name);
      }
    };

    innerObject.regularFn();// InnerObject
    innerObject.arrowFnAsMethod();  //InnerObject
  }
};

app1.outerMethod();


// output
// outerMethod: MainApp
// innerObject.regularFn: InnerObject
// arrowFn inside regularFn: InnerObject
// arrowFnAsMethod: MainApp
// ✅ Output Summary:
// outerMethod: MainApp
// → Called as app.outerMethod(), so this refers to app.

// innerObject.regularFn: InnerObject
// → Regular function is called via innerObject, so this = innerObject.

// arrowFn inside regularFn: InnerObject
// → Arrow function inherits this from regularFn, which is innerObject.

// arrowFnAsMethod: MainApp
// → Arrow function inherits this from the outer outerMethod() where this = app.

// 🧠 Key Concept:

// Regular functions → this depends on how the function is called.

// Arrow functions → this is lexically inherited from the surrounding scope.

//3rd
const user = {
  name: "Parvez",
  age: 25,

  showInfo: function () {
    console.log("Outer Regular Function:", this.name);   // Parvez

    setTimeout(function () {
      console.log("Inner setTimeout Regular:", this.name);// undefined
    }, 1000);

    setTimeout(() => {
      console.log("Inner setTimeout Arrow:", this.name);// Parvez
    }, 2000);
  }
};

user.showInfo();


// output
// Outer Regular Function: Parvez
// Inner setTimeout Regular: undefined
// Inner setTimeout Arrow: Parvez
// ✅ Output Summary:

// Outer Regular Function: Parvez
// → showInfo is a regular method called on user, so this = user.

// Inner setTimeout Regular: undefined
// → Regular function inside setTimeout has its own this, which (in strict mode) is undefined.

// Inner setTimeout Arrow: Parvez
// → Arrow function inherits this from its outer scope (showInfo), so this = user.

// 🧠 Key Concept:

// Regular function inside setTimeout loses this context.

// Arrow function keeps outer this.

//4th

function Person(name) {
  this.name = name;  // Parvez

  this.sayHello = function () {
    console.log("Outer function this.name:", this.name);  // Parvez

    // Regular function (inner)
    function innerRegular() {
      console.log("Inner Regular Function this.name:", this.name); // ❌ undefined or window.name
    }
    const innerArrow = () => {
      console.log("Inner Arrow Function this.name:", this.name); 
    };

    innerRegular();//window
    innerArrow();// window
};
}

const p = new Person("Parvez");
p.sayHello();


// output
// Try programiz.pro
// Outer function this.name: Parvez
// Inner Regular Function this.name: undefined
// Inner Arrow Function this.name: Parvez

// ✅ Output Summary:

// Outer function this.name: Parvez
// → sayHello is called on object p, so this = p.

// Inner Regular Function this.name: undefined
// → Regular function (innerRegular) has its own this → defaults to undefined in strict mode (or window in non-strict).

// Inner Arrow Function this.name: Parvez
// → Arrow function (innerArrow) inherits this from sayHello, so this = p.

//5th

const user1 = {
  name: "Parvez",
  greet: function () {
    console.log("1:", this.name); //khan

    const inner = () => {
      console.log("2:", this.name);//khan
    };

    inner();
  },
};

const anotherUser = {
  name: "Khan",
  greet: user1.greet,
};

anotherUser.greet();// 

// 🧠 Summary (Concept Used: this + Arrow Function):

// anotherUser.greet() calls user.greet but with this bound to anotherUser, so:

// this.name inside greet() becomes "Khan" ✅

// inner is an arrow function, which inherits this from its enclosing scope (here: greet()), so:

// this.name inside inner() also logs "Khan" ✅

// 📌 Key Concept:

// Arrow functions do not have their own this; they use the this of their outer function.

// Regular function inside another object → this depends on how the function is called, not where it's defined.

//6th

const counter = {
  count: 0,
  start: ()=> {
    setTimeout(function () {
    //  this.count++;
      console.log("Regular:", this.count);///undfined
    }, 1000);

    setTimeout(() => {
     // this.count++;
      console.log("Arrow:", this.count);//undfined
    }, 2000);
  },
};

counter.start();

// 🧠 Summary:

// start is an arrow function, so it inherits this from the outer scope (most likely global or undefined in strict mode) ❌ not counter.

// Inside start, both setTimeout functions try to access this.count, but:

// In the first setTimeout, the regular function’s this refers to window (or undefined in strict mode) → this.count is undefined.

// In the second setTimeout, the arrow function tries to inherit this from start, but start itself doesn't have this bound to counter → again undefined.


//7th

const counter1 = {
  count: 0,
  start: function () {
    setTimeout(function () {
    //  this.count++;
      console.log("Regular:", this.count);///undefined
    }, 1000);

    setTimeout(() => {
      this.count++;
      console.log("Arrow:", this.count);//1
    }, 2000);
  },
};

counter1.start();

// 🧠 Summary:

// start is a regular function, so this correctly refers to the counter object inside it.

// Inside setTimeout:

// The first function is a regular function, so its this becomes window (or undefined in strict mode) → this.count is undefined.

// The second one is an arrow function, which inherits this from the start method → it correctly accesses counter.count and increments it to 1.


//7th

var count=5;
global.count=count;

console.log(global);
const counter2 = {
  count: 0,
  start: ()=> {
    setTimeout(function () {
      this.count++;
      console.log("Regular:", this.count);///1 
    }, 1000);

    setTimeout(() => {
      this.count++;
      console.log("Arrow:", this.count);//2
    }, 2000);
  },
};

counter2.start();

// 🧠 Summary:

// You set global.count = 5 and then ran two timeouts inside counter.start() (which is an arrow function).

// Since start is an arrow function, it doesn't bind its own this, so this inside both setTimeout callbacks refers to the global object.

// You increment global.count twice:

// Once in regular function → 5 → 6

// Once in arrow function → 6 → 7




