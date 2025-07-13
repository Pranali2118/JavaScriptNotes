//✅ Day 6: Function Calling, Assignment, and Return Behavior

//1. Normal Function Call

function myteam() {
  console.log("myteamm");
}
myteam();//🧾 Output: myteamm

// ✅ It's a simple function call — it just runs the code inside.

//🔹 2. Calling Function Inside console.log()
console.log(myteam()); //🧾 Output: myteamm  undefined

//✅ First line is printed from console.log() inside the function
//❌ Second line is undefined because the function doesn’t return anything.

//🔹 3. Assigning Function to a Variable (Function Expression)

function a() {
  console.log("hello");
}

let b = a;
console.log(b);// [Function: a] ✅ You assigned the function itself, not its result. b now holds the reference to function a.


// .

// 🔹 4. Calling Function & Assigning Return Value

b = a();  // Calls `a()`, runs its code
console.log(b);// hello undefined ✅ The function runs and logs "hello" ❌ But it doesn’t return anything, so b becomes undefined.


// 🔹 5. Assign Function, Then Call the New Variable
b = a;
console.log(b());// hello undefined ✅ You're calling the function via the new variable. Still no return, so again — undefined.


// 🔹 6. Function That Returns a Value

function xyz() {
  console.log("xyz");
  return 5;
}

xyz();                 // Only prints xyz
console.log(xyz());    // Prints xyz then 5
//✅ First call prints "xyz" ✅ Second call prints "xyz" and then the returned value (5)

//🔹 7. Functions Inside Objects (this keyword)

let x = {
  name: "parvez",
  y: function () {
    console.log("inside x object");
    return this.name;
  }
};

let z = x.y();
console.log(z);// inside x object parvez

// ✅ this.name refers to x.name, which is "parvez"
// ✅ You first get the log, then the return value

