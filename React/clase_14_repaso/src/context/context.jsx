import { createContext, useState } from 'react';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
  const [taskList, setTaskList] = useState([]);

  const addTask = value => {
    !value.trim().length
      ? alert('No podes agregar una tarea vacía')
      : taskList.some(task => task.name === value)
      ? alert('La tarea ya existe')
      : setTaskList([
          ...taskList,
          {
            name: value,
            id: Date.now(),
          },
        ]);
  };

  const removeTask = task => {
    setTaskList(taskList.filter(item => item.id !== task.id));
  };

  const removeAllTasks = () => {
    setTaskList([]);
  };

  return (
    <TodoContext.Provider
      value={{ taskList, addTask, removeTask, removeAllTasks }}
    >
      {children}
    </TodoContext.Provider>
  );
};
