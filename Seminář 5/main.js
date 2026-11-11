let result;
function random(){
    min = document.getElementById("od").value;
    max = document.getElementById("do").value;

    if((isNaN(min) == false) && (isNaN(max) == false)){
        min = Number(min);
        max = Number(max);
        if(min == max){
            alert("Čísla se nesmí rovnat!");
        }
        else{
            if(min<max){
                a = min;
                min = max;
                max = a;
                let rand = Math.floor(Math.random()*(max - min + 1) + min);
                result = rand;
                alert(rand);
                }
            else{
                let rand = Math.floor(Math.random()*(max - min + 1) + min);
                result = rand;
                alert(rand);
                }
            
        }
    }
    else{
        alert("Máš tam chybku")
    }
}

function tipnout(){
    let x = 1;
    let odhad = prompt("Zadejte odhad!");
    while(odhad != result){
        if(odhad == null){
            
            break;
        }
        else if(isNaN(odhad)){
            alert("Zadej číslo trubko!");
            odhad= prompt("Zadal jsi něco co nebylo číslo, zadej pouze číslo trubko!");
        }
        else if(odhad > result){
            odhad = prompt("Odhad je větší než výsledek, zkus znovu", odhad);
            x++;
        }
        else{
            odhad = prompt("Odhad je menší než výsledek, zkus znovu", odhad);
            x++;
        }
        
    }
    if(odhad == result){
        alert("Uhádly jste, výsledek je " + result + " a trvalo vám to " + x +" pokusů!");
        document.getElementById("vyslednytext").innerHTML = "Uhádly jste, výsledek je " + result + " a trvalo vám to " + x +" pokusů!";
    }
    else{
        alert("Prohrál jsi po " + x + " pokusech");
        document.getElementById("vyslednytext").innerHTML = "Prohrál jsi po " + x + " pokusech";
    }
}

function vysledek(){
    random();
    tipnout();
}