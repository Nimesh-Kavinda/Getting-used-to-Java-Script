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

const numbers = [10, 20, 30, 40, 50];


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

const products = [
    {name: "Bread", price: 25, tax: 0.05},
    {name: "Butter", price: 65, tax: 0.05},
    {name: "Water", price: 15, tax: 0},
    {name: "Material", price: 185, tax: 0.18},

];

const mapProducts = products.map((product) => {
    const newPrice = product.price + product.price*product.tax;
   return {name: product.name, price:newPrice , tax:product.tax};

} );

console.log(mapProducts);