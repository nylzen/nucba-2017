// console.log(document.getElementById('logo'));
// Che JS, del documento traeme el elemento que tenga el id logo
// getElementById
const logo = document.getElementById('logo');

// console.log(logo);
// console.dir(logo);

// getElementsByClassName
// Devuelve los elementos que tengan la clase que le estamos pasando, esto devuelve un htmlcollection
// const parrafos = document.getElementsByClassName('parrafo');
// console.log(parrafos);

// getElementsByTagName
// Devuelve los elementos que tengan la etiqueta que le estamos pasando, esto devuelve un html collection
const pTag = document.getElementsByTagName('p');
// console.log(pTag);

// Para recorrer podemos usar un for
// for (let i = 0; i < pTag.length; i++) {
//   console.log(pTag[i].innerHTML);
// }

// Y si queremos usar un forEach tenemos que convertir el HTMLCollection a un array, podemos hacerlo con spread operator
let pTagArr = [...pTag];
// console.log(pTagArr);

// pTagArr.forEach(item => {
//   console.log(item.innerHTML);
// });

// Query Selector
// Devuelve la primera coincidencia del elemento, si no encuentra ninguno devuelve null
const header = document.querySelector('.header');
// console.log(header);
// const p = document.querySelector('.parrafo');
// console.log(header);
// console.log(p);

const p = document.querySelectorAll('.parrafo');
// console.log(p);

// p.forEach(item => console.log(item));

// Agregamos texto dentro de un parrafo
const addText = document.getElementById('agregar-texto');
console.log(addText.textContent);
addText.innerHTML = '<b>Hola estamos</b> agregando texto';
console.log(addText.textContent);

// Set time out
// Piensenlo como un temporizador para ejecutar algo
setTimeout(() => {
  console.log('hola con 2 segundos de retraso');
}, 2000);

// set interval
// const repetirCadaSegundo = () => {
//   setInterval(mandarLog, 2000);
// };

// const mandarLog = () => {
//   console.log('Pasaron 2 segundos');
// };

// repetirCadaSegundo();

// Location

// let url = document.createElement('a');
// url.href = 'https://www.google.com';
// console.log(url);
// console.log(url.protocol);
// console.log(url.host);

// console.log(window.location.href);
// window.location = 'https://www.google.com';

// Creemos un elemento desde js
// 1. Traernos el contenedor (o donde querramos agregar la etiqueta) y guardarlo en una variable
// 2.Crear el elemento en este caso un h2
// 3. A ese elemento agregarle el contenido
// 4. Agregarlo al div contenedor
const contenedor = document.getElementById('contenedor');
// console.log(contenedor);

// Creamos el elemento
const h2 = document.createElement('h2');
// Creamos el contenido para esa etiqueta
h2.textContent = 'Hola mama estoy escribiendo html desde js';
// Tenemos que agregar este h2 en algun lado del html
contenedor.appendChild(h2);
