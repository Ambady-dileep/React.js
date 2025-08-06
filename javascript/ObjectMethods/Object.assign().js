// Object.assign() - (Copies properties from one object to another)
// Syntax : Object.assign(target, ...sources)
// target → The object that will receive properties.
// sources → One or more objects whose properties will be copied to the target.

// const target = { a: 1 };
// const source = { b: 2, c: 3 };
// Object.assign(target, source);
// // target = { a: 1, b: 2, c: 3 }

// // Merge { name: "Ambady" } with { age: 18 }.
// const arr1 = { name: "Ambady" }
// const arr2 = { age: 18 }
// console.log(Object.assign(arr1,arr2))

// // Merge { brand: "BMW" } with { model: "X5", year: 2025 }.
// const arr1 = { brand: "BMW" }
// const arr2 = { model: "X5", year: 2025 }
// console.log(Object.assign(arr1,arr2))

// // Merge three objects: {a:1}, {b:2}, {c:3}.
// const obj1 = { a: 1 }
// const obj2 = { b: 2 }
// const obj3 = { c: 3 }
// console.log(Object.assign({}, obj1, obj2, obj3))

// // Copy properties of {country:"India"} to an empty object {}.
// array = {country:"India"}
// EmptyArray = {}
// console.log(Object.assign(EmptyArray,array))