console.log("Start");

function loginUser(email, password, callback){
    setTimeout(() =>{
        userData = {userId:592, status:"success"};
        callback (userData);
    },2000)
};

function getUserTweets(userId, callback){
    setTimeout(() => {
        tweetData = [{tweetId:1, content:"ABC"}, {tweetId:2, content:"XYZ"}];
        console.log("Inside getUserTweets");
        callback(tweetData);
    }, 1000);
};

function getTweetComments(tweetId, callback){
    setTimeout(() =>{
        commentData = [{commentId:1, content:"Awsome"}];
        console.log("Inside getTweetsComments");
        callback(commentData);
    },1000);
};

const data = loginUser("nimeshkavinda@gmail.com", "random",(userData) => {
    getUserTweets(userData.userId, () => {
        getTweetComments(tweetData[0].tweetId, (commentData) => {
            console.log(commentData);
        });
    });
});

console.log("Finish");
