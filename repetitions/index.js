const notInPlaceText = document.createElement("div")
notInPlaceDOM.appendChild(notInPlaceText)
notInPlaceText.id= "notInPlaceText"
const cells = document.querySelectorAll(".cell")
function findNotInPlaceNumbers(){
    const cells = document.querySelectorAll(".cell")
    let notInPlaceNumbers = []


    for (let i = 0; i <= 99; i++) {
        let found = false; 
        for (let cell of cells) {
            if (Number(cell.textContent) === i) {
                found = true; 
            }
        }
        if (found === false) {
            notInPlaceNumbers.push(i); 
        }
    }
    notInPlaceText.textContent = notInPlaceNumbers.join(", ")
}

findNotInPlaceNumbers()
