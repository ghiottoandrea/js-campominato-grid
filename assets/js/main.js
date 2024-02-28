
//- Creo un pulsante e al click gli assegno la classe active per generare una tabella


//- Creo una tabella di 10 X 10
const containerEl = document.getElementById(`container`)
let numb = 0

for (let i = 0; i < 100; i++) {
    numb += 1
    let markup = `<div class="box">${numb}</div>`
    containerEl.insertAdjacentHTML(`beforeend`, markup)
}

