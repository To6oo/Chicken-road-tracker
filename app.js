let bank = 100.00;
const bet = 2.00;

function updateBank() {
    document.getElementById("bank").innerText = bank.toFixed(2) + " €";
}

function lose() {
    bank -= bet;
    updateBank();
}

function first() {
    bank += bet * (1.61 - 1);
    updateBank();
}

function second() {
    bank += bet * (2.77 - 1);
    updateBank();
}

updateBank();
