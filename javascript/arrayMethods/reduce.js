// 🔹 What is reduce() – The Power Tool?
// reduce() is used to take an array and reduce it to a single value (like total sum, max value, or combining strings).
// 💡 Syntax:
// const result = array.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, initialValue);

// accumulator: stores the result (starts with initialValue)
// currentValue: current item from the array

// // Sum all numbers
// const nums = [10, 20, 30];
// const total = nums.reduce((acc,curr)=>acc+curr,0);
// console.log(total); 

// // Find the maximum
// const nums = [5, 12, 8, 21];
// const result = nums.reduce((arr,curr)=>curr>arr?curr:acc,nums[0]);
// console.log(max)

// Combine strings
const words = ["Ambady", "is", "learning"];
const sentence = words.reduce((acc,word)=>acc+' '+word);
console.log(sentence)








































