const sumOfAllDOM= document.getElementById("sumOfAll")
const sumOfMarkedDOM = document.getElementById("sumOfMarked")

const text1Input = document.createElement("input")
sumOfAllDOM.appendChild(text1Input)
text1Input.disabled = "true"

const text2Input = document.createElement("input")
sumOfMarkedDOM.appendChild(text2Input)
text2Input.disabled = "true"
text2Input.value = "-"

const resetButton = document.createElement("button")
sumOfMarkedDOM.appendChild(resetButton)
resetButton.textContent = "Reset"
function sumofAllCells(){
    const cells = document.querySelectorAll(".cell")
    let total = 0
    for (let cell of cells){
        total += Number(cell.textContent)
    }
    return total;
}
text1Input.value = sumofAllCells()
