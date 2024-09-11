//** video 1 == Instruction */
//** Video 2 == Instruction Using Console in Browser */

//** Object Literals */

// const userOne = {
//     userName: "Nimesh",
//     fullName: "Kavinda",
//     email : "nimesh@gamil.com",
//     age : 24,

//     login(){
//         console.log("LOGIN")
//     },
//     logout(){
//         console.log("LogOut")
//     }
// };

// console.log(userOne.age);
// console.log(userOne.userName);
// userOne.login();



// const userTwo = {
//     userName: "Kavinda",
//     fullName: "Dimuth",
//     email : "kavih@gamil.com",
//     age : 28,

//     login(){
//         console.log("LOGIN")
//     },
//     logout(){
//         console.log("LogOut")
//     }
// };

// console.log(userTwo.age);
// console.log(userTwo.userName);
// userTwo.login();


// const userFive =new User("adithya", "Kavi", "adikavi@gmail.com", 35);
// console.log(userFive.userName);

//** Classes */

// class User {
//     constructor(username, age){
//         this.username = username;
//         this.age = age;
//     }
// }

// const userOne = new User("Kavinda", 32);
// console.log(userOne);

// const userTwo = new User("Adithya", 35);
// console.log(userTwo);


// console.log(userOne.username);

// const userThree = new User("Dimuth", 24);
// console.log(userThree.username);


///***Methods */

// class User {
//     constructor(username, age){
//         this.username = username;
//         this.age = age;
//         this.active = false;
//     }
//     login(){
//         this.active = true;
//         return this;
        
//     }
//     logout(){
//         this.active = false;
//         return this;
//     }
//     display(){
//         if(this.active){
//         console.log(`Username: ${this.username}, Age: ${this.age}`);

//         }else{
//             console.log("Please login first");
//         }
//     }
// }

// const userOne = new User("Kavinda", 32);
// userOne.login().display();



// const userTwo = new User("Adithya", 35);
// console.log(userTwo.active);
// userTwo.login();
// userTwo.logout();




// const userThree = new User("Dimuth", 24);
// console.log(userThree.username);


//** Inheritance */

// class User {
//     constructor(username, age){
//         this.username = username;
//         this.age = age;
//         this.active = false;
//     }
//     login(){
//         this.active = true;
//         return this;
        
//     }
//     logout(){
//         this.active = false;
//         return this;
//     }
//     display(){
//         if(this.active){
//         console.log(`Username: ${this.username}, Age: ${this.age}`);

//         }else{
//             console.log("Please login first");
//         }
//     }
// }

// class Student extends User{
//     constructor(username, age, semester, rank){
//         super(username, age);
//         this.semester = semester;
//         this.rank = rank;
//     }
//     updateRank(newRank){
//         this.rank = newRank;
//         console.log(this.rank);
//     } 
//     display(){
//         if(this.active){
//         console.log(`Username: ${this.username}, Age: ${this.age} Semester: ${this.semester}, Rank: ${this.rank} `);

//         }else{
//             console.log("Please login first");
//         }
//     }
// }



// const userOne = new User("Kavinda", 32);
// userOne.login().display();

// const studentOne = new Student("Jone", 60, 5, 10);
// studentOne.login().display();


//** Prototype Model */

// function User(username, age){
//     this.username = username;
//     this.age = age;
//     this.active = false;
// }

// User.prototype.login = function(){
//     console.log("Login");
// }

// User.prototype.logout = function(){
//     console.log("Logout");
// }

// const userOne = new User("Nimesh", 35);
// console.log(userOne.username);
// userOne.logout();

//** Prototype Inheritance */

function User(username, age){
    this.username = username;
    this.age = age;
    this.active = false;
}

User.prototype.login = function(){
    console.log("Login");
}

User.prototype.logout = function(){
    console.log("Logout");
}

function Student(username, age, semester, rank){
    User.call(this, username, age);
    this.semester =semester;
    this.rank = rank;
}

Student.prototype = Object.create(User.prototype);

Student.prototype.updateRank = function(newRank){
    this.rank = newRank;
    console.log(this.rank);
}


console.log(User.prototype);
console.log(Student.prototype);

const userOne = new User("Nimesh", 35);
console.log(userOne.username);
userOne.logout();

const studentOne = new Student("jone", 60, 5 ,12);
console.log(studentOne.username);
studentOne.updateRank(16);
