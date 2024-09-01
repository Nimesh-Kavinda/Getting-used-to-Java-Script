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
// let add = (numOne, numTow) => numOne + numTow;

// console.log(add(2,5));

// // sytax with one parameters - we can write (name) like name
// let welcome = name =>  `Welcome ${name}`;

// console.log(welcome("Nimesh"));

// // syntax with 0 parameters

// let intro = () => `Welocme`;

// console.log(intro());

//**End of Arrow Functions */

//** Function methods */

// let welcome = () => "Welcome";
// console.log(welcome());

// let myName = "Nimesh";
// console.log(myName.toLocaleLowerCase());

// let students = ["Alex", "Nimesh"];
// console.log(students.push("Kavinda")); // give the new number of indexes of array



  //**End of function methods */


  //** Start of For each Method */

        // ** call back function examples**//

// let add = function(a,b){
//     return a + b;
// }

// let mul = function(a,b){
//     return a * b;
// }

// function calculator(numOne, numTow, add, mul){
//      let addResult = add(numOne , numTow);
//      let mulResult = mul(numOne , numTow);
//      let result = `Add : ${addResult} Mul: ${mulResult}`;
//     //  console.log(result); 
//     return result;
// }
// // calculator(5, 10, add, mul);
// console.log(calculator(5, 10, add, mul));


// short form of above

// let add = function(a,b){
//     return a + b;
// }

// let mul = function(a,b){
//     return a * b;
// }

// function calculator(numOne, numTow, add, mul){
   
//     return  `Add : ${add(numOne, numTow)} Mul: ${mul(numOne, numTow)}`;
   
// }
// // calculator(5, 10, add, mul);
// console.log(calculator(5, 10, add, mul));

       //*** For each methid */

//**First way */

// let products = ["bread", "butter", "Jam", "bottle"];

// let callBack = (product) => console.log(`My product name is ${product}`);

//   products.forEach(callBack);

// ** second way to print array elemnts **//
 
// let products = ["bread", "butter", "Jam", "bottle"];

// products.forEach( product => console.log(product) );

//** Print the length of elements */

// let products = ["bread", "butter", "Jam", "bottle"];

// products.forEach( product => console.log(product.length) );

// Example

let students = ["Nimesh", "Dimuth", "Jone", "Tharuka" ];
students.forEach((student , index) => {
    console.log(student, index)
});

      //** End of For Each Method */

      //** End of Functions */