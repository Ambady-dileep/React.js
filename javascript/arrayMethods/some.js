// // some() ➡ Checks if at least one element meets the condition.

// const nums = [1, 3, 5];
// console.log(nums.some(n => n % 2 === 0)); // false

// some() – (Returns true if at least one element matches the condition)
// // Check if any number is greater than 50 in [10, 20, 70, 30].
// const arr = [10, 20, 70, 30];
// const result = arr.some(x=>x>50)
// console.log(result)

// // Check if any name starts with "A" in ["Rahul", "Ambady", "Manu"].
// const names = ["Rahul", "Ambady", "Manu"];
// const result1 = names.some(name => name.startsWith("A"));
// console.log(result1); // true

// // Check if any number is negative in [1, 2, 3, -4, 5].
// const nums = [1, 2, 3, -4, 5];
// const result2 = nums.some(num => num < 0);
// console.log(result2); // true

// // Check if any word has more than 6 letters in ["apple", "banana", "kiwi"].
// const words = ["apple", "banana", "kiwi"];
// const result3 = words.some(word => word.length > 6);
// console.log(result3); // false

// // Check if any number is divisible by 10 in [11, 22, 33, 40].
// const numbers = [11, 22, 33, 40];
// const result4 = numbers.some(num => num % 10 === 0);
// console.log(result4); // true

