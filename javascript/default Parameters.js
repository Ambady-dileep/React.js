// What is Default Parameters?
// Default parameters let you assign a default value to a function parameter if no value is passed.

function greet(name = "Guest") {
  console.log("Hello, " + name);
}

greet("Ambady");   // Hello, Ambady
greet();           // Hello, Guest ✅
