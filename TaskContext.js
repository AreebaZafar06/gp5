import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState(['Work', 'Personal', 'Shopping', 'Important' , 'Upcoming']);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
  };

  return (
    <TaskContext.Provider value={{ tasks, categories, addTask, deleteTask, toggleComplete }}>
      {children}
    </TaskContext.Provider>
  );
};
