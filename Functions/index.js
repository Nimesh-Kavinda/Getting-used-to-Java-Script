// function is s block of code

// ** function part 01

// ** exmaple

// function addition(numOne, numTow){
//     return numOne + numTow;
// }
// let result = addition(5,8);
// console.log(result);

// console.log(addition(10,67));

// ** function part 02

//  function intro(){
//     console.log("Welcome to the Corse!"); // declare function
//  }

//  intro(); // calling function

// storing function in a variabel
// let intro = function(){
//       console.log("Welacome to the corse!");
// };

// intro();


// ** hoyisting - A function can use befor the declaration
  
// let random = 20;
//   console.log(random); // geanaral way

// intro();

// function intro(){
//     console.log("Welcom to the corse!")
// }


// function intro(){
//     console.log("Welcom to the corse!")
// }
// intro();


// ** Start of Arguement Parameters 

// function welcome(name){  // parameter == name
//     console.log(`Welcome ${name}`)
// }

// welcome("shubham");  // argumnent to parameter = "Shubham"

//  function addition(numOne, numTow){
//     let result = numOne + numTow;
//     console.log(result);
//  }
//  addition(5,10);
                                      //defulte value
// function fullName(firstName ="ABC", lastName ="XYZ"){
//     console.log(`Welcome ${firstName} ${lastName}`);
// }

// fullName("Nimesh", "Kavinda");
// fullName();

//** End of Arguement Parameters */


//** Start  Return Keyword */

// function addition(numOne, numTow){
//         let result = numOne + numTow;
//         return result;
//      }
//     //  console.log(addition(5,10));
//     const value = addition(5,10);
//     console.log(value);

// function fullName(firstName, lastName){
//     // let result = firstName + " " + lastName;
//     // return result;
//     return firstName + " " + lastName;
// }

// let value = fullName("Nimesh", "Kavinda");
// console.log(value);

//**End Return Keyword */

//**Arrow Function */

// let welocme = function(){
//         console.log("Welcome");
// };
// welocme();

//   // first exmaple for arrow function
// let intro = () => {
//     console.log("welcome Arrow")
// };
// intro();

// pass parameters

// let welcome = (name) => {
//     console.log("welcome" , name);
// };
// welcome("Nimesh");

// let welcome2 = (name) => {
//     console.log(`welcome ${name}`);
// };
// welcome2("Nimesh");

// let add = (numOne, numTow) => {
//     return numOne + numTow;
// };
// console.log(add(2,5));

// we can say this like

// syntax with tow parameters
let add = (numOne, numTow) => numOne + numTow;

console.log(add(2,5));

// sytax with one parameters - we can write (name) like name
let welcome = name =>  `Welcome ${name}`;

console.log(welcome("Nimesh"));

// syntax with 0 parameters

let intro = () => `Welocme`;

console.log(intro());

//**End of Arrow Functions */