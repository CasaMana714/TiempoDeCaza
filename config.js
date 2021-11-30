let radio = document.getElementById("radio");
let boton = document.getElementById("playerButton");

let boton2 = document.getElementById("playerButton2");

function reproducirAudio() {
    radio.play();
    boton.style.display = "none";
    boton2.style.display = "block";
}

function pausarAudio(){
    radio.pause();
    boton.style.display = "block";
    boton2.style.display = "none";
}
 