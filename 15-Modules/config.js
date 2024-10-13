 const username = "nimesh";
 const age = 26;

// defalut export
export default function connect(){
    return `${username} is connected`;
};

 function disconnect(){
    return `${username} is disconnected`;
};

// export multiple elemnts by one line without give export keyword for each
export {username, age};