// What is a Callback?
// A callback is a function passed as an argument to another function, and it is called back later.

// function greet(name,callback){
//     const message = "Hello, "+name;
//     callback(message);
// }
// function logMessage(msg){
//     console.log(msg);
// }
// greet("Ambady", logMessage); // Hello, Ambady ✅

// // Create a function calculate(a, b, operation) that takes two numbers and a callback function (like add, multiply) and returns the result.
// const add = (x,y) => x+y;
// const multiply = (x,y) => x*y;

// function calculate(a,b,operation){
//     return operation(a,b);
// }
// console.log(calculate(4,4,add))
// console.log(calculate(4,4,multiply))

