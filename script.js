let gridSize = 4;
let gridWidth = gridSize * 70
let gridHeight = gridWidth

gridContainer = document.querySelector('#gridContainer');
gridContainer.style.cssText = `height: ${gridHeight}px;`
gridContainer.style.cssText = `width: ${gridWidth}px;`


container = document.querySelector('#container');
container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);
                           grid-template-rows: repeat(${gridSize}, 1fr);`


for(let i = 0; i<gridSize * gridSize; i++){
    gridDiv = document.createElement('div');
    gridDiv.setAttribute('class', 'gridDiv');
    container.appendChild(gridDiv);
}

gridDivs = document.querySelectorAll('.gridDiv')
gridDivs.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.classList.add('hovered');
    });
});