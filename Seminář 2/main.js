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
}

function addtext(){ 
    document.getElementById("text").innerHTML = document.getElementById("text").innerHTML + " " + document.getElementById("vstup").value;
}