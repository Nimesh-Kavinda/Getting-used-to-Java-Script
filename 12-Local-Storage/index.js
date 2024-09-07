// localStorage.setItem("name", "Nimesh");
// localStorage.setItem("age", 25);

// const name = localStorage.getItem("name");
// const age = localStorage.getItem("age");

// console.log( name,  age);
// console.log(typeof name, typeof age);

// localStorage.age = 26;
// localStorage.setItem("age", 35);


// // localStorage.removeItem("name");
// // localStorage.removeItem("age");


// localStorage.clear();

const data = [
    {username : "Nimesh", age: 24},
    {username : "dimuth", age: 26}
];

const dataStringify = JSON.stringify(data);
localStorage.setItem("data", dataStringify);

const accesItem =JSON.parse(localStorage.getItem("data"));
console.log(accesItem);