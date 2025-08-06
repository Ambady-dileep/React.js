// Object.seal() - (Prevents adding/removing keys but allows modifying existing values)

// const obj = { name: "Ambady" };
// Object.seal(obj);
// obj.name = "Rahul"; // Works
// obj.age = 20; // Won't add

// // Seal { name: "Ambady", city: "Alappuzha" } and change city.
// const arr = { name: "Ambady", city: "Alappuzha" }
// Object.seal(arr)
// arr.city = "Kollam"
// console.log(arr)

// // Seal car and try to add color.
// const car = { brand: "BMW", model: "X5" };
// Object.seal(car);

// car.color = "Black"; // ❌ Cannot add new properties
// console.log(car);

// // Seal student and delete marks.
// const student = { name: "John", marks: 95 };
// Object.seal(student);

// delete student.marks; // ❌ Cannot delete properties
// console.log(student);

// // Seal book and update title.
// const book = { title: "Atomic Habits", author: "James Clear" };
// Object.seal(book);

// book.title = "Deep Work"; // ✅ Allowed (updating existing property)
// console.log(book);

// // Seal empty object and try to add properties.
// const emptyObj = {};
// Object.seal(emptyObj);

// emptyObj.key = "value"; // ❌ Cannot add new properties
// console.log(emptyObj);
