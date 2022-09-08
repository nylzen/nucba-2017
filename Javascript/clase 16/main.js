// Callstack
const hola = () => {
  console.log('Hola');
};

const nucba = () => {
  console.log('Nucba');
};

const init = () => {
  hola();
  nucba();
};

// init();

// Memory Heap

const obj1 = { valor: 1 };
const obj2 = obj1;

// console.log(obj1, obj2);
obj2.valor = 2;

// console.log(obj1.valor);
// console.log(obj1 === obj2);

// console.log(obj1, obj2);

// Event loop
// console.log('Buenas');

// setTimeout(() => {
//   console.log('Nucba');
// }, 500);

// console.log('Probando event loop');

// Stack/CallStack (Pila de platos): Va apilando de forma organizada las diferentes instrucciones que se llamen. Llevar un rastro de donde esta nuestra app y en punto de ejecucion nos encontramos.

// Memory Heap: De forma desorganizada guarda la info de las variables/funciones, etc

// Schedule tasks: Se agrega a la cola de tareas las tareas programadas para ejecutarse

// Cola de tareas (task qeue): Son las tareas que estan listas para pasar a la pila de llamadas y ejecutarse.
