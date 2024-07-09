import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskItem = ({ task }) => {
  const { deleteTask, toggleComplete } = useContext(TaskContext);

  return (
    <div className="task-item">
      <span
        style={{
          textDecoration: task.completed ? 'line-through' : 'none'
        }}
        onClick={() => toggleComplete(task.id)}
      >
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
