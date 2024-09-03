const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
   event.preventDefault(); // remove defalt function
   console.log(form.username.value);
   console.log(form.feedback.value); // can acces on name or id, in this id = feedback
    
});