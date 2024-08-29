import React, { useState, useEffect } from 'react';
import './tasks.css';
import cancel from '../../assets/images/icon-cross.svg';

function Tasks({ tasks, setTasks }) {
  const [taskCategory, setTaskCategory] = useState([]);

  useEffect(() => {
    setTaskCategory(tasks);
  }, [tasks]);

  const handleToggleClick = (index) => {
    setTaskCategory(prevTasks => {
      const updatedTasks = prevTasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks); // Ensure the main tasks state is updated
      return updatedTasks;
    });
  };

  const handleRemove = (index) => {
    setTasks(prevTasks =>
      prevTasks.filter((_, i) => i !== index)
    );
  };

  const handleAll = () => {
    setTaskCategory(tasks);
  };

  const handleActive = () => {
    setTaskCategory(tasks.filter(task => !task.completed));
  };

  const handleCompleted = () => {
    setTaskCategory(tasks.filter(task => task.completed));
  };

  const handleRemoveCompleted = () => {
    const remainingTasks = tasks.filter(task => !task.completed);
    setTasks(remainingTasks);
    setTaskCategory(remainingTasks);
  };

  return (
    <ul className='tasks'>
      {taskCategory.length > 0 ? (
        taskCategory.map((task, index) => (
          <div className='task' key={index}>
            <div
              className={task.completed ? 'checkbox-clicked' : 'checkbox'}
              onClick={() => handleToggleClick(index)}
            ></div>
            <li>
              {task.task}
            </li>
            <img
              src={cancel}
              alt='cancel button'
              className='cancelButton'
              onClick={() => handleRemove(index)}
            />
          </div>
        ))
      ) : (
        <h2>No tasks available</h2>
      )}
      {tasks.length > 0 ? (
        <div className='detailsContainer'>
          <ul className='tasksDetails'>
            <li className='tasksLeft'>{tasks.filter(task => !task.completed).length} Left</li>
            <li className='taskCategory' onClick={handleAll}>All</li>
            <li className='taskCategory' onClick={handleActive}>Active</li>
            <li className='taskCategory' onClick={handleCompleted}>Completed</li>
            <li className='taskCategory' onClick={handleRemoveCompleted}>Clear Completed</li>
          </ul>
        </div>
      ) : null}
    </ul>
  );
}

export default Tasks;
