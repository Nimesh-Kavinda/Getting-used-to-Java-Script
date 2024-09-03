//** query selector */

// let description = document.querySelectorAll('p');
// description.forEach(paragraph => console.log(paragraph));

//** selectors */

// let selector = document.getElementById("website-name");
// console.log(selector);

// let selectorClass = document.getElementsByClassName("active");
// // console.log(selectorClass);

// let selectorTag = document.getElementsByTagName("p");
// console.log(selectorTag);

//** Contorling Contents */

// let subHeading = document.querySelector(".sub-heading");
// console.log(subHeading.innerText);

// subHeading.innerText += "--Upadted Sub Heading---";
// console.log(subHeading.innerText);

// let liHead = document.querySelectorAll("ul.top-nav li");
// liHead.forEach((element) => {
//     element.innerText += "--";
// });

// let subHeading = document.querySelector("ul.top-nav");
// subHeading.innerHTML += "<li>Register</li>";

//** Attributes */

//     const link = document.querySelector("a");

//    link.setAttribute("href", "www.example.com");
//    console.log(link.getAttribute('href'));

//    link.setAttribute("target", "_blanck");


// const activeClasses = document.querySelectorAll(".active");
// activeClasses.forEach(active => {
//     console.log(active.getAttribute("class"));
//     active.setAttribute("class", "highlight")
//     console.log(active.getAttribute("class"));

// });

//**Changing Css Styling */

//  from this we can only overwriting styles
// const brandName = document.querySelector("#website-name");
// brandName.setAttribute("style","color:blue;");

// const brandName = document.querySelector("#website-name");
// brandName.style.color = "blue";

//**Add and Remove Classes */

// let heading = document.querySelector("h1");
// heading.classList.add("highlight");  // add class
// heading.classList.remove("blog-heading"); // remove class


// change classes

//  const activeClasses = document.querySelectorAll("li.active");
//  const inActiveClasses = document.querySelectorAll("li.inactive");

//  activeClasses.forEach(active =>{
//     active.classList.remove("active");
//     active.classList.add("inactive");
//  });


// inActiveClasses.forEach(active => {
//     active.classList.remove("inactive");
//     active.classList.add("active");
//  });

// toggel     - if you haven't a class toggel is going to add class but if you have a class from toggel keyword it is going to remove it
                // remove when the class name is similar to toggel class
// const brandName = document.querySelector("#website-name");
// brandName.classList.toggle("important");

//** Relationships - Parents , Child and Sibilins */


        //**chidren */
// const topNav = document.querySelector(".top-nav");
// // console.log(topNav.children);  //  acces in chidrens

// const topNavChildren = Array.from(topNav.children);


// topNavChildren.forEach(child => {
//     child.classList.add("random");
//     console.log(child);
// });

        //**parents */

        // const brandName = document.querySelector("#website-name");
        // console.log(brandName.parentElement.children);

        // const array = Array.from(brandName.parentElement.children);
      
         //* siblins

        //  const blogHeading = document.querySelector(".sub-heading");
        //  console.log(blogHeading.nextElementSibling);
        //  console.log(blogHeading.previousElementSibling);

//** Events */
  
// bsed on ui

// const productAdd = document.querySelector("button");
// productAdd.addEventListener("click", () =>{
//     console.log("button click");
// //    productAdd.setAttribute("style", "display:none");
// });

// const products = document.querySelectorAll("li");
// products.forEach((product) => {
//    product.addEventListener("click", (event) => {
//     event.target.style.textDecoration = "line-through";
    
//     console.log(event.target.style.textDecoration);

//    })
// })

//** Creating and Removing elements */

// remove

// const products = document.querySelectorAll("li");
// products.forEach((product) => {
//    product.addEventListener("click", (event) => {
//     event.target.remove();
//     console.log(event.target.textContent);
// })});


  // add 

// const addProducts = document.querySelector("ul");
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     addProducts.innerHTML += "<li>New product</li>";
//     console.log(addProducts.innerHTML);
// });


// const addProducts = document.querySelector("ul");
// const button = document.querySelector("button");
// button.addEventListener("click", () => {
//     const newli = document.createElement("li");
//     newli.innerText = "New Product";
//    addProducts.prepend(newli);
//     console.log(addProducts.innerHTML);
// });

//* Event Bubbling/

// const addProducts = document.querySelector("ul");
// const button = document.querySelector("button");

// button.addEventListener("click", () => {
//         const li = document.createElement("li");
//         li.textContent = "New Product";
//         addProducts.append(li);
// });

// addProducts.addEventListener("click", (event) => {
//         if(event.target.tagName === "LI"){
//                 event.target.remove();
//         }
// });


// const newLi= document.querySelector(".active");
// newLi.addEventListener("click", () => {
        
// });

//**More events */

// copy and Alert
const products = document.querySelector("ul");


// products.addEventListener('copy',(event) => {
//    if(event.target.tagName == "LI"){
//         alert(event.target.textContent);
//    }

// });

// add the function to a variael amd use in EventLister
// const copyAlert = (event) => {
//         if(event.target.tagName == "LI"){
//             alert(event.target.textContent);
//         }
//      }

// products.addEventListener('copy',copyAlert);


// add the mouse movement to body

// const webPage = document.querySelector("body");
// webPage.addEventListener("mousemove", (event) =>{
//    console.log(event.clientX, event.clientY);
// } );

//scrole event

// const webPage = document.querySelector("body");
// webPage.addEventListener("wheel", (event) => {
//     console.log(event.pageX, event.pageY);
// });