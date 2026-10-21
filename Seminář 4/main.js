let puvodni;

function prevzit(){
    let text = document.getElementById("vstuparea").value;
    puvodni = text;
    switch(true) {
        case(text.length === 0):
        alert("Není zde žádný diktát!");
        break;

        case(text.length < 100):
        alert("Je to diktár? Nemá ani 100 znaků.");
        break;

        case(text.length < 201):
        alert("Malý diktát, má pouze mezi 100 a 200 znaky.");
        break;

        case(text.length > 200):
        alert("To už by šlo, má nad 200 znaků");
        break;
    }
    document.getElementById("outtext").innerHTML = text;

}
function smazat(){
    
    if(confirm("Opravdu chcete diktát smazat?") == true){
        document.getElementById("outtext").innerHTML = "";
    }
    else{
        alert("Mazání zrušeno");
    }
}

function univerzalni(typ, nahrada, znak1, znak2, znak3 = null, znak4 = null){
    let text = document.getElementById("outtext").innerHTML;
    let i = text.length;
    let x = 0;
    for(x=0;x<i;x++){
        if(text.toUpperCase().indexOf(znak1)>-1){
            text = nahrad(text,znak1,nahrada);
        }
        if(text.toUpperCase().indexOf(znak2)>-1){
            text = nahrad(text,znak2,nahrada);
        }
        if(text.toUpperCase().indexOf(znak3)>-1){
            text = nahrad(text,znak3,nahrada);
        }
        if(text.toUpperCase().indexOf(znak4)>-1){
            text = nahrad(text,znak4,nahrada);
        }
        
    }
        document.getElementById("outtext").innerHTML = text;
    
}

function nahrad(text, znak, nahrada){
    return text.replace(znak,nahrada);
}

function result(){
    let text = puvodni;
    text = text.replace(/y/ig,"<span class='oprava'>Y</span>");
    text = text.replace(/i/ig,"<span class='oprava'>I</span>");
    text = text.replace(/ý/ig,"<span class='oprava'>Ý</span>");
    text = text.replace(/í/ig,"<span class='oprava'>Í</span>");
    text = text.replace(/mě/ig,"<span class='oprava'>MĚ</span>");
    text = text.replace(/mně/ig,"<span class='oprava'>MNĚ</span>");

    return document.getElementById("outtext").innerHTML = text;
}