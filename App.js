import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TaskProvider } from './context/TaskContext';
import TaskPage from './pages/TaskPage';

function App() {
  return (
    <TaskProvider>
      <Routes>
        <Route path="/" element={<TaskPage />} />
        <Route path="/category/:categoryName" element={<TaskPage />} />
      </Routes>
    </TaskProvider>
  );
}

export default App;
