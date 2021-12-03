let radio = document.getElementById("radio");
let boton = document.getElementById("playerButton");

let boton2 = document.getElementById("playerButton2");


function reproducirAudio() {
    radio.play();
    boton.style.display = "none";
    boton2.style.display = "block";
}

function recargar(){
    location.reload();
    boton.style.display = "block";
    boton2.style.display = "none";
}

if(window.onload){
    let inputDiv = document.getElementsByClassName('u-input-text-inputs'); //input padre de los input del chat
    inputDiv[0].blur(); 

    /*let cantVotos = document.getElementById('tiptip_content').innerHTML;
    let votos = document.getElementById("votos").innerText = cantVotos;*/


}

