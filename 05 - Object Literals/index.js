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
   

let user = {
   name : "Nimesh Kavinda",
   email : "nimeshkavinda@gmail.com",
   age : 24,
   isLoggedIn : false,
   blogs : [{title : "Blog 1", numComment : 5, wordCount : 570},
            {title : "Blog 2" , numComment : 7 , wordCount : 1257}
   ],

   allBlogConsole: function(){
           this.blogs.forEach((blog) => {console.log(blog.title)});
   },

   login : function(){
       this.isLoggedIn = true;
       return `Logged in - ${this.isLoggedIn}`;
   },
   logout : function(){
       this.isLoggedIn = false;
       return `Logged out - ${this.isLoggedIn}`;
   },
};


// console.log(user.blogs[1].title);
user.allBlogConsole();