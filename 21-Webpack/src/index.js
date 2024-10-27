import {welcome, updatePara} from "./helper.js";
import {names} from "./data.js"

names.array.forEach(name => {
    welcome(name);
});

updatePara("Updated File!");

const name = "jhdjhjdhj";