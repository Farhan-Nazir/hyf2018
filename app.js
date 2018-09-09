"use strict";
window.onload = () => {
  init();
};

let index = 0;
let text = "HACK YOUR FUTURE ! ";
let chars = 0;
let speed = 200;
let content = document.getElementById("content");

function init() {
  chars = text.length;
  content.appendChild(document.createTextNode(text[index]));
  if (index <  chars - 1) {
    index++;
    setTimeout(() => {
      return init();
    }, speed)
  
  }
}