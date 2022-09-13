// const getLetter = (ms, value) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const letras = {
//         a: 1,
//         b: 2,
//         c: 3,
//         d: 4,
//         e: 5,
//       };

//       const l = letras[value];

//       if (!l) {
//         reject('No se encontro la letra');
//       } else {
//         resolve({ value });
//       }
//     }, ms);
//   });
// };

// getLetter(500, 'e')
//   .then(pepito => console.log(pepito))
//   .catch(error => console.error(error));

// fetch('http://example.com/movies.json')
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .then(console.log())
//   .catch(error => console.log(error));

// Para que vean la diferencia entre then/catch y try/catch (Tranqui, clases que siguen los vemos con mas frecuencia)
const miPromesa = () => {
  return new Promise((resolve, reject) => {
    resolve('Wizaa');
    // reject('Ups');
  });
};

// Then Catch
const llamarMiPromesa = () => {
  // Llamar a la promesa, con .then le pasamos el valor, la mayoria de las veces no sabemos que vamos a recibir de la api, por defecto lo llamos res o response
  miPromesa()
    .then(res => console.log(`Response: ${res}`))

    .catch(error => console.error(error));
};

// llamarMiPromesa();

// Try Catch
// const llamarMiPromesa = async () => {
//   try {
//     const res = await miPromesa();
//     console.log(res);
//   } catch (error) {
//     console.log(`Pinto este error: ${error}`);
//   }
// };

// llamarMiPromesa();

// Vamos a sacar el cuadrado de un numero con promesas

// const cuadradoNumero = value => {
//   if (typeof value !== 'number') {
//     return Promise.reject(
//       `Error, el valor ${value} que escribiste no es un numero`
//     );
//   }

//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         // Si el nombre de la prop y el valor es igual, se puede obviar el valor y poner solo el nombre de la prop
//         // value:value,
//         value,
//         result: value * value,
//       });
//     }, 500);
//   });
// };

// Refactorizamos la funcion de arriba
const cuadradoNumero = value => {
  return new Promise((resolve, reject) => {
    typeof value === 'number'
      ? setTimeout(() => {
          resolve({ value, result: value * value });
        }, 0 || Math.random() * 1000)
      : reject(`Error, el valor ${value} no es un numero`);
  });
};

cuadradoNumero(0)
  .then(res => {
    console.log(`Respuesta: ${res.value}, ${res.result}`);
    // Devolvemos la res (respuesa) para poder encadenar la siguiente promesa
    return cuadradoNumero(1);
  })
  .then(res => {
    console.log(`Respuesta: ${res.value}, ${res.result}`);
    return cuadradoNumero('asd');
  })
  .then(res => {
    console.log(`Respuesta: ${res.value}, ${res.result}`);
  })
  .catch(err => console.error(err));
