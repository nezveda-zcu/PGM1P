function add(a){
    if(a==1){
        document.getElementById("history").innerHTML="😊";
        document.getElementById("text").innerHTML= document.getElementById("text").innerHTML + " 😊";
    }
    else if(a==2){
        document.getElementById("history").innerHTML="😂";
        document.getElementById("text").innerHTML= document.getElementById("text").innerHTML + " 😂";
    }
    else if(a==3){
        document.getElementById("history").innerHTML="🤣";
        document.getElementById("text").innerHTML= document.getElementById("text").innerHTML + " 🤣";
    }
    else if(a==4){
        document.getElementById("history").innerHTML="😒";
        document.getElementById("text").innerHTML= document.getElementById("text").innerHTML + " 😒";
    }
    else if(a==5){
        document.getElementById("history").innerHTML="👌";
        document.getElementById("text").innerHTML= document.getElementById("text").innerHTML + " 👌";
    }
    else if(a==6){
        document.getElementById("history").innerHTML="🙄";
        document.getElementById("text").innerHTML= document.getElementById("text").innerHTML + " 🙄";
    }
}

function erase(){
    document.getElementById("text").innerHTML = "";
    document.getElementById("history").innerHTML = "";
}

function addtext(){ 
    document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + " " + document.getElementById("vstup").value;
}

function backspace(){
    
    let delka = document.getElementById("text").innerHTML.length;
    let minus = delka - 1;
    if(delka > 0){
        document.getElementById("text").innerHTML = document.getElementById("text").innerHTML.substring(0,minus);
    }
    else{
        alert("Text je prázdný!");
    }
}

function deletos(){

    let delka = document.getElementById("text").innerHTML.length;
    if(delka > 0){
        document.getElementById("text").innerHTML = document.getElementById("text").innerHTML.substring(1,delka);
    }
    else{
        alert("Text je prázdný");
    }
}