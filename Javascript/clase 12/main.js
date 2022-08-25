// Primer paso traernos los elementos de html
const input = document.querySelector('.input-text');
const addForm = document.querySelector('.add-form');
const tasksList = document.querySelector('.tasks-list');
const deleteBtn = document.querySelector('.deleteAll-btn');

// Definimos la lista de tareas. Si existe un array de tareas en el localstorage nos va a traer esa lista. En caso de que no exista ese array en el localStorage, va a ser un array vacio.

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Creamos la funcion para guardar las tareas en el localstorage a medida que vayamos agregando.
const saveLocalStorage = tasksList => {
  localStorage.setItem('tasks', JSON.stringify(tasksList));
};

// Creamos una funcion que va a recibir una tarea y se va a encargar del renderizado de cada tarea INDIVIDUAL.
// El data-id(lo vamos a usar para eliminar una tarea)
const createTask = task =>
  `<li>${task.name} <img class="delete-btn" src="./img/delete.svg" data-id=${task.taskId}></li>`;

// Creemos la logica de renderizacion de la lista de tareas. Va a recibir la lista de tareas y mediante el uso de map va a renderizar cada una de las tareas, usando createTask (que la creamos previamente.). Por ultimo usamos el metodo de join, para evitar que aparezca una coma entre las tareas
const renderTasksList = todoList => {
  tasksList.innerHTML = todoList.map(task => createTask(task)).join('');
};

// Creamos la logica para esconder el boton de borrar todas las taresas. Si no hay tareas en la lista de tareas, va a desaparecer, si no se muestra
const hideDeleteAll = taskList => {
  if (!taskList.length) {
    deleteBtn.classList.add('hidden');
    return;
  }
  deleteBtn.classList.remove('hidden');
};

// Funcion para agregar tareas
// 1. Al ser un form usamos prevent default para evitar el comportamiento del submit
// 2. Guardamos en una variable la trea ingresada en el input y usamos el metodo trim para borrar los espacios.
// 3. Comprobamos si el input esta vacio o si la tarea ya existe dentro del array de tareas.
// 4. Si pasa este proceso de verificacion, usando el spread operator asignamos las tareas al array.
// 5. Reseteamos el valor del input
// 6. Renderizamos las tareas
// 7. Guardamos en el localstorage
const addTask = e => {
  // Cancelamos el evento por defecto del submit (recargar)
  e.preventDefault();
  //   Guardar en una variable la tarea que ingresemos en el input.
  const taskName = input.value.trim();
  //   console.log(taskName);
  if (!taskName.length) {
    alert('Por favor, ingresa una tarea');
    return;
  } else if (
    tasks.some(task => task.name.toLowerCase() === taskName.toLowerCase())
  ) {
    alert('Ya existe una tarea con ese nombre');
    return;
  }

  tasks = [...tasks, { name: taskName, taskId: tasks.length + 1 }];
  input.value = '';
  renderTasksList(tasks);
  saveLocalStorage(tasks);
  hideDeleteAll(tasks);
};

// Creamos la funcion para borrar una tarea
// 1.Si el elemento que apretamos de la lista de tareas (o sea el ul) no contiene la clase "delete-btn" no hacemos nada, por eso el return
// 2. Creamos una variable en donde vamos a almacenar el id que filtraremos para borrar la tarea
// 3. Filtramos la lista de tareas para que sea igual pero sin el elemento con el id de la variable anterior (filterId)
// 4.Renderizamos
// 5.Actualizamos el localstorage
// 6.Verificamos si se tiene que ocultar o no el boton de borrar todas las tareas
const removeTask = e => {
  if (!e.target.classList.contains('delete-btn')) return;
  const filterId = Number(e.target.dataset.id);
  tasks = tasks.filter(task => task.taskId !== filterId);
  renderTasksList(tasks);
  saveLocalStorage(tasks);
  hideDeleteAll(tasks);
};

// Funcion para borrar todas las tareas
const removeAll = () => {
  tasks = [];
  renderTasksList(tasks);
  saveLocalStorage(tasks);
  hideDeleteAll(tasks);
};

// Creamos la funcion init para poner en un solo lugar las tareas a realizar y los eventos del DOM
// 1. Una vez que creemos la funcion para renderizar la lista de tareas, agregamos esta funcion para que se ejecute al principio. Para que si hay tareas dentro del localstorage las pinte.
// 2. Agregamos el evento addTask que se le va a asignar al formulario
// 3.Agregamos el evento removeTask al elemento taskList (ul)
// 4.Agregar el evento removeAll al boton deleteBtn
// . Verificamos si se tiene que ocultar o no el boton (Por si al cargar habia tareas en el localStorage)

const init = () => {
  renderTasksList(tasks);
  addForm.addEventListener('submit', addTask);
  tasksList.addEventListener('click', removeTask);
  deleteBtn.addEventListener('click', removeAll);
  hideDeleteAll(tasks);
};

init();
