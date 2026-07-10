let bank = 100.00;
const bet = 2.00;

let before1 = 0;
let after1 = 0;
let win1 = 0;
let win2 = 0;

function updateScreen() {

    document.getElementById("bank").innerText = bank.toFixed(2) + " €";

    document.getElementById("before1").innerText = before1;
    document.getElementById("after1").innerText = after1;
    document.getElementById("win1").innerText = win1;
    document.getElementById("win2").innerText = win2;

}

function loseBefore1(){

    bank -= bet;
    before1++;

    updateScreen();

}

function loseAfter1(){

    bank -= bet;
    after1++;

    updateScreen();

}

function cashout1(){

    bank += bet * (1.61 - 1);
    win1++;

    updateScreen();

}

function cashout2(){

    bank += bet * (2.77 - 1);
    win2++;

    updateScreen();

}

updateScreen();
