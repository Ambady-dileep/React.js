// // Get all keys of an object and print them as an array.
// const user = { name: "John", age: 25, city: "Delhi" };
// console.log(Object.entries(user))
// // Expected Output: ["name", "age", "city"]

// // Get all values of an object and print them.
// const product = { id: 101, price: 500, brand: "Nike" };
// console.log(Object.values(product))
// // Expected Output: [101, 500, "Nike"]

// // Convert an object into an array of [key, value] pairs.
// const car = { brand: "BMW", model: "X5", year: 2020 };
// let result = Object.entries(car);
// console.log(result)
// // Expected Output: [["brand","BMW"], ["model","X5"], ["year",2020]]

// // Merge two objects into one.
// const obj1 = { a: 1, b: 2 };
// const obj2 = { c: 3, d: 4 };
// console.log(Object.assign(obj1,obj2))
// // Expected Output: { a:1, b:2, c:3, d:4 }

// // Make an object immutable and try to update a property.
// const student = { name: "Alice", marks: 90 };
// Object.freeze(student)
// student.name = "Arjun"
// console.log(student)
// // // Use Object.freeze() and try updating marks

// ✅ Arrays (Basic Practical Questions)

// // Remove duplicates from an array.
// const array = [1,2,2,3,4,4,5];
// const result = array.filter((value, index)=>array.indexOf(value)===index)
// console.log(result)
// const array = [1, 2, 2, 3, 4, 4, 5];
// const result = [...new Set(array)];
// console.log(result); 
// // Expected Output: [1,2,3,4,5]

// // Sort an array of numbers in ascending order.
// const array2 = [10, 5, 20, 15];
// const result = array2.sort((a,b)=>a-b)
// console.log(result)
// // // Expected Output: [5, 10, 15, 20]

// // Reverse an array with a loop.
// const array3 = ["apple", "banana", "grape"];
// let reversed = []
// for (let i=array3.length-1;i>=0;i--){
//     reversed.push(array3[i])
// }
// console.log(reversed);
// // Expected Output: ["grape", "banana", "apple"]

// // Find if an array includes a specific value.
// const array4 = ["React", "HTML", "CSS", "JavaScript"];
// let result = array4.includes("HTML")
// console.log(result)
// // // Check if "CSS" exists

// // Convert an array to a string separated by -.
// const array5 = ["red", "green", "blue"];
// const result = array5.join("-")
// console.log(result)
// // // Expected Output: "red-green-blue"