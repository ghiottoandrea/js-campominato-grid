
//- Creo un pulsante e al click gli assegno la classe active per generare una tabella
btn.addEventListener(`click`, function () { gridGenerator(100); boxToggle(); })

//- Creo una tabella di 10 X 10
function gridGenerator(cellNumber) {
    const containerEl = document.getElementById(`container`)
    let numb = 0

    for (let i = 0; i < cellNumber; i++) {
        numb += 1
        let markup = `<div class="box">${numb}</div>`
        containerEl.insertAdjacentHTML(`beforeend`, markup)
    }
}


//## Quando l'utente clicca su una cella:
/*
Se il numero è presente nella lista dei numeri generati
- abbiamo calpestato una fungo
- la cella si colora di rosso e la partita termina.
*/

//ELSE la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
function boxToggle() {
    const boxEl = document.getElementsByClassName(`box`)
    let gameEnded = false
    for (let i = 0; i < boxEl.length; i++) {
        const element = boxEl[i];

        element.addEventListener(`click`, function () {

            if (!gameEnded) {

                console.log(`Hai cliccato sulla casella numero ${element.textContent}`);
                const cellNumber = parseInt(element.textContent);

                if (mushrooms.includes(cellNumber)) {
                    element.classList.add(`wrong`);
                    element.textContent = `🍄`
                    console.log(`Hai calpestato un fungo! Partita terminata.`);
                    gameEnded = true; // Imposta il flag per indicare che la partita è terminata
                } else {
                    element.classList.add(`correct`)
                }
            }
        })
    }
}


//Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: i funghi magici.
//Attenzione: nella stessa cella può essere posizionato al massimo un fungo, perciò nell’array dei funghi non potranno esserci due numeri uguali.
const mushrooms = []

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

for (let i = 0; i < 16; i++) {
    let randomNumb;
    do {
        randomNumb = getRndInteger(1, 100);
    } while (mushrooms.includes(randomNumb));

    mushrooms.push(randomNumb);
}

console.log(mushrooms);
