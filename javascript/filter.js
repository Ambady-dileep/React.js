// What is filter()?
// filter() is used to pick items from an array that meet a certain condition. It returns a new array with only those elements.

// 💡 Syntax:
// const newArray = originalArray.filter(function(item) {
//   return condition;
// });
// OR:
// const newArray = array.filter(item => item > 10);

// // Filter numbers greater than 10
// const nums = [1,2,42,3,26,7]
// const result = nums.filter(num=>(num>10))
// console.log(result)

// // Filter even numbers
// const numbers = [1, 2, 3, 4, 5, 6];
// const result = numbers.filter(num=>num%2===0);
// console.log(result)

// // Filter names starting with "A"
// const names = ["Ambady", "Rahul", "Anu", "Manu"];
// const startsWithA = names.filter(name => name.startsWith("A"));
// console.log(startsWithA); // ["Ambady", "Anu"]

