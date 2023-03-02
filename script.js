const lamp = document.getElementById("lamp")
const ligarLamp = document.getElementById("ligar")
const desligarLamp = document.getElementById("desligar")
let cont = 0


function ligar() {
    lamp.src = "img/lampon.jpg"
 
}

function desligar() {
    lamp.src = "img/lampoff.jpeg"
  
}

function crash() {
    cont++
    if (cont > 4) {
        lamp.src = "img/lampbroken.jpg"
        ligarLamp.disabled=true
        desligarLamp.disabled=true
    

    }
}

function reset() {
   cont=0
   ligarLamp.disabled=false
   desligarLamp.disabled=false
}