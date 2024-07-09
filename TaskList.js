import React, { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';

const TaskList = ({ category }) => {
  const { tasks } = useContext(TaskContext);

  const filteredTasks = category
    ? tasks.filter(task => task.category === category)
    : tasks;

  return (
    <div className="task-list">
      <h2>{category ? `${category} Tasks` : 'All Tasks'}</h2>
      {filteredTasks.map(task => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
