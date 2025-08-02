// // Add Two Numbers
// const add = function(a,b){
//     return a+b;
// }
// console.log(add(3,5))

// // Check Even or Odd
// const checkEvenOrOdd = function(num){
//     if (num%2==0){
//         return "Even";
//     }else{
//         return "Odd";
//     }
// }
// console.log(checkEvenOrOdd(5))

// // Find the largest of two numbers
// const findLargest = function(a,b){
//     return a>b?a:b;
// }
// console.log(findLargest(4,8))

// // Calculate Factorial
// const Factorial = function(n){
//     let result = 1;
//     for(let i =2; i<=n;i++){
//         result*=i;
//     }return result;
// }
// console.log(Factorial(5))

// // Reverse a String
// const reverseString = function(str){
//     let reversed = "";
//     for (let i=str.length-1;i>=0;i--){
//         reversed+=str[i]
//     }return reversed;
// }
// console.log(reverseString("Hello"))

// // Celsius to Fahrenheit
// const celsiusToFahrenheit = function(celsius) {
//   return (celsius * 9/5) + 32;
// };
// console.log(celsiusToFahrenheit(5))

// // Count Vowels in a String
// const countVowels = function(str){
//     let vowels = "aeiouAeiou";
//     let count = 0;
//     for (let i=0;i<str.length;i++){
//         if(vowels.includes(str[i])){
//             count++;
//         }
//     }return count;
// }
// console.log(countVowels("Hellow"))

// // Sum of Array Elements
// const sumArray = function(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };
// console.log(sumArray([2,3,2]))

// // Find the largest string from the sentence
// const functionName = function(parameter){
//     let count = 0;
//     let largest = "";
//     let words = parameter.split(" ")
//     for(let i = 0; i < words.length; i++){
//         if(words[i].length>largest.length){
//             largest = words[i];
//         }
//     }return largest;
// }
// console.log(functionName("hello guys i am ambady dileep"))

// // Find the second occurence largest string from the sentence
// const secondOccuredLargest = function(sentence){
//     let largest = "";
//     let words = sentence.split(" ")
//     for (let i = 0; i < words.length; i++){
//         if(words[i].length>largest.length){
//             largest = words[i];
//         }
//     }
//     let maxWords = [];
//     for (let i = 0;i < words.length; i++){
//         if (words[i].length === largest.length){
//             maxWords.push(words[i]);
//         }
//     }
//     if (maxWords.length >=2){
//         return maxWords[1];
//     }else{
//         return maxWords[0];
//     }
// }

// console.log(secondOccuredLargest("yes i am here for you broh"))