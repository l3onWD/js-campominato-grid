/* -----------------------------------------
* FUNCTIONS
-------------------------------------------*/
const createCell = (size, number) => {

    // Create node
    const cell = document.createElement('div');

    // Set properties
    cell.classList.add('game-cell');
    cell.append(number);

    cell.style.width = size + 'px';
    cell.style.height = size + 'px';
    
    return cell;
}



/* -----------------------------------------
* INIT
-------------------------------------------*/
console.log('----------- INIT -----------');

//*** DOM ELEMENTS ***//
const difficultyElem = document.getElementById('game-difficulty');
const playFormElem = document.getElementById('game-play-form');
const gridElem = document.getElementById('game-grid');


//*** PARAMETERS ***//
const gridSize = 400;


// ! Log Elements
console.log('### Elementi DOM:');
console.log('Select: ' + difficultyElem);
console.log('Form: ' + playFormElem);
console.log('Grid: ' + gridElem);
console.log('----------- DONE -----------');



/* -----------------------------------------
* LOGIC
-------------------------------------------*/

//*** CLICK PLAY ***//
playFormElem.addEventListener('submit', (ev) => {

    // Prevent submit event
    ev.preventDefault();


    //*** GET DIFFICULTY ***//
    const difficulty = parseInt(difficultyElem.value);
    let cellsPerRow;

    // Check difficulty chosen
    switch (difficulty) {
        // Easy
        case 1:
            cellsPerRow = 10;
            break;

        // Medium
        case 2:
            cellsPerRow = 9;
            break;

        // Hard
        default:
            cellsPerRow = 7;
    }

    
    //*** POPULATE GRID ***//
    // Calculate Grid data
    let cellsTotalNumber = cellsPerRow * cellsPerRow;
    let cellsSize = gridSize / cellsPerRow;

    // Delete all previous cells
    gridElem.innerHTML = '';

    // Create all cell based on difficulty
    for (let i = 1; i <= cellsTotalNumber; i++) {
       
        const cell = createCell(cellsSize, i);
        
        //*** CLICK CELL ***//
        cell.addEventListener('click', () => {
            
            // Print content cell
            console.log(cell.innerText);

            // Change cell color
            cell.classList.add('clicked');

        });

        // Append cell inside grid
        gridElem.appendChild(cell);
    }

});