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
