//Examples

const user = {
  name: "Parvez",

  getArrow: function () {
      const b="khan"
    return () => {
      console.log("Arrow inside getArrow:", this.name,b);// Yha ek arrow function hai or arrow function ke pass apna this nhi hota hai vo apne parent se inherit krta hai , isliye yaha getarrow object ke context me calll hua or usme name property hai isliye this.name me name ki value aayegii
    };
  },

  getRegular: function () {
    return function () {
      console.log("Regular inside getRegular:", this.name);// Yha ye normal function hai or normal function ye dekhta hai ki vo kiske context me call hua hai jab ye function return hua pr vo kisi ke context me call nhi hua isliye vaha this.name ki value undfined deraha hai
    };
  }
};

const arrowFn = user.getArrow();
const regularFn = user.getRegular();

arrowFn();    //Parvez
regularFn(); // Undefined 


// 🔧 Why arrowFn() prints "Parvez"?
// getArrow() is a method in user, so this refers to user

// Arrow functions do not have their own this

// So, this.name inside arrow function = "Parvez" (from its parent scope)

// ✅ Arrow function remembers its parent this

// ❌ Why regularFn() prints undefined?
// getRegular() returns a regular function

// Regular functions get their own this, depending on how they are called

// When regularFn() is called without context, this becomes:

// undefined in strict mode

// global in non-strict mode (so this.name → undefined if not defined globally)

//2nd
const dev = {
  name: "Parvez",

  outer: function () {
    const level1 = () => {
        
        console.log("Level 1:", this.name);// Yha level 1 ek arrow function hai unka parent ek normal function hai pr kyuki normal function ek object ke context me call hua hai isliye object ki properties se name ki value this.name me print hojayegi
        
      const level2 = function () {
          
        const level3 = () => {
            
            
          console.log("Level 3:", this.name);// pr level 3 ek arraow function hai vo apne parent ko dekhega ek normal function hai level2 jab vo call hua lekin without any context call hua isliye vo undefined dega jab parent undefined hai isliye level 3 arraow function bhi undefined dega 
        };
        level3();
      };
      level2();
    };
    level1();
  }
};

dev.outer(); // ❓ Output?

const user1 = {
  name: "Parvez",

  getNameArrow: () => {
    console.log("getNameArrow:", this.name);// Arrow function humesha parent functionnnnnnn ko dekhega yaha pr getNameArrow ka koi parent function nhi haiii isliyee vo window ko refer karega window me koi bhi name nhi hai islliye undefined degaa
  },

  getNameRegular() {
    console.log("getNameRegular:", this.name);
  },

  nested: {
    name: "Nested Parvez",
   
    getArrow: () => {
      console.log("nested.getArrow:", this.name);
    },

    getRegular() {
      console.log("nested.getRegular:", this.name);
    },

    getMixed: function () {
        
      const arrowFn = () => {
        console.log("nested.getMixed.arrowFn:", this.name); // Nested Parvez
      };

      const regularFn = function () {
        console.log("nested.getMixed.regularFn:", this.name);//undeifned
      };

      arrowFn();    
      regularFn();   
    }
  }
};

const detachedArrow = user1.getNameArrow;
const detachedRegular = user1.getNameRegular;


user1.getNameArrow();  
user1.getNameRegular(); // Yha getnameRegular ek normal function but yaha vo ek object ke context me calll horha hai isliye name ki value degaa 


detachedArrow();    
detachedRegular();   // detached regular me ek function hai or aab ye kisi ke contetx me call nhi hua isliyee undefined deraha hai   //undefined   























