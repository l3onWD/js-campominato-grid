/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

# MILESTONE 1
    Prepariamo l'HTML ed il CSS per ottenere il risultato grafico che vediamo nell'immagine allegata.

#MILESTONE 2
    Rimuoviamo le celle che abbiamo inserito nell'HTML in modo da generarle tramite JS. Al click del bottone play, vengono generate 100 celle in 10 righe da 10 celle ciascuna.

#MILESTONE 3
    In ogni cella, deve comparire il numero corrispondente, in ordine da 1 a 100;

#MILESTONE 4
    Al click sulla cella, stampiamo il numero della cella cliccata in console, poi coloriamo la cella d'azzurro!

# BONUS
    Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
        - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
        - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
        - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
*/
/* -----------------------------------------
* FUNCTIONS
-------------------------------------------*/
const createCell = (number) => {

    // Create node
    const cell = document.createElement('div');

    // Set properties
    cell.classList.add('game-cell');
    cell.append(number);
    
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


// ! Log Elements
console.log('### Elementi DOM:');
console.log('Select: ' + difficultyElem);
console.log('Form: ' + playFormElem);
console.log('Grid: ' + gridElem);


/* -----------------------------------------
* LOGIC
-------------------------------------------*/
console.log('----------- LOGIC -----------');

//*** CLICK PLAY ***//
playFormElem.addEventListener('submit', (ev) => {

    // Prevent submit event
    ev.preventDefault();


    //*** GET DIFFICULTY ***//
    let numberOfCells;
    const difficulty = parseInt(difficultyElem.value);

    switch (difficulty) {
        // Easy
        case 1:
            numberOfCells = 100;
            break;

        // Medium
        case 2:
            numberOfCells = 81;
            break;

        // Hard
        default:
            numberOfCells = 49;
    }

    
    //*** POPULATE GRID ***//
    gridElem.innerHTML = '';// Delete all previous cells

    // Create all cell based on difficulty
    for (let i = 1; i <= numberOfCells; i++) {
       
        const cell = createCell(i);
        
        //*** CLICK CELL ***//
        cell.addEventListener('click', () => {
            // TODO cell click logic
        });

        // Append cell inside grid
        gridElem.appendChild(cell);
    }

});



console.log('----------- DONE -----------');