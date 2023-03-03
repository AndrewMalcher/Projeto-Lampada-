// Criando referência para elementos no HTML
const lamp = document.getElementById("lamp");
const ligarLamp = document.getElementById("ligar");
const desligarLamp = document.getElementById("desligar");
// Contador para crash
let cont = 0;

// Função para botão de ligar
function ligar() {
    lamp.src = "img/lampon.jpg";
 
}
// Função para botão de desligar
function desligar() {
    lamp.src = "img/lampoff.jpeg";
  
}
// Função de 'crash' para clicks na lâmpada
function crash() {
    cont++
    if (cont > 4) {
        lamp.src = "img/lampbroken.jpg";
        ligarLamp.disabled = true;
        desligarLamp.disabled = true;
    

    }
}

// Função para consertar a lâmpada
function reset() {
   cont=0;
   ligarLamp.disabled = false;
   desligarLamp.disabled = false;
   lamp.src = "img/lampoff.jpeg";
}