import React, { useState } from 'react';
import './input.css';

function Input({ setTasks }) {
  const [task, setTask] = useState('');

  const handleChange = (event) => {
    setTask(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault(); 
      setTasks(prevTasks => [...prevTasks, 
        {task, completed:false}
      ]); 
      setTask(''); 
    }
  };

  return (
    <input 
      type='text' 
      name="task" 
      value={task}
      onChange={handleChange} 
      onKeyDown={handleKeyDown} 
      placeholder="Add a new task..."
    />
  );
}

export default Input;
