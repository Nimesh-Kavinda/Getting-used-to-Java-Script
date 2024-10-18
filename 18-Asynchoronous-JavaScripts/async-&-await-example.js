console.log("Start");

function loginUser(email, password){
    return new Promise((resolve, reject) => {
             setTimeout(() =>{
            userData = {userId:592, status:"success"};
            console.log("Inside Login User")
            resolve (userData);
            // reject("Error MEssage");
        },1000)
    });
   
};

function getUserTweets(userId){
     return new Promise((resolve, reject) =>{
        setTimeout(() => {
            tweetData = [{tweetId:1, content:"ABC"}, {tweetId:2, content:"XYZ"}];
            console.log("Inside getUserTweets");
            resolve(tweetData);
            // reject("Error isndie getTweets");
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


async function displaytData(){
    try{
        const userData = await loginUser("nimeshkavind@gmail.com", "random");
        const tweetData = await getUserTweets(userData.userId);
        const commentData = await getTweetComments(tweetData[0].tweetId);
        console.log(commentData);
    }
    catch(error){
        console.log(error);
    }
   
}

displaytData();

console.log("Finish");