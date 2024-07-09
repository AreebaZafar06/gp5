import React from 'react';
import { useParams } from 'react-router-dom';
import CategoryFilter from '../components/CategoryFilter';
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import './TaskPage.css';

const TaskPage = () => {
  const { categoryName } = useParams();

  return (
    <div className="task-page">
      <h1>Task Manager</h1>
      <CategoryFilter />
      <TaskForm />
      <TaskList category={categoryName} />
    </div>
  );
};

export default TaskPage;
