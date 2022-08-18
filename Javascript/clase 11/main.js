// AddEventListener desde js
// 1. llamar al elemento
// 2. A ese elemento pasarle un escuchador de evento
const h3Alert = document.getElementById('h3Alert');
// console.log(h3Alert);

// Pasarle el evento y escribir directamente la funcion
// h3Alert.addEventListener('click', () => {
//   alert('Escuchando un evento click desde js');
// });
const mostrarAlerta = () => {
  alert('Escuchando un evento click desde JS, pero pasandole una funcion');
};

// h3Alert.addEventListener('click', mostrarAlerta);
// h3Alert.onclick = mostrarAlerta;

// <------------------------------------------------------------------->
// Focus/blur

const inputBlur = document.querySelector('#inputBlur');
// console.log(inputBlur);

// Events Listener
inputBlur.addEventListener('focus', focusFunction);
inputBlur.addEventListener('blur', blurFunction);

// Cuando hacemos focus sobre el input hace tal cosa
function focusFunction() {
  // Vamos a cambiarle el background-color (backgroundColor) a amarillo
  inputBlur.style.backgroundColor = 'yellow';
  //   console.log('hiciste foco en el input');
}

// Cuando deseleccionemos ese input hace tal cosa
function blurFunction() {
  // Vamos a sacarle el background-color (backgroundColor) al input
  inputBlur.style.backgroundColor = '';
}

// Si queremos usar funciones flecha, deberiamos hacer los addEventListener despues de la creacion de las funciones
// const focusFunction = () => {
//   console.log('hiciste foco en el input');
// };

// <------------------------------------------------------------------->
// Change

const inputChange = document.getElementById('inputChange');
// console.log(inputChange);

inputChange.addEventListener('change', mostrarAlertaChange);

function mostrarAlertaChange() {
  alert('Cambio mi value');
}

// <------------------------------------------------------------------->
// Mostar y ocultar una imagen con style
const image = document.getElementById('img');
const hide = document.getElementById('hide');
const show = document.getElementById('show');

// Agregar los escuchadores de envento
hide.addEventListener('click', () => {
  image.style.display = 'none';
});

show.addEventListener('click', () => {
  image.style.display = 'block';
});

// <------------------------------------------------------------------->
// Mostrar y ocultar la imagen con un solo boton
const imgToggle = document.getElementById('imgToggle');
const btnToggle = document.getElementById('toggle');

btnToggle.addEventListener('click', () => {
  imgToggle.classList.toggle('ocultar');
});

// <-------------------------------------------------------->
// Eventos keyboard
const keyboard = document.getElementById('keyboard');

// Keydown Si mantengo apretada la tecla se imprime
// keyboard.addEventListener('keydown', e => {
//   console.log(e);
// });

// KeyUp: Cuando suelto la tecla se activa el evento
// keyboard.addEventListener('keyup', e => {
//   console.log(e);
// });

// keyboard.addEventListener('keydown', e => {
//   console.log(e);
//   if (e.keyCode === 68) {
//     alert('No podes usar esa tecla');
//     e.preventDefault();
//   }
// });
//

//<-------------------------------------------------------->
// Contador
const resultado = document.getElementById('resultado');
const btnAumentar = document.querySelector('.btn-aumentar');
const btnDisminuir = document.querySelector('.btn-disminuir');
const btnReset = document.querySelector('.btn-reset');

// Iniciar una variable de nombre contador que arranque en 0
let contador = 0;

btnAumentar.addEventListener('click', () => {
  contador++;
  //   resultado.innerHTML = contador;
  updateResultado();
});

btnDisminuir.addEventListener('click', () => {
  contador--;
  //   resultado.innerHTML = contador;
  updateResultado();
});

btnReset.addEventListener('click', () => {
  contador = 0;
  //   resultado.innerHTML = contador;
  updateResultado();
});

function updateResultado() {
  resultado.innerHTML = contador;
}

updateResultado();
