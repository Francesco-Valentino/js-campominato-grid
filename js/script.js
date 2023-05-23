function createCellElement(tagName, className){
    const cellElement = document.createElement(tagName);
    cellElement.className = className;
    return cellElement;
}

function createNumberElement(tagName, className){
    const numberElement = document.createElement(tagName);
    numberElement.className = className;
    return numberElement;
}

const gridElement = document.getElementById("myGrid");

for (let i = 0; i < 100; i++){
    const setCell = createCellElement("div", "cell");

    const setCellNumber = createNumberElement("h2", "cellNumber")

    setCell.addEventListener("click", function(){
        setCell.classList.toggle("selected");

        console.log(i + 1)
    })

    gridElement.appendChild(setCell);

    document.getElementsByClassName("cellNumber").innerHTML = i + 1;

    setCell.appendChild(setCellNumber)
}

