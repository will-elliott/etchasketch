let gridSize = prompt('Enter grid size');

let gridDivWidth = 600 / gridSize;

for(let i = 0; i<gridSize * gridSize; i++){
    gridDiv = document.createElement('div');
    gridDiv.setAttribute('class', 'gridDiv');
    gridDiv.style.height = `${gridDivWidth}px`
    gridDiv.style.width = `${gridDivWidth}px`
    container.appendChild(gridDiv);
}

gridDivs = document.querySelectorAll('.gridDiv')
function initDraw(){
    gridDivs.forEach(div => {
        div.addEventListener('mouseover', () => {
            div.classList.add('hovered');
        });
    });
}
initDraw();

clearButton = document.querySelector('#Clear')
clearButton.addEventListener('click', () => {
    gridDivs.forEach(div => {
        div.classList.remove('hovered');
    })
})

resizeButton = document.querySelector('#Resize')
resizeButton.addEventListener('click', () => {
    location.reload();
})

container = document.querySelector('#container');
container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr);
                           grid-template-rows: repeat(${gridSize}, 1fr);`