// ✊ Before You Learn Promises — Master These First:
// If you don’t understand the basics below, Promises will confuse the hell out of you. So here’s your checklist:

// 1. JavaScript Execution Model
// JS is single-threaded
// Runs code line-by-line
// Uses event loop to handle async things like setTimeout, fetch, etc.

// 2. Synchronous vs Asynchronous
// Sync: Executes step-by-step (blocking)
// Async: Doesn’t wait — executes later (non-blocking)

// 3. Functions & Callbacks
// Understand what functions are
// Understand how callback functions work
// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }
// greet("Ambady", function () {
//   console.log("How are you?");
// });

// 4. setTimeout and setInterval
// These help you simulate async behavior.
// console.log("Start");
// setTimeout(() => console.log("Middle (after 2 sec)"), 2000);
// console.log("End");


// Synchronous(Normal tasks) : Executes line by line, one after the another and each line block untill next line finishes.
// Asynchronous(Delayed tasks) : Doesn't block next lines.Sent to Web APIs, then added back later via Event Loop.
// console.log("1")
// setTimeout(()=>console.log("2"),1000);
// console.log("3")
// Call Stack : How JS executes functions. A stack (LIFO) where JS remembers what to run next. Each function call is added (pushed), and removed (popped) once done.
// Event Loop — The Traffic Police 🚦
// ➤ What is the Event Loop?
// It constantly checks if the Call Stack is empty. If it is, it checks the queues to see if anything is waiting to run.
// 🔁 Event Loop Logic:
// 1. Is the Call Stack empty?
// 2. If yes → Run all Microtasks first (Promises).Eg:Promise.then, queueMicrotask, MutationObserver
// 3. Then run one task from the Callback Queue (like setTimeout).Eg:setTimeout,setInterval(),DOM Events
// 💣 Golden Rule (NEVER FORGET): Promises (microtasks) run before setTimeout (macrotasks) when the Call Stack is empty.
// A Promise in JavaScript is a way to handle asynchronous operations (like fetching data from a server, reading a file, etc).
// It’s like saying: "I promise to give you the result later."

// console.log("Start");
// setTimeout(()=>{
//     console.log("Timeout");
// },2000)
// Promise.resolve().then(()=>{
//     console.log("Promise");
// })
// console.log("End");


// setTimeout(() => {
//   console.log("setTimeout");
// }, 0);

// Promise.resolve()
//   .then(() => {
//     console.log("Promise 1");
//     return Promise.resolve();
//   })
//   .then(() => {
//     console.log("Promise 2");
//   },3000);           

// console.log("End");



// const myPromise = new Promise((resolve, reject) => {
//   // Asynchronous task
//   let success = true;

//   if (success) {
//     resolve("✅ Promise fulfilled!");
//   } else {
//     reject("❌ Promise failed!");
//   }
// });

// myPromise.then((result) => {
//   console.log(result); // if resolved
// }).catch((error) => {
//   console.log(error); // if rejected
// });

// const myPromise = new Promise((resolve,reject)=>{
//     let success = false;
//     if(success){
//         resolve("Promise fulfilled!");
//     }else{
//         reject("Promise ")
//     }
// });

// myPromise
//   .then((result) => {
//     console.log("Result:", result);
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });



function checkName(name){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if (name === "Ambady"){
                resolve("✅ Ambady is here!");
            }else{
                reject("❌ Ambady is missing.");
            }
        },3000)
    });
}
checkName("Ambady")
.then((msg)=>console.log(msg))
.catch((error)=>console.log(error))
.finally(()=>console.log("🧹 Always runs: clean-up"))
// finally(): Runs no matter what — whether the promise is resolved or rejected.
// Great for cleanup tasks, loading spinners, etc.
