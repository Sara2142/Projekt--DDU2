const twoButtons = document.getElementById("twoButtonsArea")

const randomNumButton = document.createElement("button")
twoButtons.appendChild(randomNumButton)
randomNumButton.textContent = "New Random Number"
randomNumButton.id = "randomNumButton"

const randomNumInput = document.createElement("input")
twoButtons.appendChild(randomNumInput)
randomNumInput.value = "-"
randomNumInput.id = "randomNumInput"
randomNumInput.disabled = "true"

const removeButton = document.createElement("button")
twoButtons.appendChild(removeButton)
removeButton.textContent = "Remove"
removeButton.id = "removeButton"

const removeNumInput = document.createElement("input")
twoButtons.appendChild(removeNumInput)
removeNumInput.value = "-"
removeNumInput.id = "removeNumInput"
removeNumInput.disabled = "true"
randomNumButton.addEventListener("click", function(){
    const cells = document.querySelectorAll(".cell")
    randomNumInput.value = Math.floor (99 * Math.random())
    let matchedCounter = 0
    let foundMatch = false

    for (let cell of cells){
        if (randomNumInput.value == Number(cell.textContent)){
            cell.classList.add("matched")
            matchedCounter++
            removeNumInput.value= "-"
            foundMatch = true
        } else {
            cell.classList.remove("matched")
            
        } 
