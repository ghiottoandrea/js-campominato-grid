
//- Creo un pulsante e al click gli assegno la classe active per generare una tabella
btn.addEventListener(`click`, function () {

    //- Creo una tabella di 10 X 10
    const containerEl = document.getElementById(`container`)
    let numb = 0

    for (let i = 0; i < 100; i++) {
        numb += 1
        let markup = `<div class="box">${numb}</div>`
        containerEl.insertAdjacentHTML(`beforeend`, markup)
    }

    //- Al click della casella cambia colore e manda un massaggio in console con il numero
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
})