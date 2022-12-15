import React, { useContext, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TodoContext } from '../../context/context';

const Todo = () => {
  const [value, setValue] = useState('');
  const ctx = useContext(TodoContext);

  const onSubmit = e => {
    e.preventDefault();
    ctx.addTask(value);
    setValue('');
  };

  const { pathname } = useLocation();
  console.log(pathname);

  return (
    <div>
      <h3>Lista de tareas</h3>
      <form onSubmit={onSubmit}>
        <input
          type='text'
          placeholder='Agrega una tarea'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <button>Agregar</button>
      </form>
      <div className='containerTareas'>
        {ctx.taskList.map(task => (
          <h2 key={task.id}>
            {task.name} <span onClick={() => ctx.removeTask(task)}>(X)</span>
          </h2>
        ))}
      </div>
      <button onClick={() => ctx.removeAllTasks()}>Borrar Tareas</button>
    </div>
  );
};

export default Todo;
