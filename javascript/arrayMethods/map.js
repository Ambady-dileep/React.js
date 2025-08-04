// map() takes an array, applies a function to each element, and returns a new array.
// 💡 Syntax:
// const newArray = oldArray.map(function(currentItem, index, array) {
  // return the transformed item
// });
// OR with arrow function:
// const newArray = oldArray.map(item => item * 2);

// // Double the numbers
// const nums = [1,2,3,4];
// const doubled = nums.map(num=>num*2)
// console.log(doubled)

// //  Add ₹ to prices
// const prices = [10,30,50]
// const withRupees = prices.map(price=>`₹${price}`);
// console.log(withRupees);

// // Capitalize names
// const names = ["ambady", "rahul", "manu"];
// const capitalized = names.map(name => name.toUpperCase());
// console.log(capitalized)

// // Add 10 to every number in this array: [5, 10, 15, 20]
// const array = [5, 10, 15, 20]
// const result = array.map(num=>num+10);
// console.log(result)

// // Convert ["html", "css", "js"] to uppercase
// const words = ["html", "css", "js"]
// const result = words.map(word=>word.toUpperCase())
// console.log(result)

// // From ["Ambady", "Rahul"] create: ["Hello Ambady", "Hello Rahul"]
// const words = ["Ambady", "Rahul"]
// const result = words.map(word=>`Hello ${word}`)
// console.log(result)


//  2. map() – 5 Questions
// (Transforms arrays into new ones)

// Square each number in [1, 2, 3, 4].

// Convert ["dog", "cat", "cow"] to uppercase.

// From [1, 2, 3], create ["Number: 1", "Number: 2", "Number: 3"].

// Add 5 to every number in [10, 20, 30, 40].

// From ["Ambady", "Rahul"] create greetings like ["Hello Ambady", "Hello Rahul"].

