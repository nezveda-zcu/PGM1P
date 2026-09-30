function tux() {
    document.getElementById("obrazek").src = "images/tux.jpg";
    document.getElementById("obrazek").alt = "Tux";

}
function debian() {
    document.getElementById("obrazek").src = "images/debian.png";
    document.getElementById("obrazek").alt = "Debian";
}
function zmena() {
    if (document.getElementById("obrazek").alt == "Tux") {
        document.getElementById("obrazek").src = "images/debian.png";
        document.getElementById("obrazek").alt = "Debian";
    } 
    else {
        document.getElementById("obrazek").src = "images/tux.jpg";
        document.getElementById("obrazek").alt = "Tux";
    }
}