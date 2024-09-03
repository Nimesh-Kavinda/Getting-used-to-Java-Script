  //**Submit Events  */
   
// const form = document.querySelector(".form");
// form.addEventListener("submit", (event) => {
//    event.preventDefault(); // remove defalt function
//    console.log(form.username.value);
//    console.log(form.feedback.value); // can acces on name or id, in this id = feedback
    
// });



//** Regular Expresen */ 
 
// const usernamePttern = /[a-z][6,10]/;
 /// Visit regex101.com to Create Regular Expression

//**Testing Regular Expression */


const form = document.querySelector(".form");
const usernamePattern = /^[a-z]{6,10}$/;
const feedbackPattern = /^.{20,50}$/;



form.addEventListener("submit", (event) => {
   event.preventDefault(); 
   const userResult = usernamePattern.test(form.username.value);
   const feedbackResult = feedbackPattern.test(form.feedback.value);

//    console.log(userResult, feedbackResult);
    
            if(userResult && feedbackResult){
                console.log("worked!");
            }else{
                console.log("not worked!");
            }
    
});

