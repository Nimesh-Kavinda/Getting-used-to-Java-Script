console.log("Start");


const twitterProfile = new Promise((resolve, reject) => {
    setTimeout(() => {
        userData = {twitter:592, status:"success"};
        console.log("Inside twiiterProfile");
        resolve(userData);
    }, 3000);
});

const instergramProfile = new Promise((resolve, reject) => {
    setTimeout(() => {
        userData = {instragram:782, status:"success"};
        console.log("Inside instergramProfile");
        resolve(userData);
    }, 1000);
});


Promise.all([twitterProfile, instergramProfile])
        .then(data => console.log(data));

console.log("FInish");