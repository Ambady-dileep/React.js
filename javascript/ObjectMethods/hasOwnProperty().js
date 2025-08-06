// hasOwnProperty() - (Checks if object contains a property)

// person.hasOwnProperty("name"); // true
// person.hasOwnProperty("salary"); // false

// // Check if car has "brand".
// const car = { brand: "BMW", model: "X5" };
// console.log("brand" in car);
// console.log(car.hasOwnProperty("brand")); // true

// // Check if student has "age".
// const student = { name: "John", age: 21 };
// console.log("age" in student);             // true
// console.log(student.hasOwnProperty("age")); // true

// // Check if laptop has "price".
// const laptop = { brand: "Dell", processor: "i7" };
// console.log("price" in laptop);             // false
// console.log(laptop.hasOwnProperty("price")); // false

// // Check if empty object has "name".
// const emptyObj = {};
// console.log("name" in emptyObj);             // false
// console.log(emptyObj.hasOwnProperty("name")); // false
