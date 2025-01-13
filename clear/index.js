function fillCells(){
    const cells = document.querySelectorAll(".cell")
    for (let i = 0; i < cells.length; i++){
        cells[i].addEventListener("mouseenter", function(){
            if (cells[i].classList.contains("normal") || cells[i].classList.contains("cell") ){
                cells[i].addEventListener("click", function(){
                    cells[i].classList.add("marked")
                })
                cells[i].addEventListener("mouseleave", function(){
                    if (cells[i].classList.contains("marked")){
                        cells[i].classList.add("leave")
                        cells[i].classList.remove("marked")
                    }
                })
            }
        })
        
        cells[i].addEventListener("mouseenter", function(){
            if (cells[i].classList.contains("leave")){
                cells[i].addEventListener("click", function(){
                    cells[i].classList.remove("marked")
                    cells[i].classList.remove("leave")
                    cells[i].classList.add("normal")
    
                })
            }
        })
    
        clearButton.addEventListener("click", function(){
            cells[i].classList.remove("leave")
        })
        
       
    }
}
fillCells()
