// // splice() ➡ Adds/removes elements (modifies original).
// ✅ Easy Rule to Remember:
// Want to remove? → splice(startIndex, howManyToRemove)
// Want to add? → splice(startIndex, 0, newItems...)
// Want to replace? → splice(startIndex, howManyToRemove, newItems...)

// const nums = [10, 20, 30];
// nums.splice(1, 1); // Remove 1 element at index 1
// console.log(nums); // [10, 30]

// splice() – (Adds/removes items – modifies original array)
// // Remove 1 element at index 2 from [10, 20, 30, 40].
// const arr = [10, 20, 30, 40];
// const result = arr.splice(1);
// console.log(result)

// // Insert "grape" at index 1 in ["apple", "banana"].
// const arr = ["apple", "banana"]
// arr.splice(1,0,"grape");
// console.log(arr)

// // Replace 2 elements starting at index 1 in [1, 2, 3, 4] with [9, 8].
// const arr = [1, 2, 3, 4];
// arr.splice(0,4,9,8)
// console.log(arr)

// // Remove last element using splice() from [100, 200, 300].
// const arr = [100, 200, 300];
// arr.splice(arr.length-1,1)
// console.log(arr)

// // Add "orange" and "mango" at index 2 in ["apple", "banana", "grape"].
// const arr = ["apple", "banana", "grape"]
// arr.splice(2,0,"orange","mango")
// console.log(arr)