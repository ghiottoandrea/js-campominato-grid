
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

//- Al click della casella cambia colore e manda un massaggio in console con il numero
function boxToggle() {
    const boxEl = document.getElementsByClassName(`box`)
    let clickCount = 0;

    for (let i = 0; i < boxEl.length; i++) {
        const element = boxEl[i];
        element.addEventListener(`click`, function () {

            element.classList.toggle(`blue`)

            clickCount++;
            if (clickCount === 1 || clickCount % 2 === 1) {
                console.log(`Hai cliccato sulla casella numero ${element.textContent}`);

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

for (let i = 0; i < 16; i++){
    let randomNumb;
    do {
        randomNumb = getRndInteger(1, 100);
    } while (mushrooms.includes(randomNumb));

    mushrooms.push(randomNumb);
}

console.log(mushrooms);

