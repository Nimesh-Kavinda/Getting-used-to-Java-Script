//** Event on Html */


const usernamePattern = /^[a-z]{6,10}$/;
const feedbackPattern = /^.{20,50}$/;



function userNameValidation(event){
    const userResult = usernamePattern.test(event.target.value);
     if(userResult){
        event.target.setAttribute("class" , "accepted");
     }else{
        event.target.setAttribute("class", "rejecterd");
     }
}

function feedbackValidation(event){
    const feedbackResult = feedbackPattern.test(event.target.value);
    if(feedbackResult){
        event.target.setAttribute("class", "accepted");
    }else{
        event.target.setAttribute("class", "rejecterd");
    }
}

function displayData(event){
    
}

function changeText(event){
    event.target.innerText = "Nimesh Kavinda"
}