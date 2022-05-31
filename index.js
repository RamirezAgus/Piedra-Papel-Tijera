

const mostrarEleccionJugador = document.createElement("h1"); // CREAMOS LOS ELEMENTOS.
const mostrarEleccionCompu = document.createElement("h1");
const mostrarResultado = document.createElement("h1");
const mostrarJuego = document.getElementById("juego");
const container = document.querySelector(".container");
mostrarJuego.append(mostrarEleccionJugador, mostrarEleccionCompu, mostrarResultado); // JUNTAMOS LOS ELEMENTOS CON append.



const saludo = () => {                                       // CREAMOS UNA FUNCION PARA SALUDAR.
    alert("Bienvenido, vamos a jugar!");
    let nombre = prompt("Ingrese su nombre");
    while (nombre === "" || !isNaN(parseInt(nombre))) {
        nombre = prompt("Ingrese su nombre");
    }
    container.innerHTML = `<h1>Bienvenido ${nombre}</h1>`;
}

const seleccion = ["piedra", "papel", "tijera"];         // CREAMOS ARRAY PARA SELECIONAR LAS OPCIONES.

let eleccionJugador;
let eleccionCompu;

const clickear = (el) => {                              // CREAMOS LA FUNCION PARA QUE PUEDA OPERAR EL JUGADOR.
    eleccionJugador = el.target.id;
    mostrarEleccionJugador.innerHTML = "Eleccion Jugador: " + eleccionJugador;
    eleccionesRandom();
    resultado();
}



const eleccionesRandom = () => {                            // CREAMOS LA FUNCION QUE PERMITA UNA OPERACION ALEATORIA DE LA MAQUINA.
    const random = seleccion[Math.floor(Math.random() * seleccion.length)];
    eleccionCompu = random;
    mostrarEleccionCompu.innerHTML = "La Compu eligio: " + eleccionCompu;
}

for (let i = 0; i < seleccion.length; i++) {              // CREAMOS LA ITERACION JUNTO CON LOS BOTONES PARA PODER SELECCIONAR LAS OPCIONES.
    const boton = document.createElement("button");
    boton.id = seleccion[i]
    boton.innerHTML = seleccion[i];
    boton.addEventListener("click", clickear);
    mostrarJuego.appendChild(boton);
}

const resultado = () => {                             // CREAMOS LA FUNCION QUE DARA EL RESULTADO.
    switch (eleccionJugador + eleccionCompu) {
        case "tijerapapel":
        case "piedratijera":
        case "papelpiedra":
            mostrarResultado.innerHTML = "Ganaste!";
            break;
        case "papeltijera":
        case "tijerapiedra":
        case "piedrapapel":
            mostrarResultado.innerHTML = "Perdiste!";
            break;
        case "papelpapel":
        case "tijeratijera":
        case "piedrapiedra":
            mostrarResultado.innerHTML = "Empate!";
            break;
    }
}

saludo();






