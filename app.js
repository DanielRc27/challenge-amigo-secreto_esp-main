// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

document.addEventListener("DOMContentLoaded", () => {
    const inputAmigo = document.getElementById("amigo");
    const buttonAdd = document.querySelector(".button-add");
    const listaAmigos = document.getElementById("listaAmigos");
    const resultado = document.getElementById("resultado");
    const buttonSortear = document.querySelector(".button-draw");

    let amigos = []; // Array que guarda los nombres de los amigos

    // Función para agregar amigos a la lista
    buttonAdd.addEventListener("click", () => {
        const nombre = inputAmigo.value.trim(); // Obtener el valor del input

        // Validar que el campo no esté vacío
        if (nombre === "") {
            alert("Por favor, ingresa un nombre válido.");
            return;
        }

        // Agregar el nombre al array de amigos
        amigos.push(nombre);

        // Crear un nuevo elemento en la lista HTML
        const nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = nombre;
        listaAmigos.appendChild(nuevoElemento);

        // Limpiar el campo de texto
        inputAmigo.value = "";
        inputAmigo.focus();
    });

    // Función para realizar el sorteo
    buttonSortear.addEventListener("click", () => {
        if (amigos.length === 0) {
            alert("Agrega al menos un amigo antes de hacer el sorteo.");
            return;
        }

        // Seleccionar un amigo aleatoriamente
        const indiceAleatorio = Math.floor(Math.random() * amigos.length);
        const amigoSorteado = amigos[indiceAleatorio];

        // Mostrar el resultado
        resultado.textContent = `¡El amigo secreto es: ${amigoSorteado}!`;
    });
});
