const buttonSubmit = document.getElementById('submit');
const allNames = document.querySelector('#allNames');

// Creamos un array de nombres
let names = [
  'Nelson',
  'Messi',
  'Facu',
  'Andres',
  'Ignacio',
  'Fer',
  'Jorge',
  'Sol',
];

// Funcion simulara la base y el pick random de nombre
const nameSelector = () => {
  // Va a retornar una promesa
  return new Promise((resolve, reject) => {
    // Si queremos devolver un valor OK, usamos resolve y si queremos devolver un error usamos el reject
    // reject('Ta todo bien');
    setTimeout(() => {
      // Hagamos que nos devuelva un numerito random
      let selectedName;
      let randomNumber = Math.floor(Math.random() * 10);
      selectedName = names[randomNumber];
      //   resolve(selectedName);
      if (selectedName) {
        resolve(selectedName);
      } else {
        reject(`No hay nombres en el indice ${randomNumber}`);
      }
    }, 1000);
  });
};

// Quiero hacer una funcion que se comunique con la "Base de datos de nombre" y me imprima un nombre al azar
const onClick = async () => {
  try {
    const nameValue = await nameSelector();
    //   console.log(nameValue);
    //   Despues aca falta el codigo para renderizar en html
    const tagH4 = document.createElement('h4');
    tagH4.innerHTML = nameValue;
    allNames.appendChild(tagH4);
  } catch (error) {
    alert(error);
  }
};

// Add Event Listener
buttonSubmit.addEventListener('click', onClick);
