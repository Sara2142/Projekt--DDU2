const mainDOM = document.querySelector("main");
const cellParent = document.getElementById("cellParent")
function randomInt(min, max) {
    return min + Math.floor((max+1- min) * Math.random());
 }
const NumberText = document.createElement("div");
mainDOM.appendChild(NumberText);
NumberText.textContent = "How many Numbers in the grid?";
NumberText.classList.add("numberText");
const input = document.createElement("input");
mainDOM.appendChild(input);
input.classList.add("input");
input.value = 93;
