const btnGeneraNumeriEl = document.querySelector(".btn_genera");
const btnCheckEl = document.querySelector(".btn_check");
const boxNumeriEl = document.querySelector(".box_numeri");
const containerRemember = document.querySelector(".remember_container");
const resultsBox = document.querySelector(".results_box");
let random_numbers = [];
let correct_numbers = [];
let numberGenerated = false;

// Genera 5 numeri casuali al click del bottone
// che scompaiono dopo 30secondi
btnGeneraNumeriEl.addEventListener("click", () => {
    crate5numbers();
})


// check dei numeri indovinati e display del risultato
btnCheckEl.addEventListener("click", () => {
    checkNumbers();
    if (correct_numbers.length === 0) {
        resultsBox.innerHTML = `<h3>mi spiace, hai indovinato ${correct_numbers.length} numeri</h3>`
    } else {
        let numbers = ""
        for (let i = 0; i < correct_numbers.length; i++) {
            numbers = numbers + ` ${correct_numbers[i]}/`;

        }
        if (correct_numbers.length === 1) {
            resultsBox.innerHTML = `<h3> Hai indovinato un numero: ${numbers} `;
        } else {
            resultsBox.innerHTML = `<h3>Complimenti! hai indovinato ${correct_numbers.length} numeri: ${numbers} `;
        }
    }
})


// ***************** DICHIARAZIONE FUNZIONI ***************** 


// Genera 5 numeri casuali, ne crea gli elementi html, e li fa scomparire dopo 30secondi
// facendo comparire la sezione per l'inserimento dei numeri
function crate5numbers() {
    // reset allo stato iniziale
    boxNumeriEl.innerHTML = "";
    random_numbers = [];
    correct_numbers = [];
    boxNumeriEl.classList.remove("d-none");
    containerRemember.classList.add("d-none");
    resultsBox.innerHTML = "";
    for (let i = 1; i <= 5; i++) {
        document.getElementById(`user_number_${i}`).value = "";
    }

    // creazione array ed elemnti html con 5 numeri casuali
    for (let i = 1; i <= 5; i++) {
        const rundom_number = Math.floor(Math.random() * 100 + 1);
        boxNumeriEl.innerHTML += `<div class="number_cell">${rundom_number}</div>`;
        random_numbers.push(rundom_number);
    }

    // dopo 30secondi i numeri scompaiono e compare la sezione per l'utente
    setTimeout(function () {
        boxNumeriEl.classList.add("d-none");
        containerRemember.classList.remove("d-none");
    }, 1000);

    console.log(random_numbers);
}

// controlla quanti numeri sono stati indovinati
// e crea un array con gli stessi
function checkNumbers() {
    for (let i = 1; i <= 5; i++) {
        const currentNumberEl = document.getElementById(`user_number_${i}`);
        if (random_numbers.includes(parseInt(currentNumberEl.value)) && !correct_numbers.includes(currentNumberEl.value)) {
            console.log(correct_numbers);
            correct_numbers.push(currentNumberEl.value);
        };
    }
    console.log(correct_numbers);
}