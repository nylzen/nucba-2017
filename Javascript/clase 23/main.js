// this
// const user = {
//   name: 'Nelson',
//   age: 27,
//   showUser() {
//     console.log(this);
//     return 'Holis';
//   },
// };

// console.log(user);
// console.log(user.showUser());

class Pelicula {
  //   nombre = 'Spiderman';
  //   id = 1;
  //   Por cada clase puede haber 1 solo constructor
  constructor(nombre, id) {
    this.nombre = nombre;
    this.id = id;
  }

  //   Pero metodos puede haber los que queramos
  reproducir() {
    return `La peli ${this.nombre} esta ao vivo el id es ${this.id}`;
  }
}

const peliculaClase = new Pelicula('Spiderman', 1);
// console.log(peliculaClase.reproducir());
// console.log(peliculaClase);
const peliculaClase2 = new Pelicula('LOTR', 2);
// console.log(peliculaClase2.reproducir());

// Herencia
class Serie extends Pelicula {
  constructor(nombre, id, capitulo) {
    super(nombre, id);
    this.capitulo = capitulo;
  }
  reproducirCapitulo() {
    return `Reproduciendo Capitulo ${this.capitulo} de la serie ${this.nombre}`;
  }
}

const suits = new Serie('suits', 2, 15);
// console.log(suits);
// console.log(suits.reproducirCapitulo());

class Persona {
  constructor(name, lastname) {
    this.name = name;
    this.lastname = lastname;
    this.displayName = function () {
      return `${this.name} ${this.lastname}`;
    };
  }
}

const lionel = new Persona('Lionel', 'Messi');

// console.log(lionel.name);
// Actualizamos el nombre
lionel.name = 'Leo';
// console.log(lionel.name);
// Llamamos al metodo
// console.log(lionel.displayName());

// Creamos un nuevo metodo para esta instacia que solo la va a tener Lionel

// lionel.saludar = function () {
//   return `Hola soy ${this.name} ${this.lastname}`;
// };

// console.log(lionel.saludar());

// Creemos una nueva persona
const cristiano = new Persona('Cristiano', 'Ronaldo');
// console.log(cristiano.name);
// Consoleamos el nombre completo
// console.log(cristiano.displayName());

// Accedemos al metodo saludar
// console.log(cristiano.saludar());

Persona.prototype.saludar = function () {
  return `Hola soy ${this.name} ${this.lastname}`;
};

// console.log(lionel.saludar());
// console.log(cristiano.saludar());

// Tipos de datos primitivos
// console.log(typeof 'holis');
// console.log(typeof 100);
// console.log(typeof false);

// console.log(typeof {});
// console.log(typeof []);
// console.log(typeof new Date());
// console.log(typeof new RegExp());

// console.log(new Number(100));
// console.log(new String('Holis'));
// console.log(new Boolean(true));
// console.log(new Array([1]));

// const pepe = [1, 2, 3];
// console.log(pepe);

// Creemos un metodo de string para buscar una letra
// Al objeto string, le dijimos que le vamos a cambiar el prototype y vamos a crear un metodo nuevo llamado findLetter, que recibe por parametro una letra y nos devuelve el indice de una letra
String.prototype.findLetter = function (letter) {
  return this.indexOf(letter);
};

// console.log('Holis'.findLetter('o'));

// Creemos uno para arrays
Array.prototype.getLastItem = function () {
  return this[this.length - 1];
};

// console.log([1, 2, 3, 4, 5].getLastItem());

//call/apply/bind

const usuario = {
  name: 'Pepe',
};

const producto = {
  name: 'Joystick',
};

function showInfo(pedidos, cuotas) {
  return `${this.name} tiene ${pedidos} pedidos en ${cuotas} cuotas`;
}

// console.log(showInfo(1, 2));
// Aca podemos usar call
// Cuando ejecutamos call tenemos que pasarle dos parametros, el primero va a ser el objeto y segundo todos los parametros que pida funcion
// console.log(showInfo.call(usuario, 1, 12));
// console.log(showInfo.call(producto, 1, 12));

// Tenemos Apply
// Cuando hacemos uso de apply tenemos que pasar los parametros de la funcion en un array []
// console.log(showInfo.apply(usuario, [5, 5]));

// Bind
const nuevaFuncion = showInfo.bind(usuario);
console.log(nuevaFuncion(17, 1));

// Objetivo que tienen estos 3, asociar un objeto al this

// Call nos pide los parametros separados por coma, apply los pide en un array y bind asocia el objeto y devuelve una funcion
