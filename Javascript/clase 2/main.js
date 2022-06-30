// var nombre;

// console.log(nombre);
// nombre = 'Nelson';

// function variables() {
//   var variableLocal = 'esto es local';
// }

// console.log(variableLocal);

//* Ejemplos Scope
var a = 'Estoy Global';

function holi() {
  var b = 'Estoy en una funcion';
}

{
  var c = 'Estoy en bloque';
}

{
  let d = 'Estoy en bloque';
  const e = 'Estoy en bloque';
}

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(e);

// Operadores
/*
| == / Es igual / a == b
console.log(18 == '18');// true

| === / Es estrictamente igual / a === b
console.log(18 === '18');// false

| != / Es distinto / a != b
console.log(18 != 18); // false

| !== / Es estrictamente distinto / a !== b
console.log(18 !== '18'); // true

| < / Es menor / a < b
console.log(9 < 10); // true

| <= / Es menor o igual / a <= b
console.log(9 <= 9); // true

| > | >= \ se hace igual que el de menor o igual

| && / Operador de and (y)
console.log(18 > 7 && 9 < 9); // false

| || / Operador de or (o)
console.log(18 > 7 || 9 < 9); // true

| ! / Operador not (negar)
console.log(!true); // false

*/

// * Condicionales
// Sintaxis
// if (condicion) {
//   // Codigo a ejecutar si se cumple la condicion, o sea si es true
//   console.log();
// }

// Que pasa si la condicion es falsa y quiero que haga algo
// if (condicion) {
//   // si es verdadera ejecuta lo de aca adentro
//   console.log();
// } else {
//   // ejecuta esto
// }

// * Ejmplo de if

// let llueve = true;

// if (llueve) {
//   console.log('Esta lloviendo, no te olvides del paraguas');
// } else {
//   console.log('Sali tranqui, no llueve');
// }

// Podemos comprobar si es true basicamente usando solo llueve, js asume que es true
// Y si lo queremos negar le decimos !llueve

// * Otro ejemplo de if
// let edad = 27;
// let nombre = 'Nelson';

// if (edad > 18 && nombre === 'Pepito') {
//   console.log('Se puede tomar una birrita');
// } else {
//   console.log('Que tome juguito');
// }

// * Switch
// Vamos a ver el ejemplo con if else y despues pasado a switch

// const mascota = 'pato';

// if (mascota === 'lagarto') {
//   console.log('Tengo un lagarto');
// } else if (mascota === 'perro') {
//   console.log('Tengo un perro');
// } else if (mascota === 'gato') {
//   console.log('Tengo un gato');
// } else if (mascota === 'serpiente') {
//   console.log('Tengo una serpiente');
// } else if (mascota === 'loro') {
//   console.log('Tengo un loro');
// } else {
//   console.log('No tengo mascota');
// }

// Pasemos esto a switch

// const mascota = 'pepito';

// switch (mascota) {
//   case 'lagarto':
//     console.log('Tengo un lagarto');
//     break;
//   case 'perro':
//     console.log('Tengo un perro');
//     break;
//   case 'loro':
//     console.log('Tengo un loro');
//     break;
//   default:
//     console.log('Tengo otra mascota');
//     break;
// }

// * Sintaxis
// switch (expresion) {
//   case 1:
//     // codigo a ejecutar si es true
//     break;
//   case 2:
//     // codigo a ejecutar si es tru
//     break;
//   default:
//     // si nada coincide que imprima lo de aca
//     break;
// }

// * Ejemplo Switch y scope
const mandado = 'Ir de compras';

switch (mandado) {
  case 'Ir al dentista': {
    let mensaje = 'No me gusta ir al dentista';
    console.log(mensaje);
    break;
  }
  case 'Ir de compras': {
    let mensaje = 'Me encanta ir de compras';
    console.log(mensaje);
    break;
  }
  default:
    console.log('Sin mandados');
    break;
}

// No podemos declarar la misma variable let mensaje porque ya esta en ese bloque, la consola nos dice que mensaje ya esta declarada
// * Para solucionarlo, le agregamos {} despues de cada case
// case 1: {
//   // codigo a ejecutar
// }
