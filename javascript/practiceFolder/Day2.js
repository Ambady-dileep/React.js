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



// function checkName(name){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (name === "Ambady"){
//                 resolve("✅ Ambady is here!");
//             }else{
//                 reject("❌ Ambady is missing.");
//             }
//         },3000)
//     });
// }
// checkName("Ambady")
// .then((msg)=>console.log(msg))
// .catch((error)=>console.log(error))
// .finally(()=>console.log("🧹 Always runs: clean-up"))
// // finally(): Runs no matter what — whether the promise is resolved or rejected.
// // Great for cleanup tasks, loading spinners, etc.


// // Chaining in Promise
// function double(num){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Doubling:",num);
//             resolve(num*2);
//         },1500);
//     })
// }
// double(2)
// .then(result1=>{
//     console.log("1st result:",result1);
//     return double(result1);
// })
// .then(result2=>{
//     console.log("2nd result:",result2);
// })
// .then(result3=>{
//     console.log("3rd result:",result3)
// })

// function double(num){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             console.log("Doubling:",num);
//             resolve(num*2);
//         },2000)
//     })
// }
// double(3)
// // return tells the chain: “Wait for this Promise to finish, then pass its resolved value to the next .then().”
// // Each double(resultX) is passing that value into num of the double() function. Yes — each double(result) sends its result as the argument for the next call to double(num)
// .then(result1=>{
//     console.log("First result:",result1);
//     return double(result1)
// })
// .then(result2=>{
//     console.log("Second result:",result2)
//     return double(result2);
// })
// .then(result3=>{
//     console.log("Third result:",result3)
// })


// function fetchData(success){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             if (success){
//                 resolve("✅ Data loaded");
//             } else {
//                 reject("❌ Failed to load data");
//             }
//         },1000);
//     });
// }

// // 1️⃣ .catch() at the END
// fetchData(true)
//     .then(data => {
//         console.log("Step 1:", data);
//         return "More processing...";
//     })
//     .then(msg => {
//         console.log("Step 2:", msg);
//     })
//     .catch(err => {
//         console.error("Caught at end:", err);
//     });

// // 2️⃣ .catch() in the MIDDLE
// fetchData(false)
//     .then(data => {
//         console.log("Step 1:", data);
//     })
//     .catch(err => {
//         console.error("Caught in middle:", err);
//         return "Recovered after error"; // recovery
//     })
//     .then(msg => {
//         console.log("Step 2 after recovery:", msg);
//     });

// // 3️⃣ Error thrown in .then()
// fetchData(true)
//     .then(data => {
//         console.log("Got data:", data);
//         throw "🔥 Something went wrong in processing!";
//     })
//     .catch(err => {
//         console.error("Caught processing error:", err);
//     });

// Event loop - Background loop managing async tasks
// What is a Thread?
// Thread = "an independent line of execution" inside a CPU core.
// A thread is basically the smallest unit of execution in a program — like a worker that runs tasks.
// Think of your computer as an office, and a thread is one employee. That employee can only do one task at a time (but can do it very fast).
// A single-threaded program means there is only one employee doing all the work in sequence.
// Why people get confused
// The JavaScript engine (like V8) is synchronous + single-threaded.
// But the browser/Node.js runtime adds asynchronous capabilities through Web APIs and background threads (e.g., in C++ for I/O).
// These background threads are not part of the JS thread — they’re helpers.


// async marks a function that always returns a Promise.
// await pauses code inside an async function until the Promise resolves. await pauses the function until the Promise is resolved or rejected.
// It lets you write asynchronous code like synchronous code (easier to read).Code looks synchronous, but it’s still non-blocking under the hood.
  
// | Term                                   | Meaning                                             | Example  
// | **Threading**                          | How many CPU execution lines you have (workers)     | Single-threaded = 1 worker, multi-threaded = many     |
// | **Multitasking**                       | Doing more than one *task* in the same time period  | A chef cooking rice **and** boiling water             |
// | **Multi-threading**                    | Special case of multitasking using multiple threads | One thread cooks rice, another boils water            |
// | **Async single-threaded multitasking** | Still one thread, but switches tasks while waiting  | Chef puts rice to boil, while waiting cuts vegetables |


// // Simulating a delay with Promise
// function fetchUserData() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve({ id: 1, name: "Ambady", role: "Student" });
//         }, 2000); // 2 sec delay
//     });
// }
// // Async function using await
// async function getUserProfile() {
//     console.log("Fetching user data...");
//     // await pauses until fetchUserData() Promise is resolved
//     const user = await fetchUserData();
//     console.log("User data received:", user);
//     console.log(`Hello, ${user.name}! You are a ${user.role}.`);
// }
// // Run the async function
// getUserProfile();

// function fetchUserData(){
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             resolve({id:1,name:"Ambady",age:19,role:"Student"});
//         },0);
//     })
// }
// function delay(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms));
// }
// function nextDelay(ms){
//     return new Promise(resolve=>setTimeout(resolve,ms))
// }
// async function getUserProfile(){
//     console.log("Fetching user data....")
//     const user = await fetchUserData();
//     console.log("User data received:",user);
//     await delay(2000);
//     console.log(`Hello, ${user.name}! You are a ${user.role}.`);
//     await nextDelay(2000);
//     console.log("Done")
// }
// getUserProfile()

// What is the job of async?
// When you add async before a function, it makes the function always return a Promise, regardless of what you return inside.
// This allows you to use the await keyword inside that function.
// await pauses the function execution until the awaited Promise resolves.
// So async + await together let you write asynchronous code that looks synchronous, easier to read and manage than callbacks or .then() chains.


// function addNumbers(a, b) {
//   try {
//     if (typeof a !== "number" || typeof b !== "number") {
//       throw new Error("Both inputs must be numbers!");
//     }
//     const sum = a + b;
//     console.log("Sum is:", sum);
//   } catch (error) {
//     console.error("Error:", error.message);
//   }
// }

// // Testing
// addNumbers(5, 7);     // Sum is: 12
// addNumbers(5, "foo"); // Error: Both inputs must be numbers!

// function addNumbers(a,b){
//     try{
//         if (typeof a !== "number" || typeof b !== "number"){
//             throw new Error ("Both value should be number")
//         }
//         const sum = a+b;
//         console.log("Sum is :", sum);
//     }catch(error){
//         console.error("Error:", error.message);
//     }
// }
// addNumbers(2,3)
// addNumbers("sfsd",3)

function findSquare(a,b){
    try{
        const prompt = require('prompt-sync')();
const input = prompt('Enter a number: ');
console.log('You entered:', input);

        if(typeof a !== "number" || typeof b !== "number"){
            throw new Error("Both value should be number")
        }
        const sum = a + b;
        console.log("Sum is:",sum);
    }catch(error){
        console.log("Error:",error.message);
    }
}
findSquare(2,"6")

