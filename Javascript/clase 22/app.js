// Fetcheamos con promesas usando then y catch
// fetch('https://rickandmortyapi.com/api/character')
//   .then(resp => resp.json())
//   .then(data => {
//     let results = data.results;
//     console.log(results);
//     return results;
//   })
//   .catch(error => console.error(`Upaaaa ${error}`));

// Hagamos lo mismo pero con async await

// try catch es el equivalente al then catch

const caja = document.querySelector('.caja');
const btn = document.getElementById('btn');

const printCharacter = character => {
  // Destructuring
  const { image, name, origin } = character;
  return `
    <div>
        <img src="${image}" alt="" />
        <h1>${name}</h1>
        <p>${origin.name}</p>
    </div>
    `;
};

const renderCharacters = charactersList => {
  caja.innerHTML = charactersList.map(printCharacter).join('');
};

const { log } = console;
log('holis');

const fetcheandoRick = async () => {
  try {
    const resp = await fetch('https://rickandmortyapi.com/api/character');
    //   Si no lo convertimos en un json nos va a tirar error de cors
    //   console.log(resp);
    const json = await resp.json();
    //   console.log(json);
    const results = json.results;
    console.log(results);

    // Aca ejecutamos a la funcion que va a renderizar y le estamos pasando por parametro el array de objetos con toda la data
    renderCharacters(results);
  } catch (error) {
    console.log(`Funcion Fetch: ${error}`);
  }
};

fetcheandoRick();
