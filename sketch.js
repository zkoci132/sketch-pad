
const sketchBox = document.querySelector('.sketchBox')

main()

function main(){
    gridSize = undefined
    cellSize = undefined
    
    buildButton(gridSize)
    buildGrid(gridSize,cellSize)
    
}

function buildButton(){
    const settings = document.querySelector('.settings')
    const button = document.querySelector('.sizeButton')

    button.addEventListener('click',() =>{

        gridSize = parseInt(prompt("What size would you like the grid to be? (0-64)"));
        if(gridSize > 64){
            console.log("Number too large")
        }
        else{
            cellSize = 500/gridSize
            destroyGrid()
            buildGrid(gridSize,cellSize)
        }
      
        
    })

    settings.appendChild(button)

}

function buildGrid(gridSize,cellSize){
    if(gridSize === undefined && cellSize === undefined){
        
        for(let i = 0;i < 16;i++){
            let newRow = document.createElement('div')
            newRow.classList.add("newRow")
            
            for(let h = 0;h<16;h++){
                let newCell = document.createElement('div')
                newCell.classList.add("newCell")
                newCell.classList.add("inactive")
                newCell.addEventListener('mousedown',() =>{
                        if(newCell.classList.contains("inactive")){
                            newCell.classList.remove("inactive")
                            newCell.classList.add("active")
                        }
        
                       
                    }
                )
                newRow.appendChild(newCell)
            }
            
            sketchBox.appendChild(newRow)
        
        }

    }
    else{
        console.log(gridSize)
       // const sketchBox = document.querySelector('.sketchBox')
        for(let i = 0;i < gridSize;i++){
            let newRow = document.createElement('div')
            newRow.classList.add("newRow")
            
            for(let h = 0;h<gridSize;h++){
                let newCell = document.createElement('div')
                newCell.style.width = `${cellSize}px`
                console.log(newCell.style.width)
                newCell.classList.add("newCell")
                newCell.classList.add("inactive")
                newCell.addEventListener('mousedown',() =>{
                        if(newCell.classList.contains("inactive")){
                            newCell.classList.remove("inactive")
                            newCell.classList.add("active")
                        }
        
                       
                    }
                )
                newRow.appendChild(newCell)
            }
            
            sketchBox.appendChild(newRow)
        
        }
    }
  
}

function destroyGrid(){
    while(sketchBox.hasChildNodes()){
        sketchBox.removeChild(sketchBox.firstChild)
    }

}

/*
for(let h = 0;h < 16;h++){
    for(let i = 0;i<16;i++){
        let starterGrid = document.createElement('div')
        starterGrid.classList.add("starterGrid")
        sketchBox.appendChild(starterGrid)
    }
}
*/



//let starterGrid = document.createElement(div)
/*
for(i = 0;i<4+1;i++){
   
        let newColumn = document.createElement('div')
        
        newColumn.classList.add('newColumn')
        newColumn.style.display = "flex"
       // newColumn.style.flexDirection = "column"
        newColumn.style.justifyContent = "space-between"
    
        for(h = 0;h<4+1;h++){
            let newRow = document.createElement('div')
            newRow.style.border = "1px solid black"
            newRow.style.display = "flex"
            newRow.style.justifyContent = "space-between"
            newRow.style.height = "20px"
            newRow.style.width = "50px"
            newColumn.appendChild(newRow)
        }
        //newGrid.style.padding = ""
        newColumn.style.border = "1px solid black"
        sketchBox.appendChild(newColumn)
  
        
    
    
        
      

}
*/