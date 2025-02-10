# challenge Amigo Secreto

Este proyecto es una aplicación web simple para organizar un sorteo de "Amigo Secreto". La aplicación permite a los usuarios agregar nombres de amigos a una lista y luego sortear aleatoriamente un nombre de la lista para determinar quién será el "Amigo Secreto".

Este challenge es parte del programa Oracle Next Education con Alura Latam.

## Estructura del Proyecto

El proyecto tiene la siguiente estructura de archivos:

```
app.js
assets/
    amigo-secreto.png
    play_circle_outline.png
index.html
README.md
style.css
```


### Archivos Principales

- **index.html**: Este archivo contiene la estructura HTML de la aplicación. Incluye un formulario para ingresar nombres, una lista para mostrar los nombres agregados y un botón para realizar el sorteo.

- **style.css**: Este archivo contiene los estilos CSS para la aplicación. Define los colores, fuentes y el diseño general de la interfaz de usuario.

- **app.js**: Este archivo contiene el código JavaScript que maneja la lógica de la aplicación. Incluye funciones para agregar nombres a la lista, actualizar la lista en la interfaz de usuario y realizar el sorteo.

### Funcionalidades

1. **Agregar Amigo**: La función `agregarAmigo` permite al usuario agregar un nombre a la lista de amigos. Si el campo de entrada está vacío, se muestra una alerta pidiendo al usuario que ingrese un nombre.

    ```javascript
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
    ```

2. **Actualizar Lista de Amigos**: La función [actualizarAmigos](http://_vscodecontentref_/4) actualiza la lista de nombres en la interfaz de usuario cada vez que se agrega un nuevo nombre.

    ```javascript
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
    ```

3. **Sortear Amigo Secreto**: La función [sortearAmigo](http://_vscodecontentref_/5) selecciona aleatoriamente un nombre de la lista de amigos y muestra el resultado en la interfaz de usuario.

    ```javascript
    // Escoge un nombre aleatorio de la lista
    function sortearAmigo() {
        let numeroAleatorio = Math.floor(Math.random()*listaAmigos.length);
        asignarTextoElemento('listaAmigos', '');
        let amigoSecreto = `El amigo secreto sorteado es: ${listaAmigos[numeroAleatorio]}`
        asignarTextoElemento('resultado', amigoSecreto);
    }
    ```

4. **Asignar Texto a un Elemento HTML**: La función [asignarTextoElemento](http://_vscodecontentref_/6) permite asignar texto a un elemento HTML específico.

    ```javascript
    // Permite asignar un texto a un elemento HTML
    function asignarTextoElemento(elemento, texto) {
        let elementoHTML = document.getElementById(elemento);
        elementoHTML.innerHTML = texto;
    }
    ```

### Ejecución

Para ejecutar la aplicación, sigue estos pasos:

1. Clona el repositorio en tu máquina local:
    ```sh
    git clone https://github.com/Gi0yis/challenge-amigo-secreto.git
    ```

2. Navega al directorio del proyecto:
    ```sh
    cd challenge-amigo-secreto
    ```

3. Abre el archivo [index.html](http://_vscodecontentref_/4) en tu navegador web. La interfaz de usuario te permitirá agregar nombres y realizar el sorteo de "Amigo Secreto".