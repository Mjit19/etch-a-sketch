// Create 16x16 grid square divs
// Put them inside container div

// Create rows of grid
const container = document.querySelector('#container');
generateDiv(container);

// Create Cells for each row
const divContainerList = document.querySelectorAll('#container > div');
divContainerList.forEach(generateDiv);




function generateDiv(parent) {
    for (let i = 0; i < 16; i++) {
        parent.appendChild(document.createElement('div')); 
    }
}

