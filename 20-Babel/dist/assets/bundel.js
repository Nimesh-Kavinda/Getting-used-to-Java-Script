"use strict";

var p = document.querySelector("p");
p.textContent = "Watcher Runnig All Time";
var studentName = "Nimesh";
var welcome = function welcome() {
  console.log("Welocme ".concat(studentName));
};
welcome();
