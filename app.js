let listaAmigos = [];

// Agrega un amigo a la lista. Si el usuario no escribe nada, emite una alerta
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

// Muestra los nombres que se van agregando a la lista
function actualizarAmigos() {
    let mostarLista = document.getElementById('listaAmigos');
    asignarTextoElemento('listaAmigos', '');

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(listaAmigos[i]));
        mostarLista.appendChild(li);
    }
}

// Escoge un nombre aleatorio de la lista
function sortearAmigo() {
    let numeroAleatorio = Math.floor(Math.random()*listaAmigos.length);
    asignarTextoElemento('listaAmigos', '');
    let amigoSecreto = `El amigo secreto sorteado es: ${listaAmigos[numeroAleatorio]}`
    asignarTextoElemento('resultado', amigoSecreto);
}

// Permite asignar un texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
}