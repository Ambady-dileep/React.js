// // sort() ➡ Sort elements as strings by default.

// const nums = [10, 2, 30];
// console.log(nums.sort()); // [10, 2, 30] (Wrong for numbers!)

// ✅ Correct way for numbers:
// console.log(nums.sort((a, b) => a - b)); // [2, 10, 30]

// sort() – (Sorts elements — beware of string sorting by default)
// // Sort [4, 2, 9, 1] in ascending order.
// const arr = [4, 2, 9, 1];
// arr.sort()
// console.log(arr)

// // Sort [4, 2, 9, 1] in descending order.
// const arr = [4, 2, 9, 1];
// arr.sort((a,b)=>a-b)
// console.log(arr)

// // Sort ["apple", "banana", "grape"] alphabetically.
// const arr = ["apple", "banana", "grape"]
// arr.sort((a,b)=>b-a)
// console.log(arr)

// // Sort ["React", "HTML", "CSS", "JavaScript"].
// const arr = ["React", "HTML", "CSS", "JavaScript"]
// arr.sort();
// console.log(arr);

// // Sort [100, 20, 5, 300] correctly as numbers.
// const arr = [100, 20, 5, 300];
// arr.sort((a, b) => a - b); // Ascending
// console.log(arr);

