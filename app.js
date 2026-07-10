let bank = 100;
let startBank = 100;
let goal = 150;
let bet = 2;

let before1 = 0;
let after1 = 0;
let win1 = 0;
let win2 = 0;

let history = [];

function updateScreen() {

    document.getElementById("bank").innerText = bank.toFixed(2) + " €";
    document.getElementById("goal").innerText = goal.toFixed(2) + " €";
    document.getElementById("profit").innerText = (bank - startBank).toFixed(2) + " €";

    document.getElementById("before1").innerText = before1;
    document.getElementById("after1").innerText = after1;
    document.getElementById("win1").innerText = win1;
    document.getElementById("win2").innerText = win2;

    if(history.length === 0){
        document.getElementById("history").innerHTML = "Все още няма рундове.";
    }else{
        document.getElementById("history").innerHTML = history.slice(-20).reverse().join("<br>");
    }

}

function loseBefore1(){

    bank -= bet;
    before1++;

    history.push("☠️ Изгори преди 1 (-2€)");

    updateScreen();

}

function loseAfter1(){

    bank -= bet;
    after1++;

    history.push("🔥 Изгори между 1 и 2 (-2€)");

    updateScreen();

}

function cashout1(){

    bank += bet * (1.61 - 1);
    win1++;

    history.push("🥇 Кеш аут 1 (+1.22€)");

    updateScreen();

}

function cashout2(){

    bank += bet * (2.77 - 1);
    win2++;

    history.push("🥈 Кеш аут 2 (+3.54€)");

    updateScreen();

}

updateScreen();
