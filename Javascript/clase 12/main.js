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
  `<li>${task.name} <img class="delete-btn" src="./img/delete.svg" data-id=${task.taskId}/></li>`;

// Creemos la logica de renderizacion de la lista de tareas. Va a recibir la lista de tareas y mediante el uso de map va a renderizar cada una de las tareas, usando createTask (que la creamos previamente.). Por ultimo usamos el metodo de join, para evitar que aparezca una coma entre las tareas
const renderTasksList = todoList => {
  tasksList.innerHTML = todoList.map(task => createTask(task)).join('');
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
};

const init = () => {
  renderTasksList(tasks);
  addForm.addEventListener('submit', addTask);
};

init();
