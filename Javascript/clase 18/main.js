// Ejemplito de fetch con then y catch
// fetch('https://pokeapi.co/api/v2/pokemon/', {})
//   // Convertimos la respuesta de la api a formato json. Si no lo convertimos nos va a dar un error de cors
//   .then(response => response.json())
//   // Consoleamos ese json
//   .then(data => console.log(data))
//   //Si tenemos un error caemos en el catch
//   .catch(error => console.log(`Ups: ${error}`));

// Promesas
// Llegaron en el 2016 para solucionar lo que era el callback hell
// callEndpoint('api/sarasa', function(result)){
//     callEndpoint('api/getUser' + result.user, function(result)){
//         callEndpoint('api/getUser' + result.user, function(result))
//         callEndpoint('api/getUser' + result.user, function(result))
//     }
// }

// callEnpoint('api/sarasa')
//     .then(result => callEnpoint('api/getuser' + result.user))
//     .then(result => callEnpoint('api/getuser' + result.user))
//     .then(result => callEnpoint('api/getuser' + result.user))
//     .then(result => callEnpoint('api/getuser' + result.user))
//     .then(result => callEnpoint('api/getuser' + result.user))

// Async/await

// fetch('https://pokeapi.co/api/v2/pokemon/', {})
//   // Convertimos la respuesta de la api a formato json. Si no lo convertimos nos va a dar un error de cors
//   .then(response => response.json())
//   // Consoleamos ese json
//   .then(data => console.log(data))
//   //Si tenemos un error caemos en el catch
//   .catch(error => console.log(`Ups: ${error}`));

// Transformamos una peticion con fetch y then/catch a async/await
const miFetch = async () => {
  try {
    // Aca adentro va a ir nuestro codigo a intentar si esta todo ok
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu');

    const data = await response.json();

    console.log(data);
  } catch (error) {
    // Aca va a ir el codigo en caso de que haya un error
    alert(error);
  }
};

miFetch();

// Distintos tipos de peticiones, GET (Que es la que estamos usando en este momento), POST (Subir), DELETE, PUT(Editar)
