
//** Date */

// const now = new Date();


// console.log(now);
// console.log(typeof now);

// console.log(now.getFullYear());
// console.log(now.getMonth());  // behaviao like a araaay index
// console.log(now.getDate());
// console.log(now.getDay());


// console.log(now.getHours());
// console.log(now.getMinutes());
// console.log(now.getSeconds());




// console.log(now.toDateString());
// console.log(now.toTimeString());
// console.log(now.toLocaleString());
// console.log(now.toLocaleDateString());
// console.log(now.toLocaleTimeString());

//** Time */

// const oldDate = new Date('September 6, 2022 03:24:00');
// const oldDate = new Date(2022, 4, 10);
const oldDate = new Date(2022, 4, 10);

 
console.log(oldDate);
console.log(oldDate.getTime());


const now = new Date();
console.log(now);
console.log(now.getTime());


const gap = now - oldDate;
const timeInformation = (Math.round(gap/1000/60/60/24/30));
console.log(`Blogf was posted ${timeInformation} monthes ago`);
