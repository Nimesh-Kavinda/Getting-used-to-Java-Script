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

class User {
    constructor(username, age){
        this.username = username;
        this.age = age;
    }
}

const userOne = new User("Kavinda", 32);
console.log(userOne);

const userTwo = new User("Adithya", 35);
console.log(userTwo);


console.log(userOne.username);

const userThree = new User("Dimuth", 24);
console.log(userThree.username);
