const state = {
    startBank: 100,
    bank: 100,
    goal: 150,
    stop: 80,
    bet: 2,
    odds1: 1.61,
    odds2: 2.77,
    rounds: 0,
    wins: 0,
    losses: 0,
    history: []
};

function updateUI(){

    document.getElementById("bank").innerText =
        state.bank.toFixed(2)+" €";

    document.getElementById("goal").innerText =
        state.goal.toFixed(2)+" €";

    document.getElementById("stop").innerText =
        state.stop.toFixed(2)+" €";

    document.getElementById("profit").innerText =
        (state.bank-state.startBank).toFixed(2)+" €";

    document.getElementById("rounds").innerText =
        state.rounds;

    document.getElementById("wins").innerText =
        state.wins;

    document.getElementById("losses").innerText =
        state.losses;

    let rate=0;

    if(state.rounds>0){
        rate=(state.wins/state.rounds*100).toFixed(1);
    }

    document.getElementById("rate").innerText=
        rate+"%";

    if(state.history.length==0){

        document.getElementById("history").innerHTML=
        "Няма записани рундове.";

    }else{

        document.getElementById("history").innerHTML=
        state.history.slice().reverse().join("<br>");

    }

}

document
.getElementById("saveRound")
.addEventListener("click",function(){

    const cash=
    document.querySelector('input[name="cash"]:checked').value;

    const result=
    document.querySelector('input[name="result"]:checked').value;

    let win=false;

    if(cash=="1"){

        if(result=="burn1"){
            win=false;
        }else{
            win=true;
        }

    }

    if(cash=="2"){

        if(result=="after2"){
            win=true;
        }else{
            win=false;
        }

    }

    state.rounds++;

    if(win){

        state.wins++;

        if(cash=="1"){
            state.bank+=state.bet*(state.odds1-1);
            state.history.push("✅ Кеш 1");
        }else{
            state.bank+=state.bet*(state.odds2-1);
            state.history.push("✅ Кеш 2");
        }

    }else{

        state.losses++;
        state.bank-=state.bet;

        if(result=="burn1"){
            state.history.push("❌ Изгоря на 1");
        }else{
            state.history.push("❌ Изгоря на 2");
        }

    }

    updateUI();

});

updateUI();
