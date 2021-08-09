// Write your code here!
main = document.getElementById("main");
main.remove();
let element = document.querySelector("body");
let newHeader = document.createElement("h1");
newHeader.setAttribute("id", "victory");
newHeader.innerHTML = "Haley is the champion";
element.appendChild(newHeader);