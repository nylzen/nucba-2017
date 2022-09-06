/*2. Validacion de forms,
Hacer un form que tenga email y contraseña y que valide que el email se un email y la contraseña tengo mayuscula, minuscula y un numero. Si da error, renderizar en el html el texto con un error. Ej, Email invalido / La contraseña tiene que tener una mayuscula, minuscula y un numero.\ */

const emailInput = document.querySelector('#email');
const passInput = document.querySelector('#pass');
const validForm = document.querySelector('#valid-form');

// Funcion para checkear si esta vacio
const isEmpty = value => !value.length;

// Funcion para validar email regex
const isEmailValid = email => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  return re.test(email);
};

// Funcion para validar pw
const isPassSecure = pass => {
  const re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,}$/;
  return re.test(pass);
};

const checkEmail = () => {
  let valid = false;
  const emailValue = emailInput.value.trim();
  // Checkeamos si el campo esta vacio
  if (isEmpty(emailValue)) {
    alert('El campo esta vacio');
  } else if (!isEmailValid(emailValue)) {
    alert('El email es invalido');
  } else {
    valid = true;
  }

  return valid;
};

const checkPass = () => {
  let valid = false;
  const passValue = passInput.value.trim();
  if (isEmpty(passValue)) {
    alert('El campo contraseña esta vacio');
  } else if (!isPassSecure(passValue)) {
    alert('La contraseña no es segura');
  } else {
    valid = true;
  }
  return valid;
};

validForm.addEventListener('submit', e => {
  e.preventDefault();

  let isEmailValid = checkEmail();
  let isPassValid = checkPass();

  let isFormValid = isEmailValid && isPassValid;

  if (isFormValid) {
    validForm.reset();
    alert('Se envio el formulario ta todo ok');
  }
});

// 3.Hacer un input y un boton de enviar. Crear una funcion para pintar en el html lo que escribamos en el input cuando aprentemos el boton de enviar. Si se animan que los datos persistan en el local storage

const form = document.getElementById('form');
const input = document.getElementById('input');
const caja = document.getElementById('caja');

let items = JSON.parse(localStorage.getItem('items')) || [];

const saveLocal = items => {
  localStorage.setItem('items', JSON.stringify(items));
};

// Renderizamos los items
// const createHTML = items => {
//   const html = items
//     .map(item => {
//       return `<p>${item}</p>`;
//     })
//     .join('');

//   caja.innerHTML = html;
// };

const renderItem = item => {
  return `
    <p>${item}</p>
    `;
};

const renderItems = items => {
  caja.innerHTML = items.map(renderItem).join('');
};

const init = () => {
  form.addEventListener('submit', e => {
    e.preventDefault();
    let item = input.value;
    // Una vez que se haga el submit se resetea el input a vacio
    input.value = '';

    // Lo que guarde en item lo tengo que agregar al array
    items = [...items, item];
    saveLocal(items);
    // createHTML(items);
    renderItems(items);
  });
  //   document.addEventListener('DOMContentLoaded', createHTML(items));
  renderItems(items);
};

init();
