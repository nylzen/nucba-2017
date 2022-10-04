// Traernos las cosas necesarias del html
const caja = document.getElementById('caja');
const loader = document.querySelector('.pokeballs-container');
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

// Definimos la variable de isFetching para activarla cuando estemos haciendo una llamada. Y un objeto que va a almacenar la siguiente llamada a la api, en un principio va a ser null porque todavia no hicimos ninguna llamada
let isFetching = false;

const nextURL = {
  next: null,
};

// Funcion para renderizar un pokemon
const renderPokemon = pokemon => {
  const { id, name, sprites, height, weight, types } = pokemon;
  return `
  <div class="poke">
    <img src="${sprites.other.home.front_default}" alt="${name}" />
    <h2>${name.toUpperCase()}</h2>
    <span class="exp">EXP: ${pokemon.base_experience}}</span>
    <div class="tipo-poke">
        ${types.map(tipo => {
          return `<span class="${tipo.type.name} poke__type">${tipo.type.name}</span>`;
        })}
    </div>
    <p class="id-poke">#${id}</p>
    <p class="height">Height: ${height / 10}m</p>
    <p class="weight">Weight: ${weight / 10}Kg</p>
  </div>
  `;
};

// Funcion para renderizar las cards
const renderPokemonList = pokeList => {
  const cards = pokeList
    .map(pokemon => {
      return renderPokemon(pokemon);
    })
    .join('');
  caja.innerHTML += cards;
};

// Crear la funcion para traer la data de los pokemones
const fetchPokemons = async () => {
  const res = await fetch(`${baseURL}?limit=8&offset=0`);
  const data = await res.json();
  return data;
};

const loadAndPrint = pokemonList => {
  loader.classList.add('show');
  setTimeout(() => {
    loader.classList.remove('show');
    renderPokemonList(pokemonList);
    isFetching = false;
  }, 1000);
};

const init = () => {
  window.addEventListener('DOMContentLoaded', async () => {
    let { next, results } = await fetchPokemons();

    nextURL.next = next;

    const URLS = results.map(pokemon => pokemon.url);
    // console.log(URLS);

    const infoPokemones = await Promise.all(
      URLS.map(async url => {
        const nextPokemons = await fetch(url);
        return await nextPokemons.json();
      })
    );

    renderPokemonList(infoPokemones);
  });

  // Cuando scrolleemos queremos que pasen distintas cosas:
  //   1. Traernos del elemento document.documentElement (Devuelve el Element que es el elemento raiz del document. Por ej, el elemento html, en documentos html. )

  // scrollTop: La propiedad Element.scrollTop obtiene o establece el número de pixels que el contenido de un elemento ha sido desplazado (enrollado) hacia arriba. El scrollTop de un elemento es una medida de la distancia desde el límite superior de un elemento al límite superior de su contenido visible. Cuando un elemento no genera una barra de scroll vertical, el valor de su scrollTop es establecido por defecto a 0.

  // clientHeight: La propiedad de sólo lectura Element.clientHeight devuelve la altura de un elemento en píxeles, incluyendo el padding pero no las barras horizontales, el borde o el margen.

  // scrollHeight: El elemento Element.scrollHeight atributo unicamente de lectura es una medida de la altura del contenido de un elemento, incluyendo el contenido que no es visible en la pantalla debido al desbordamiento. El valor scrollHeight es igual a la altura mínima (donde la altura incluye el relleno , pero no incluye bordes y márgenes) El elemento lo necesita con el fin de adaptarse a todos los contenidos en el punto de vista sin necesidad de utilizar una barra de desplazamiento vertical. Incluye el elemento relleno pero no su margen.

  //   2. Creamos una variable bottom, que nos va a indicar si estamos al final de nuestra pagina. Como sacamos esto? Haciendo la siguiente cuenta
  //   Si la suma entre el valor de desplazamiento hacia arriba y la altura del viewport es mayor o igual a la altura del contenido del elemento (-1, puede variar el numerito segun cuando querramos que se haga el fetch), significa que estamos abajo

  //   3.

  window.addEventListener('scroll', async () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    // console.log(clientHeight);

    const bottom = scrollTop + clientHeight >= scrollHeight - 1;

    if (bottom && !isFetching) {
      isFetching = true;
      // console.log('llamando a la api');
      const nextPokemons = await fetch(nextURL.next);
      const { next, results } = await nextPokemons.json();
      nextURL.next = next;

      const URLS = results.map(pokemon => pokemon.url);
      // console.log(URLS);

      const infoPokemons = await Promise.all(
        URLS.map(async url => {
          const nextPokemons = await fetch(url);
          return await nextPokemons.json();
        })
      );

      loadAndPrint(infoPokemons);
    }
  });
};

init();
