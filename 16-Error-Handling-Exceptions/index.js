
// Try and Catch block is a way of erro handling. Your elemnet must be in try block and if get a error the thing is on catch block //

// console.log("Setp 1");



// try {
//     getWeatherRepot();
// } catch (error) {
//     console.log(error.message);
// }


// console.log("Setp 2");


// ------- Using Finally ------- //

console.log("Setp 1");

function completed(){
    console.log("Wether task Completed");
}

try {
    getWeatherRepot();
    completed();
} catch (error) {
    console.log(error.message);
} finally {
    completed();
}


console.log("Setp 2");