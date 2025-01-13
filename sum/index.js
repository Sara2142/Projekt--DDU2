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
