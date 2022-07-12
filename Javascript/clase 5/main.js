// const multiplicarPor = (numero) => {
//   let x = numero;

//   return function (otroNumero) {
//     return x * otroNumero;
//   };
// };

// // console.log(multiplicarPor(5)); // que me devuelve?

// // const unaVariable = multiplicarPor(5);

// // Podemos hacer mas variables
// const multiplicarPorTres = multiplicarPor(3);
// const multiplicarPorCinco = multiplicarPor(5);
// console.log(multiplicarPorTres(100));
// console.log(multiplicarPorCinco(12341234));

//* Un closure es cuando una funcion devuelve otra funcion y le pasa todo su scope a la funcion que devuelve.

// Objetos

//  Objeto literal
// let auto = {
//   propiedad: valor,
//   key: value,
//   clave: valor,
// };

let auto = {
  marca: 'Fiat',
  modelo: 'Uno',
  anio: 2002,
  combustible: 'Nafta',
  seguro: true,
  color: {},
};

let array = ['auto', 'moto', 'barco'];

// Ejemplito de array + objetos
let peliculas = [
  {
    titulo: 'Volver al futuro',
    anio: 2002,
    director: 'asd',
  },
  {
    titulo: 'Volver al futuro',
    anio: 1984,
    director: 'asd',
  },
  'hola',
  211,
];

// console.log(peliculas);

// Como accedo a un valor de un objeto?
// console.log(auto);
// console.log(auto.marca);

// let auto = {
//     marca: 'Fiat',
//     modelo: 'Uno',
//     anio: 2002,
//     combustible: 'Nafta',
//     seguro: true,
//     color: {},
//   };

// Clases y Constructores
// class Auto {
//   constructor(marca, modelo, anio, seguro) {
//     (this.marca = marca),
//       (this.modelo = modelo),
//       (this.anio = anio),
//       (this.seguro = seguro);
//   }
// }

// let auto1 = new Auto('Fiat', 'Uno', 2002, true);
// let auto2 = new Auto('Audi', 'a3', 2010, false);

// console.log(auto1);
// console.log(auto2);

// Acceder a la marca
// console.log(auto1.marca);

// Ejemplo 2 con metodos
class Auto {
  constructor(marca, modelo, anio, seguro) {
    (this.marca = marca),
      (this.modelo = modelo),
      (this.anio = anio),
      (this.seguro = seguro);
  }

  //   Vamos a crear un metodo
  arrancar = function () {
    return 'El auto arranco';
  };

  //   Metodo que nos devuelva la marca
  getMarca = () => {
    return this.marca;
  };
}

let auto1 = new Auto('Fiat', 'Uno', 2002, true);
// console.log(auto1.arrancar());

let auto2 = new Auto('Audi', 'a3', 2010, false);

// console.log(auto2.arrancar());
// console.log(auto1.getMarca()); // Lo estamos devolviendo con el metodo
// console.log(auto1.marca); // Devolvemos la marca pero como propiedad

// Resumen lv5
/*
1.Clases: Definimos las caracteristicas del Objeto (el molde) 
2.Objeto: Instancia de esa clase (los autos que creamos por ej)
3.Propiedades: Caracteristias que tiene el objeto, por ej la marca
4.Metodos: la capacidad que tiene el objeto, por ej arrancar
5.Constructor: Metodo que llamamos a la hora de crear instancias
6.This: Si es dentro de una funcion, se refiere a si misma. Y si es dentro de un objeto, se refiere al objeto
*/

// Ejemplo del robot

class Robot {
  constructor(color, posicionX, posicionY) {
    (this.color = color),
      (this.posicionX = posicionX),
      (this.posicionY = posicionY);
  }

  //   Tiene un metodo para desplazar el robot
  desplazar = function (x, y) {
    (this.posicionX = x), (this.posicionY = y);
  };

  //   Tiene un metodo para imprimir en la consola la posicion del robot
  posicion = function () {
    console.log(
      `El robot ${this.color} esta en X: ${this.posicionX} y en Y: ${this.posicionY}`
    );
  };
}

// Creemos instancia de robot azul y su posicion
let robot1 = new Robot('Azul', 20, 40);
let robot2 = new Robot('Rojo', 10, 50);

// Mostramos el robot en la consola
// console.log(robot1);

// Llamemos al metodo posicion que nos devuelve en donde esta parado el robot
// robot1.posicion();

// Movamos la posicion del robot azul a otras coordenadas
// robot1.desplazar(50, 50);

// Mostremos los cambios del robot, entonces tendriamos que volver a llamar a su posicion
// robot1.posicion();

/*
1. Paso uno creamos la clase del Robot con la palabra reservada de class
2. Llamamos al constructor y le pasamos los parametros(propiedades) que va a tener el Robot
3.Llamamos a this.nombrePropiedad igual a la propiedad
4.Creamos los metodos de desplazar, para modificar las coordenadas del robot
5. Creamos el metodo de posicion para imprimir por consola la posicion actual del robot
6. Crear la instancia del objeto
*/

// Ejemplo de variables privadas.

class Persona {
  constructor(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;

    // Aca creamos una variable privada, o sea que no puedo acceder desde afuera
    let pass = 12345;

    // Creemos un metodo para que nos devuelva la pass
    this.getPass = function () {
      return pass;
    };
  }
  saludar = () => {
    console.log(
      `Hola soy ${this.nombre}, tengo ${
        this.edad
      } y mi contraseña es ${this.getPass()}`
    );
  };
}

let pepito = new Persona('Pepito', 24);
// console.log(pepito);
// Accedemos al nombre de pepito
console.log(pepito.nombre);

// Que pasa si quiero acceder a la pass?
console.log(pepito.pass);

// Accedamos a la pass con el metodo a ver que onda
console.log(pepito.getPass());

// Llamemos al metodo de saludar
pepito.saludar();
