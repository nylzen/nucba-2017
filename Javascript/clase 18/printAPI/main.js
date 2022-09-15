const caja = document.getElementById('caja');

// Guardamos en una variable la url base
const baseURL = 'https://reqres.in/api';

// Esta funcion va a retornar el html de la card
const renderUser = user => {
  const { email, first_name, last_name, avatar } = user;
  return `
    <div class='card'>
        <img src="${avatar}" alt="${first_name}" />
        <h2>${first_name} ${last_name}</h2>
        <p>${email}</p>
    </div> 
    `;
};

// Esta funcion va a hacer la logica para imprimir
const renderUsers = users => {
  caja.innerHTML = users.map(user => renderUser(user)).join('');
};

// const renderUsers = users => {
//   caja.innerHTML = users
//     .map(user => {
//       const { email, first_name, last_name, avatar } = user;
//       return `
//     <div class='card'>
//         <img src="${avatar}" alt="${first_name}" />
//         <h2>${first_name} ${last_name}</h2>
//         <p>${email}</p>
//     </div>
//     `;
//     })
//     .join('');
// };

// Creamos la funcion que se va encargar de comunicarse con la api
const getUsers = async () => {
  try {
    // Hacemos el fetch de la url
    const res = await fetch(`${baseURL}/users?page=1`);

    // Transformar esa respuesta en un json
    const json = await res.json();
    // console.log(json.data);
    const data = json.data;
    // Hay que imprimir, hacer una funcion para imprimir
    renderUsers(data);
  } catch (error) {
    console.error(`Upaaaa se rompio ${error}`);
  }
};

getUsers();
