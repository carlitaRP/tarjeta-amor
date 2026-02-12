
const textoTitulo = "Para el amor de mi vida:";
const textoMensaje = "Si pudiera elegir un lugar seguro, sería a tu lado, aunque el mundo se desplome, yo estaré contigo. Eres mi refugio, mi alegría, mi todo. Te amo más de lo que las palabras pueden expresar.";
const textoFrase = "Desde ese día, hasta hoy, sigo eligiéndote.";
const textoFirma = "R & C";


const tituloElemento = document.getElementById("titulo");
const mensajeElemento = document.getElementById("mensaje");
const fraseElemento = document.getElementById("frase");
const firmaElemento = document.getElementById("firma");

let indexTitulo = 0;
let indexMensaje = 0;
let indexFrase = 0;
let indexFirma = 0;

function escribirTitulo() {
if (indexTitulo < textoTitulo.length) {
    tituloElemento.textContent += textoTitulo.charAt(indexTitulo);
    indexTitulo++;
    setTimeout(escribirTitulo, 90);
} else {
    setTimeout(escribirMensaje, 400);
}
}

function escribirMensaje() {
if (indexMensaje < textoMensaje.length) {
    mensajeElemento.textContent += textoMensaje.charAt(indexMensaje);
    indexMensaje++;
    setTimeout(escribirMensaje, 55);
} else {
    setTimeout(escribirFrase, 600);
}
}

function escribirFrase() {
if (indexFrase < textoFrase.length) {
    fraseElemento.textContent += textoFrase.charAt(indexFrase);
    indexFrase++;
    setTimeout(escribirFrase, 70);
} else {
    setTimeout(escribirFirma, 600);
}
}

function escribirFirma() {
if (indexFirma < textoFirma.length) {
    firmaElemento.textContent += textoFirma.charAt(indexFirma);
    indexFirma++;
    setTimeout(escribirFirma, 200);
}
}

escribirTitulo();


const inicio = new Date(2022, 7, 26, 0, 0, 0);

function actualizarTiempo() {
const ahora = new Date();
const diff = ahora - inicio;

  const dias = Math.floor(diff / (1000 * 60 * 60 * 24));

const horas = ahora.getHours();
const minutos = ahora.getMinutes();
const segundos = ahora.getSeconds();

document.getElementById("tiempo").textContent =
    `${dias} días ${horas} h ${minutos} min ${segundos} s`;
}
setInterval(actualizarTiempo, 1000);
console.log("Hora del sistema:", new Date().toString());
actualizarTiempo();


function crearCorazon() {
const corazon = document.createElement("div");
corazon.className = "corazon";
corazon.textContent = "🤎";

  corazon.style.left = Math.random() * 100 + "vw";
  corazon.style.fontSize = (Math.random() * 15 + 15) + "px";
  corazon.style.animationDuration = (Math.random() * 3 + 6) + "s";

document.body.appendChild(corazon);

setTimeout(() => {
    corazon.remove();
}, 9000);
}

setInterval(crearCorazon, 400);
