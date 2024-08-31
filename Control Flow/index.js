// *** Stat for loop
// let students = ["subham", "alex", "mark" , "deepak"];

// const student = {
//     username : "Nimesh",
//     age : 24,
// }

// update the array
// students.push("harvey");

// upadte the arrray in posotion
// students[6] = "Nimesh";

// for loop to print arrays

// for(let count = 0; count < 5; count++){
//   console.log("Hello!");
// }  

// access array elemnts when the lenght is known

//    for(let i = 0; i < 4; i++ ){
//          console.log(students[i]);
//    }
   
 
// access the arrry elments with array.length for arrays

// for(let i = 0; i < students.length ; i++){
//     console.log(students[i]);
    
// }
    
// of in arrays Accses to key(Acces empty values)

// for(let student of students){
//        console.log(student)
// }

// in keyword - Acces to key (Skips empty values)
// for(let index in students){
//     console.log(index);
// }

// for(let key in student){
//     console.log(student[key]);
// }

// print character of string
// const username = "Nimesh";

// for(let character of username){
//     console.log(character);
// }


// console.log("out of loop");

// ******** End of the For loop



// *** Start of While Loop


// let students = ["subham", "alex", "mark" , "deepak"];

// Syntax of While loop

// let count = 0; // initialyzation
// while(count < 5){  // condition
//     console.log("Hello!");
//     count ++; // increment
// }

// infinaitve loop

// let x = 0; // initialyzation
// while(true){  // condition
//     console.log("Hello!");

// }

//  print array elements


// let i = 0;
// while(i < students.length){
//     console.log(students[i]);
//     i++;
// }

// *** end of while loop

// ** Start of do while loop

//  let count = 5;

//  while(count < 5){
//     console.log("Hello!");
//     count++;
//  }

// how to run above while loop in do while

// let count = 0;
// do{
//  console.log(count);
//  count++;
// }while(count < 5);

// // Do while loop run it first time surely without checking condition
  
//  console.log("Out of loop");
 
 // ** End of do while loop

 // ** If , else & else if Statements (Conditional Statement)

        // ** If
//  let score = 9; 

//  if(score > 7){ // Condtion
//     console.log("Good Job !") // statement wehn run the condition when true

//  }

// const students = ["Nimesh", "Dimuth", "Tharuka", "Kavinda"];

// if(students.length > 0){
//     console.log("We have a Class today");
// }
                  //** else */


//        let score = 5; 

//  if(score > 7){ 
//     console.log("Good Job !") 

//  }else{
//     console.log("All the best for the next one");
//  }

// const loggedIn = true;

// if(loggedIn){
//   console.log("Welcome");
// }else{
//     console.log("Please login First");
// }
 
                 // **  else if

//  let signal = "green";

//  if(signal == "red"){

//     console.log("please Stop");

//  }else if(signal == "yellow"){

//     console.log("Get Ready");

//  }else if(signal == "green"){

//     console.log("Gooooooo");

//  }else{

//     console.log("please chechk the signal input");
//  }

 // ** End of If , Eles iF (Conditional Statement)



   // ** Start of Logical oparators 

               // * &&             

//    let password = "1234678";

//    if(password.length >= 8 && password.includes("@")){
//      console.log("Strong Password");
//    }else if(password.length >= 5 && password.length < 8){
//        console.log("Mediam Strong Password");
//    }else{
//     console.log("Weak pasowrd");
//    }
              // * ||  

//    let password = "12344323";

//    if(password.length >= 12 || password.length >= 8 && password.includes("@")){
//      console.log("Strong Password");
//    }else if(password.length >= 5 &&  password.length <= 8){
//        console.log("Mediam Strong Password");
//    }else{
//     console.log("Weak pasowrd");
//    }
   
           // ** Logical Not 
   // used to revers boolens
    // console.log(!true);
    // console.log(!false);
   
//  let loggedIn = true

//   if(!loggedIn){
//         console.log("Hellow!");    
//   }else {
//     console.log("Else case!")
//   }

  // ** End of Logical Oparators 

  // ** Break and Continue Statements
    
    // let ratings = [7, 8, 5, 3, 0, 6, 10, 7, 8];

    // for(let i =0 ; i < ratings.length; i++){
        
    //     if(ratings[i] == 0){
    //         console.log(`Rating: ${ratings[i]} - Skip `)
    //         continue;   // continue above statement and going to next iteration skipping below statements
    //     }

    //     if(ratings[i] == 10){
    //         console.log(`Rating: ${ratings[i]} - Must Watched` )
    //         break;    // Stop entire Loop
    //     }


    //     console.log(`Rating: ${ratings[i]}`)

    // }

    // ** End of Break and Continue Statements

    // ** Start of Switch Statement

let rating = 5;

    // if(rating == 5){
    //     console.log("Must Watch")
    // }else if(rating == 4){
    //     console.log("Good opinion");
    // }else if(rating == 3){
    //     console.log("Maybe");
    // }else if(rating == 2){
    //     console.log("Skip");
    // }else if(rating == 1){
    //     console.log("ignore");
    // }else{
    //     console.log("Invalid")
    // }

    // lets try above if in Switch

   switch(rating){
          
    case 5:
        console.log("Must watch");
        break;
    case 4:
        console.log("Good Opiniom");
        break;
    case 3:  
        console.log("Maybe");
        break;
    case 2:
        console.log("Skip");
        break;
    case 1:
        console.log("Ignore");
        break;
    default:
        console.log("invalid");            
        

   }

   let grade = "A";

   switch(grade){
          
    case "A":
        console.log("Must watch");
        break;
    case "B":
        console.log("Good Opiniom");
        break;
    case "C":  
        console.log("Maybe");
        break;
    case "D":
        console.log("Skip");
        break;
    case "E":
        console.log("Ignore");
        break;
    default:
        console.log("invalid");            
        

   }

    
