var contador = 0;
var numeroAtual = document.getElementById("numeroAtual");

function increment() {
    contador++;
    numeroAtual.innerHTML = contador;
} 

function decrement() {
    contador--;
    numeroAtual.innerHTML = contador;
}     