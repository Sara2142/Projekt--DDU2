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
const createButton = document.createElement("button")
mainDOM.appendChild(createButton)
createButton.classList.add("button")
createButton.textContent = "Create"
createButton.addEventListener("click", function(){
    cellParent.innerHTML = ""
    creatCells(input.value)
    
})
function creatCells (number){
    for (let i = 0; i < number; i++){
        const cell = document.createElement("div")
        cellParent.appendChild(cell)
        cell.classList.add("cell")
        cell.textContent = randomInt(0,99)
    }
}
creatCells (93)
