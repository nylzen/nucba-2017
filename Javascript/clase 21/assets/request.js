const requestCoins = async value => {
  const baseURL = `https://api.coinlore.net/api/tickers/?start=0&limit=100`;
  const response = await fetch(baseURL);
  const json = await response.json();
  //   console.log(json);
  const data = json.data;
  // console.log(data);

  const results = value
    ? divideArray(
        data.filter(coin =>
          coin.name.toLowerCase().includes(value.toLowerCase())
        ),
        10
      )
    : divideArray(data, 10);

  console.log(results);
  //   Esta funcion va a devolver este objeto vamos a manejar la paginacion.
  /*
    results: Los resultados obtenidos
    total: El largo del array
    current: El elemento actual del array que rendirazamos en cada paso
    prev: Para la paginacion previa (arranca en null porque no hay pagina previa)
    next: Para la paginacion siguiente
  */
  return {
    results: results,
    total: results.length,
    current: 0,
    prev: null,
    next: 1,
  };
};

function divideArray(arr, size) {
  // Declaramos un array vacio
  let chunk = [];

  for (let i = 0; i < arr.length; i += size) {
    // Push al array vacio, el tramo desde el indice del loop hasta el valor size + el indicador
    chunk.push(arr.slice(i, i + size));
  }

  return chunk;
}
