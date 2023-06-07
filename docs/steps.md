# Griglia Campo Minato

<br>

## Steps:

- Recupero gli elementi
- **QUANDO** _"premo play"_
    - Recupero la difficoltà
    - **IN CASO** _"la difficoltà è 3 (difficile)"_
        - Devo creare 49 celle
    - **ALTRIMENTI IN CASO** _"la difficoltà è 2 (media)"_
        - Devo creare 81 celle
    - **ALTRIMENTI**
        - Devo creare 100 celle
    - Svuoto la griglia
    - **FINCHE** _"non ho tutte le celle"_
        - _"Creo una cella"_
        - Appendo la cella alla griglia
        - collego l'evento click alla cella
- **QUANDO** _"premo su una cella"_
    - Stampo il suo contenuto
    - Cambio il colore della cella
- **Creo una cella** _"dato un numero"_
    - Creo un elemento
    - Appendo il numero all'elemento
    - **RITORNO** _"l'elemento creato"_