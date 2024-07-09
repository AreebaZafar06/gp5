import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';

const CategoryFilter = () => {
  const { categories } = useContext(TaskContext);

  return (
    <div className="category-filter">
      <h2>Filter by Category</h2>
      <ul>
        <li>
          <Link to="/">All</Link>
        </li>
        {categories.map(category => (
          <li key={category}>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryFilter;
