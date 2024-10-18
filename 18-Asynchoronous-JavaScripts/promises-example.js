console.log("Start");

function loginUser(email, password){
    return new Promise((resolve, reject) => {
             setTimeout(() =>{
            userData = {userId:592, status:"success"};
            console.log("Inside Login User")
            resolve (userData);
        },2000)
    });
   
};

function getUserTweets(userId){
     return new Promise((resolve, reject) =>{
        setTimeout(() => {
            tweetData = [{tweetId:1, content:"ABC"}, {tweetId:2, content:"XYZ"}];
            console.log("Inside getUserTweets");
            // resolve(tweetData);
            reject("Error isndie getTweets");
        }, 1000);
     });
    
};

function getTweetComments(tweetId){
     return new Promise((resolve, reject) => {
        setTimeout(() =>{
            commentData = [{commentId:1, content:"Awsome"}];
            console.log("Inside getTweetsComments");
            resolve(commentData);
        },1000);
     });
    
};


loginUser("nimeshkavind@gmail.com", "random")
    .then(userData => getUserTweets(userData.userId))
    .then(tweetData => getTweetComments(tweetData[0].tweetId))
    .then(commentData => console.log(commentData))
    .catch(error => console.log(error));



console.log("Finish");
