import connect, {username as name, age} from "./config.js";

console.log(name);
console.log(age);

console.log(connect());

import {convert as conversion} from "./helper.js";

const currency = conversion(10);

console.log(currency);