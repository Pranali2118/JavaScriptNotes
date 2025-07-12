// ✅ Day 1: JavaScript Loop
//🔁 Types of Loops/Iterations Covered:
//for...of loop
//for...in loop
//forEach() method
//map() method
//Counting frequency using loop and object


//1. for...of loop (Used for Arrays)
//📌 for...of is used to directly access the values of an array.
//addd

//Example
let a = [2, 3, 4, 5, 6];

for (let i of a) {
    console.log(i); // prints each element: 2, 3, 4, 5, 6
}

//2. for...in loop (Used for Objects)
//📌 for...in is used to iterate over the keys of an object.

//Example
let b = {
    "name": "Parvez",
    "age": "20"
};

for (let i in b) {
    console.log(b[i]); // prints: Parvez, 20
}


//3. forEach() method (Used for Arrays)
//📌 forEach() runs a callback function for each element in the array.
//📌 Best for just printing or performing some operation, doesn’t return a new array.

//Example
a.forEach((d) => {
    console.log(d); // prints each element in array a
});

//4. map() method (Used for Arrays)
//📌 map() creates a new array after performing some operation on each element.
//✅ Use map() when you want to transform data and return a new array.
const res = a.map((d) => {
    console.log(d); // prints each element
    return d;       // returns the element (no change here)
});

console.log(res); // Output: [2, 3, 4, 5, 6]

//5. Count Frequency of Elements in Array
// 📌 Create an empty object, and loop to count how many times each element occurs.

let s = {};
let arr = [1, 2, 2, 3, 4];

for (let i of arr) {
    console.log(s[i], i); // current value of s[i] and current element
    if (s[i]) {
        s[i] = s[i] + 1;
    } else {
        s[i] = 1;
    }
}

console.log(s); // Output: { '1': 1, '2': 2, '3': 1, '4': 1 }







