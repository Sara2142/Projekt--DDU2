function findTwoCells() {
    let cells = document.querySelectorAll(".cell");

    for (let i = 0; i < cells.length; i++) {
        for (let j = 0; j < cells.length; j++) {
            let cell1 = Number(cells[i].textContent);
            let cell2 = Number(cells[j].textContent);


            if (cell1 + cell2 === Number(inputForAddUp.value)) {

                cells[i].classList.add("found");
                cells[j].classList.add("found");
                return;  
            } else {
                cells[i].classList.remove("found");
                cells[j].classList.remove("found");
            }
        }
    }

}
buttonForTwoCells.addEventListener("click", findTwoCells);
