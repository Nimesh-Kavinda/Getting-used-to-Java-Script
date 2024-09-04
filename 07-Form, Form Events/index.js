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


// const form = document.querySelector(".form");
// const usernamePattern = /^[a-z]{6,10}$/;
// const feedbackPattern = /^.{20,50}$/;



// form.addEventListener("submit", (event) => {
//    event.preventDefault(); 
//    const userResult = usernamePattern.test(form.username.value);
//    const feedbackResult = feedbackPattern.test(form.feedback.value);

// //    console.log(userResult, feedbackResult);
    
//             if(userResult && feedbackResult){
//                 console.log("worked!");
//             }else{
//                 console.log("not worked!");
//             }
    
// });

//** Basic form Validation */

// const form = document.querySelector(".form");
// const p = document.querySelector("p");

// const usernamePattern = /^[a-z]{6,10}$/;
// const feedbackPattern = /^.{20,50}$/;



// form.addEventListener("submit", (event) => {
//    event.preventDefault();  
//    const userResult = usernamePattern.test(form.username.value);
//    const feedbackResult = feedbackPattern.test(form.feedback.value);

// //    console.log(userResult, feedbackResult);
    
//             if(userResult && feedbackResult){
//                 p.setAttribute("class", "success"); // adding css class
//                 p.textContent = "FeedBack Submitted, Thank You!" // adding text elemnt to p tag
//             }else{
//                 p.setAttribute("class", "error");
//                 p.textContent ="Please Check Username and Feedback Again";
//             }
    
// });

//**Key Bord Events */


// const form = document.querySelector(".form");
// const p = document.querySelector("p");

// const usernamePattern = /^[a-z]{6,10}$/;
// const feedbackPattern = /^.{20,50}$/;



// form.addEventListener("submit", (event) => {
//    event.preventDefault();  
//    const userResult = usernamePattern.test(form.username.value);
//    const feedbackResult = feedbackPattern.test(form.feedback.value);

// //    console.log(userResult, feedbackResult);
    
//             if(userResult && feedbackResult){
//                 p.setAttribute("class", "success"); // adding css class
//                 p.textContent = "FeedBack Submitted, Thank You!" // adding text elemnt to p tag
//             }else{
//                 p.setAttribute("class", "error");
//                 p.textContent ="Please Check Username and Feedback Again";
//             }
    
// });

// form.username.addEventListener("keyup", event => {
//   const userResult = usernamePattern.test(event.target.value);
//      if(userResult){
//       form.username.setAttribute("class" , "accepted");
//      }else{
//       form.username.setAttribute("class", "rejecterd");
//      }
// });

// form.feedback.addEventListener("keyup", event => {
//   const feedbackResult = feedbackPattern.test(event.target.value);
//      if(feedbackResult){
//       form.feedback.setAttribute("class" , "accepted");
//      }else{
//       form.feedback.setAttribute("class", "rejecterd");
//      }
// });

//**Event on Html form */
 
//** creat a new Script js */