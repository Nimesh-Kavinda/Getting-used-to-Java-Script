console.log("A");

const logIntervel = setInterval(() =>{
    console.log("Intervel");
}, 1000)
clearInterval(logIntervel);

console.log("D");