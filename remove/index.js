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
