// ==== Challenge 1: Write your own closure ====
// Write a simple closure of your own creation.  Keep it simple!
// Galaxies!

whatIsYourName = (name) =>{
if (name === undefined) {
   enteredName = "Error - Name field is left blank";
} else {
  enteredName = name;
}
return () => {
  return `Name: ${enteredName}`;
  };
};



newName = whatIsYourName();
console.log(newName())
newName = whatIsYourName("Joe");
console.log((newName.enteredName));
console.log(newName());



/* STRETCH PROBLEMS, Do not attempt until you have completed all previous tasks for today's project files */


// ==== Challenge 2: Create a counter function ====

const counter = () => {
 let count = 0;
return () => {
  ++count;
  return count;
  }
}
const myCounter = counter();
const myOtherCounter = counter();
console.log(myCounter());
console.log(myCounter());
console.log(myCounter());
console.log(myOtherCounter());



// Example usage: const newCounter = counter();
// newCounter(); // 1
// newCounter(); // 2

// ==== Challenge 3: Create a counter function with an object that can increment and decrement ====
const counterFactory = () => {
  // Return an object that has two methods called `increment` and `decrement`.
  // `increment` should increment a counter variable in closure scope and return it.
  // `decrement` should decrement the counter variable and return it.
};
