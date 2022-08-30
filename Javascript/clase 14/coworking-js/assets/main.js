// Nos traemos todos los elementos necesarios
const cardsContainer = document.getElementById('cards-container');
const form = document.getElementById('form');

// Definimos la agenda
let agenda = [];

// Funcion que nos va a devolver la agenda en su estado actual sumando el nuevo turno cargado.
const saveData = () => {
  agenda = [
    ...agenda,
    {
      id: agenda.length + 1,
      name: nameInput.value,
      surname: surnameInput.value,
      phone: phoneInput.value,
      email: emailInput.value,
      date: formatDate(dateInput.value),
      time: hourInput.value,
      quantity: getRadioValue(radioInputs),
      extras: getCheckedOptions(checkboxInputs),
      about: aboutInput.value,
    },
  ];
};

// Funcion para crear la card de turno
const renderTurn = turn => {
  const { id, name, surname, phone, email, date, time, quantity, extras } =
    turn;
  return `
  <div class="card ${setCardBackground(quantity)}">
    <div class="card__left">
        <h2 class="card__title">Orden: N${id} - ${name} ${surname}</h2>
           <p class="card__qty">${quantity}</p>
           <p class="card__extras">
             Extra: ${extras}
           </p>
           <div class="tags">
             <span class="card__hour ${setTimeBackground(
               quantity
             )}">${time} HS</span>
             <span class="card__date ${setDateBackground(
               quantity
             )}">${date}</span>
           </div>
         </div>
         <div class="card__right">
         <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${email}" target="_blank"><i class="fa-solid fa-envelope"></i></a>
         <a href="https://api.whatsapp.com/send?phone=+549${phone}&text=Boenas" target="_blank"><i class="fa-solid fa-phone-flip"></i></a>
           <img
             src=${setCardImg(quantity)}
             class="card__img ${setCardImgClass(quantity)}"
             alt=""
           />
         </div>
       </div>
  `;
};

// Funcion de la logica para renderizar. Misma logica que hicimos en el todo
const renderAgenda = () => {
  cardsContainer.innerHTML = agenda.map(turn => renderTurn(turn)).join('');
};

// Funcion para colocar los listener y estar mas organizados
const init = () => {};
init();
