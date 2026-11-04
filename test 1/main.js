const hist = "Historie hledání:";

function catbtn(){
    if(document.getElementById("picture").alt != "cat"){
    document.getElementById("picture").alt = "cat";
    document.getElementById("picture").src = "/images/cat.png";
    }
    else{
        alert("Tento obrázek byl již použit")
    }
}

function pesbtn(){
    if(document.getElementById("picture").alt != "pes"){
    document.getElementById("picture").alt = "pes";
    document.getElementById("picture").src = "/images/pes.png";
    }
    else{
        alert("Tento obrázek byl již použit")
    }
}

function tygrbtn(){
    if(document.getElementById("picture").alt != "tygr"){
    document.getElementById("picture").alt = "tygr";
    document.getElementById("picture").src = "/images/tygr.png";
    }
    else{
        alert("Tento obrázek byl již použit")
    }
}

function zmena(){
    if(document.getElementById("picture").alt == "cat"){
        document.getElementById("picture").alt = "pes";
        document.getElementById("picture").src = "/images/pes.png";
    }
    else if(document.getElementById("picture").alt == "pes"){
        document.getElementById("picture").alt = "tygr";
        document.getElementById("picture").src = "/images/tygr.png";
    }
    else {
        document.getElementById("picture").alt = "cat";
        document.getElementById("picture").src = "/images/cat.png";
    }
}

function showseznam(){
    document.getElementById("seznam").innerHTML = "cat, pes a tygr";
}

function deletehist(){
    if(document.getElementById("historie").innerHTML != "Historie hledání:"){
        document.getElementById("historie").innerHTML = "Historie hledání:";
    }
    else{
        alert("Historie je již prázdná!");
    }
}

function potvrdit(){
    document.getElementById("historie").innerHTML += " " + document.getElementById("vstup").value;
    if(document.getElementById("vstup").value == "cat"){
        catbtn();
    }
    else if(document.getElementById("vstup").value == "pes"){
        pesbtn();
    }
    else if (document.getElementById("vstup").value == "tygr"){
        tygrbtn();
    }
    else{
        alert("Nebyl nalezen daný výraz")
    }
}