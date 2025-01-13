function findSame(){
    for(let cell of cells){
    let cellClicked = ""
    let counter = 0
        cell.addEventListener("click", function(){
             cellClicked = cell.textContent
             for (let cell of cells){
                if (cell.textContent == cellClicked){
                    cell.classList.add("found")
                    counter++
                } else{
                    cell.classList.remove("found")
                }
                textAboutButton.textContent = `${counter} copies of the number ${cellClicked}`
             }
        })
    
