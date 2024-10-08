// let users = ["Nimesh", "Dimuth", "Kavinda", "Adithya"];

// arrays are good but we can only store only one type of data

   //**05- object literals */

   //** Basics of objects */

//  let user = {
//     name : "Nimesh Kavinda",
//     email : "nimeshkavinda@gmail.com",
//     age : 25,
//     isLoggedIn : false,
//  };  
 
//  // show the obejct
//  console.log(user);

//  // prib=nt object propeties
//  console.log(user.name);

//  // value changing == overwrite
//  console.log(user.isLoggedIn);
//  user.isLoggedIn = true;
//  console.log(user.isLoggedIn);

//  // another way to print propeties
//  console.log(user["email"]);


//  let key = "name";
//  console.log(user[key]);

//  // find the type

//  console.log(typeof user);
 
//** Methods */

// let random = "RANDOM";

// let user = {
//     name : "Nimesh Kavinda",
//     email : "nimeshkavinda@gmail.com",
//     age : 24,
//     isLoggedIn : false,
//     login : function(){
//         console.log("Login");
//     },
//     logout : function(){
//         return "LogOut";
//     },
// };


//     user.login();  // call a method
//     console.log(random.toLowerCase());
//     console.log(user.logout());

//** This Keyword */

// let user = {
//     name : "Nimesh Kavinda",
//     email : "nimeshkavinda@gmail.com",
//     age : 24,
//     isLoggedIn : false,
//     login : function(){
//         this.isLoggedIn = true;
//         return `Logged in - ${this.isLoggedIn}`;
//     },
//     logout : function(){
//         this.isLoggedIn = false;
//         return `Logged out - ${this.isLoggedIn}`;
//     },
// };
 

// console.log(user.login());
// console.log(user.logout());

// console.log(this); // this in global scope access window


 //** Objects in Arrays */
   

// let user = {
//    name : "Nimesh Kavinda",
//    email : "nimeshkavinda@gmail.com",
//    age : 24,
//    isLoggedIn : false,
//    blogs : [{title : "Blog 1", numComment : 5, wordCount : 570},
//             {title : "Blog 2" , numComment : 7 , wordCount : 1257}
//    ],

//    allBlogConsole: function(){
//            this.blogs.forEach((blog) => {console.log(blog.title)});
//    },

//    login : function(){
//        this.isLoggedIn = true;
//        return `Logged in - ${this.isLoggedIn}`;
//    },
//    logout : function(){
//        this.isLoggedIn = false;
//        return `Logged out - ${this.isLoggedIn}`;
//    },
// };


// // console.log(user.blogs[1].title);
// user.allBlogConsole();

//** Math Object */

// const num = 15.3;

//  console.log(Math);
//  console.log(Math.PI);

//  console.log(Math.E);

//  console.log(Math.round(num));
//  console.log(Math.ceil(num));
//  console.log(Math.floor(num));

//  console.log(Math.pow(2,5));
//  console.log(Math.sign(num)); // negative or postive or netural
 
//  let random = Math.random(); // super importand for developing
//  console.log(random * 10);
//  console.log(Math.round(random * 10));
 
//** Primitive vs Reference types */

// let numOne =  15;
// let numTow =  numOne;
// numOne = 30;

// console.log(numOne);
// console.log(numTow);

// let objOne = {title: "Learning JavaScript", rank:2};
// let objTow = objOne;
// let objThree = objTow;

// objOne.rank = 1;

// console.log(objOne);
// console.log(objTow);

// objTow.rank = 5;
// console.log(objOne);
// console.log(objTow);
// console.log(objThree);

///** part 2 P vs R */

let objOne = {title: "Learning JavaScript", rank:2};
let objTwo = {...objOne, publish: "22-445-444-4", rank:50};

objOne.rank = 1;

console.log(objOne);
console.log(objTwo);

let arrOne = ["Shubham", "alex"];
let arrTwo = [...arrOne, "Jone" , "deepak"];
arrOne.push ("deepak");


console.log(arrOne);
console.log(arrTwo);
 
   ///** END of Object Literals */
