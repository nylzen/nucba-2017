// Nos traemos los elementos necesarios
const nameInput = document.getElementById('name');
const surnameInput = document.getElementById('surname');
const dateInput = document.querySelector('#date');
const hourInput = document.getElementById('hour');
const emailInput = document.getElementById('email');
const phoneInput = document.getElementById('phone');
const radioInputs = document.querySelectorAll('input[name="quantity"]');
const checkboxInputs = document.querySelectorAll('input[type="checkbox"]');
const aboutInput = document.getElementById('message');

// En este archivo vamos a tener toooodas las validaciones de los inputs

// Checkeamos el Nombre
const checkTextInput = input => {
  // Input Valido por defecto false
  let valid = false;
  // Guardamos el valor del input en una variable
  const content = input.value.trim();
  //   Si el campo esta vacio mostramos error
  if (isEmpty(content)) {
    showError(input, '* El nombre es obligatorio');
    // Si todo esta ok validamos el form y cambiamos el estado de valid a true
  } else {
    clearError(input);
    // Retornamos el valor de valid
    valid = true;
  }
  return valid;
};

// Checkeamos el email
const checkEmail = () => {
  // Input por defecto false
  let valid = false;

  const emailValue = emailInput.value.trim();
  //   Checkamos si esta vacio
  if (isEmpty(emailValue)) {
    showError(emailInput, '* El email es obligatorio');
  } else if (!isEmailValid(emailValue)) {
    showError(emailInput, '* El email no es valido');
  } else {
    clearError(emailInput);
    valid = true;
  }

  return valid;
};

// Checkeamos el telefono
const checkPhone = () => {
  let valid = false;
  const phoneValue = phoneInput.value.trim();
  if (!isPhoneValid(phoneValue)) {
    showError(phoneInput, '* El telefono no es valido');
  } else {
    clearError(phoneInput);
    valid = true;
  }

  return valid;
};

// Checkeamos la fecha
const checkDate = () => {
  // Input valido por defecto false
  let valid = false;
  //   Guardamos el valor del input
  const dateValue = dateInput.value;
  // Si ponemos una fecha no valida (31 de nov, devuelve un arra vacio)
  //   si pasa eso, mostramos que la fecha ingresada no es valida
  if (!isValidDate(dateValue)) {
    showError(dateInput, '* La fecha ingresada no es valida');
  } else {
    clearError(dateInput);
    valid = true;
  }

  return valid;
};

// Funcion para checkear si el form es valido
const isValidForm = () => {
  const isValidName = checkTextInput(nameInput);
  const isValidSurname = checkTextInput(surnameInput);
  const isValidPhone = checkPhone();
  const isValidEmail = checkEmail();
  const isValidDate = checkDate();

  return (
    isValidName && isValidSurname && isValidPhone && isValidEmail && isValidDate
  );
};
