// Funcion para formatear la fecha que nos devuelve el input de tipo date.
// El value del input date devuelve un string '2022-08-29', nosotros queremos tener 29/08/2022
// Para hacer esto usamos 3 metodos:
// 1. split: Nos da '2022-08-29' y lo transforma a ['2022','08','29']
// 2. reverse: ['29','08','2022']
// 3. join: "29/08/2022"
const formatDate = date => {
  const splitDate = date.split('-').reverse().join('/');
  return splitDate;
};

//Funcion para obtener el value seleccionado de los inputs de tipo radio (cantidad de personas)

const getRadioValue = inputs => {
  const checkedInput = [...inputs].find(input => input.checked);
  return checkedInput.value;
};

// Funcion para obtener los values de los inputs de tipo checkbox (extras)
const getCheckedOptions = inputs => {
  const checkedOptions = [...inputs]
    .filter(input => input.checked)
    .map(opt => opt.value);
  return checkedOptions;
};

// Formato para las cards
// Funcion para setear el color de la card segun la cantidad de personas que habra en el espacio de trabajo
// Recibir: La cantidad
// Devolver: Una clase que le va a dar el color de background a la card
const setCardBackground = quantity => {
  return quantity === 'Más de 10'
    ? 'violet-card'
    : quantity === 'Entre 5 y 10'
    ? 'red-card'
    : 'black-card';
};

// Funcion para setear el color del span del horario, segun la cantidad de personas que habra
// Recibir: cantidad
// Devolver: Una clase que le va a dar el color de background al span de horario
const setTimeBackground = quantity => {
  return quantity === 'Menos de 5' ? 'red-card' : 'black-card';
};

// Funcion para setear el color del span de la fecha, segun la cantidad de personas que habra
// Recibir: cantidad
// Devolver: Una clase que le va a dar el color de background al span de fecha
const setDateBackground = quantity => {
  return quantity === 'Más de 10' ? 'red-card' : 'violet-card';
};

// Funcion para setear la imagen que va a acompañar a las cards segun la cantidad de personas que habra en el espacio de trabajo
// Recibir: cantidad
// Devolver: La ruta de la imagen que se tiene que mostrar

const setCardImg = quantity => {
  return quantity === 'Más de 10'
    ? './assets/img/server.png'
    : quantity === 'Entre 5 y 10'
    ? './assets/img/laptop.png'
    : './assets/img/lupa.png';
};

// Funcion para setear la clase de la imagen que acompañara a la card
// Recibir: Cantidad
// Devolver: La clase
const setCardImgClass = quantity => {
  return quantity === 'Más de 10'
    ? 'server-img'
    : quantity === 'Entre 5 y 10'
    ? 'laptop-img'
    : 'lupa-img';
};

// Manejo de fechas
const getNextDay = () => {
  let tomorrow = new Date();
  // console.log(tomorrow);
  tomorrow.setDate(tomorrow.getDate() + 1);
  // console.log(tomorrow);
  return tomorrow;
};

// Funcion para formatear el numero de fecha
const padTo2Digits = num => {
  return num.toString().padStart(2, '0');
};

// Funcion para que en base a una fecha obtengamos un año, mes y dia y retornemos la fecha en el formato que necesitemos
const getTomorrowDate = () => {
  let year = getNextDay().getFullYear();
  // console.log(year);
  let day = getNextDay().getDate();
  // console.log(day);
  let month = getNextDay().getMonth() + 1;
  // console.log(month);
  return `${year}-${padTo2Digits(month)}-${padTo2Digits(day)}`;
};

const setDateIntervals = () => {
  dateInput.value = getTomorrowDate();
  dateInput.min = getTomorrowDate();
  dateInput.max = getNextDay().getFullYear() + '-12-31';
};

// Checkeamos las validaciones
// Funcion para checkear si el campo esta vacio
const isEmpty = value => !value.length;

// Checkeamos si el email es valido
const isEmailValid = email => {
  const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
  // Testeamos
  return re.test(email);
};

// Checkeamos si el telefono es valido (10 numeros) Va a aceptar celulares
const isPhoneValid = phone => {
  const re = /^[0-9]{10}$/;
  // Testeamos
  return re.test(phone);
};

// Checkeamos si la fecha dada por el input es valida
// 1. Creamos una variable con la fecha actual en el formato por defecto del objeto Date
// 2.Creamos otra variable en la que transformamos la fecha dada por el input en una formateada por el objeto de JS
const isValidDate = date => {
  const currentDate = new Date();
  const turnDate = new Date(date);
  // console.log(currentDate);
  return date.length && currentDate < turnDate; // true o false
};

// Funciones de manejo de errores
// Funcion para mostrar error
const showError = (input, message) => {
  const formField = input.parentElement;
  formField.classList.add('error');
  const error = formField.querySelector('small');
  error.textContent = message;
};

// Funcion para borrar el error
const clearError = input => {
  const formField = input.parentElement;
  formField.classList.remove('error');
  const error = formField.querySelector('small');
  error.textContent = '';
};
