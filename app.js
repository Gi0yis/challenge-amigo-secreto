// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo(){
    let amigo = document.getElementById('amigo');

    if (amigo.value === '') {
        alert('Por favor, inserte un nombre.');
    } else {
        listaAmigos.push(amigo.value);
        amigo.value = '';
        console.log(listaAmigos);
        actualizarAmigos();
    }
}

function actualizarAmigos() {
    let mostarLista = document.getElementById('listaAmigos');
    asignarTextoElemento('listaAmigos', '');

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(listaAmigos[i]));
        mostarLista.appendChild(li);
    }
}

function sortearAmigo() {
    let numeroAleatorio = Math.floor(Math.random()*listaAmigos.length);
    asignarTextoElemento('listaAmigos', '');
    let amigoSecreto = `El amigo secreto sorteado es: ${listaAmigos[numeroAleatorio]}`
    asignarTextoElemento('resultado', amigoSecreto);
}

function asignarTextoElemento(elemento, texto) {
    let elemtoHTML = document.getElementById(elemento);
    elemtoHTML.innerHTML = texto;
}