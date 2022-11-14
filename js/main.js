const btnGeneraNumeriEl = document.querySelector(".btn_genera");
const btnCheckEl = document.querySelector(".btn_check");
const boxNumeriEl = document.querySelector(".box_numeri");
const containerRemember = document.querySelector(".remember_container");
const userNumber1 = document.getElementById("user_number_1");
const userNumber2 = document.getElementById("user_number_2");
const userNumber3 = document.getElementById("user_number_3");
const userNumber4 = document.getElementById("user_number_4");
const userNumber5 = document.getElementById("user_number_5");
let random_numbers = [];
let uesr_numbers = [];
let numberGenerated = false;

// Genera 5 numeri casuali al click del bottone
btnGeneraNumeriEl.addEventListener("click", () => {
    crate5numbers();
})

btnCheckEl.addEventListener("click", () => {

})


// ***************** DICHIARAZIONE FUNZIONI


// Genera 5 numeri casuali e crea gli elementi html
function crate5numbers() {
    boxNumeriEl.innerHTML = "";
    random_numbers = [];
    boxNumeriEl.classList.remove("d-none");
    containerRemember.classList.add("d-none");
    for (let i = 1; i <= 5; i++) {
        const rundom_number = Math.floor(Math.random() * 100 + 1);
        boxNumeriEl.innerHTML += `<div class="number_cell">${rundom_number}</div>`;
        random_numbers.push(rundom_number);
    }
    setTimeout(function () {
        boxNumeriEl.classList.add("d-none");
        containerRemember.classList.remove("d-none");
    }, 3000);

    console.log(random_numbers);
}


function checkNumbers(){
    
}