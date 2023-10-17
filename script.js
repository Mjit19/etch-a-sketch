// Create 16x16 grid square divs
// Put them inside container div

const container = document.querySelector('#container');
generateGrid(container, 16);





function generateGrid(parent, n) {
    // Create rows of grid
    for (let i = 0; i < n; i++) {
        parent.appendChild(document.createElement('div')); 
    }
    // Create Cells for each row
    const divContainerList = document.querySelectorAll('#container > div');
    divContainerList.forEach(div => {
        for (let j = 0; j < n; j++) {
            div.appendChild(document.createElement('div')); 
        }
    });
}

