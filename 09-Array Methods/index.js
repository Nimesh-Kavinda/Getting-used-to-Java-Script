 //**Filter Methods  */

//  const ratings = [5, 10, 9, 7, 2, 3, 8];

//  const filterdRatings = ratings.filter(rate => rate > 6);

//  console.log(filterdRatings);

// const numbers = [1,2,3,4,5,6,7,8,9];
// const even = numbers.filter((num) => {
//     let result = num % 2 == 0;
//     return result;
// });

// console.log(even);

// const odd = numbers.filter((num) => {
//     let result = num % 2 == 0;
//     return !result;
// });
// console.log(odd);


// const movies = [
//     {name:"Coffe Day", rating:9},
//     {name:"The Lost Coede", rating:7},
//     {name:"Typical Bug", rating:4}
// ];

// const filterMovies = movies.filter((movie) => {
//     return movie.rating > 6;

// });

// console.log(filterMovies);

///** Map Method */

// const numbers = [10, 20, 30, 40, 50];


// add Five to all elements
// const mapNumbers = numbers.map((number) => {
//     return number + 5;
// });
// console.log(mapNumbers);

// add five to num,bers the grater than 30
// const mapNumbers = numbers.map((num) => {
//     if(num > 30){
//         return num + 5;
//     }else{
//         return num;
//     }
// });

// console.log(mapNumbers);

// const products = [
//     {name: "Bread", price: 25, tax: 0.05},
//     {name: "Butter", price: 65, tax: 0.05},
//     {name: "Water", price: 15, tax: 0},
//     {name: "Material", price: 185, tax: 0.18},

// ];

// const mapProducts = products.map((product) => {
//     const newPrice = product.price + product.price*product.tax;
//    return {name: product.name, price:newPrice , tax:product.tax};

// } );

// console.log(mapProducts);


//*** Reduce Method */

// addition of arrya elemnts

// const numbers = [10, 20, 30, 40, 50];
// const reducenumbers = numbers.reduce((total, current) => {
//     total = total + current ;
//     return total;

// }, 0);

// console.log(reducenumbers);


// multiple of the array elements

// const numbers = [7, 2, 4, 5, 9];

// const reduceNumbers = numbers.reduce((total, current) => {
//     total = total * current;
//     return total;
// } , 1);

// console.log(reduceNumbers);


// const students =[
//     {name: "Nimesh", marks:9},
//     {name: "Dimuth", marks:7},
//     {name: "Adithya", marks:6},
//     {name: "Nimesh", marks:7},
//     {name: "Tharuka", marks:9},
//     {name: "Praveen", marks:10},
//     {name: "Nimesh", marks:10},
//     {name: "Bhanuka", marks:8},
//     {name: "Lasal", marks:9},
// ];

// const reduceStudents = students.reduce((total, current) => {
//         if(current.name === "Nimesh"){
//             total = total + current.marks;
//         }
//         return total;
// } , 0);

// console.log(reduceStudents);

//** Find Methods */

// const numbers = [5, 20, 75, 80, 15, 30];

// const findNumbers = numbers.find((num) => {
//     return num > 50;
// });
// console.log(findNumbers);

// In find method we can Find the First Elemnt that Satisfy our Condtion

//** Sort Method */


// const numbers = [5, 10, 2, 7, 9, 3, 1];

// numbers.sort();

// console.log(numbers);    ///**this depend on first char */

// const names = ["shubham", "jone", "deepak", "alex"];
// names.sort();
// console.log(names);

// const numbers = [5, 10, 7, 2, 9, 30];

// numbers.sort((a, b) => {
//   return a-b;
// });
// console.log(numbers);        //** a-b give us lower to higer and b-a high to low */



const movies = [
    {name: "Bug Finder" , ratings: 10},
    {name: "Lost Corder" , ratings: 7},
    {name: "Dev AT Night" , ratings: 9},
    {name: "Speed or Quailtyr" , ratings: 8}
];

movies.sort((a,b) => {
    return a.ratings - b.ratings;
});
console.log(movies);