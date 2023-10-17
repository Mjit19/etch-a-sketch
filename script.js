let container = document.querySelector('#container');

generateGrid(container, 16);

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    let num = prompt("How many squares per side do you want? (1 - 99)");
    if (num > 0 && num < 100) {
        container.innerHTML = "";
        generateGrid(container, num);
    }
});



function generateGrid(parent, n) {
    // Create rows of grid
    for (let i = 0; i < n; i++) {
        parent.appendChild(document.createElement('div')); 
    }
    // Create Cells for each row
    let divContainerList = document.querySelectorAll('#container > div');
    divContainerList.forEach(divContainer => {
        for (let j = 0; j < n; j++) {
            divContainer.appendChild(document.createElement('div')); 
        }
    });
    // Change cell class so that it's colored
    let cells = document.querySelectorAll('#container > div > div');
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.classList.add('cell');
        });
    });
}
