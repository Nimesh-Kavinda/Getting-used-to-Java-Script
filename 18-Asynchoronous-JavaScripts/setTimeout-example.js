console.log("A");


const random = function(){
    const numOne = 5;
    const numTwo = 15;

    console.log(numOne + numTwo);
}

const welcome = function(){
    console.log("B");
    random();
    console.log("C")
}

setTimeout(welcome,2000);

console.log("D");
