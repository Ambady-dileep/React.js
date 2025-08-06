// What is Object.freeze() in JavaScript?
// Object.freeze() is a built-in JavaScript method that freezes an object, meaning:
// You cannot add new properties.
// You cannot remove properties.
// You cannot modify existing property values.
// You cannot change the prototype of the object.
// It makes the object immutable (at the top level).

// const obj = { name: "Ambady" };
// Object.freeze(obj);
// obj.name = "Rahul"; // No change

// Syntax:(object)
// object → The object to freeze.
// Returns the same object after freezing

// ✅ Example 1: Freezing an Object
// const person = { name: "Ambady", age: 18 };
// Object.freeze(person);
// person.age = 21;    // ❌ No effect
// person.city = "Alappuzha"; // ❌ No effect
// delete person.name; // ❌ No effect
// console.log(person);
// Output : { name: 'Ambady', age: 18 }

// ✅ Example 2: Check if an object is frozen
// const car = { brand: "BMW" };
// Object.freeze(car);
// console.log(Object.isFrozen(car)); // true

// ✅ Important Points
// ✔ Object.freeze() works only at top level → Nested objects are not frozen (it’s a shallow freeze).
// ✔ It prevents changes in strict mode by throwing errors; in non-strict mode, it silently fails.
// ✔ To deep freeze an object, you need a custom function that recursively freezes nested objects.

// ✅ Example 3: Nested object is still mutable
// const user = {
//     name: "Ambady",
//     address: { city: "Alappuzha" }
// };
// Object.freeze(user);
// user.address.city = "Kochi"; // ✅ Allowed (because it's nested)
// console.log(user.address.city); // Kochi

// // 1. Freeze { name: "Ambady", age: 18 } and try to change age
// const person = { name: "Ambady", age: 18 };
// Object.freeze(person)
// console.log(person)

// Freeze car object and try to add a new property
// const car = { brand: "BMW" };
// Object.freeze(car);
// car.model = "X5"; // ❌ No effect
// console.log(car);

// // Freeze student object and delete a property.
// student = {
//     name:"Arjun",
//     age:15,
//     gender:"male"
// }
// Object.freeze(student) // ❌ This will not work because the object is frozen
// delete student.name
// console.log(student)

// // Freeze book object and check if update works.
// const book = {
//     name: "Jungle Rummy",
//     published: 150,
//     owner: "Lal"
// };
// Object.freeze(book);
// // Try updating a property
// book.published = 200; // ❌ This will not work
// book.owner = "Arjun"; // ❌ This will not work
// console.log(book);










