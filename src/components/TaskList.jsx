// TaskList.js
import React from 'react';

const TaskList = ({ tasks, deleteTask, toggleTaskCompletion }) => {
  return (
    <div className='w-100'>
      <ul className='note-container'>
      {tasks.map(task => (
        <li key={task.id} className='note'>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => toggleTaskCompletion(task.id)}
          />
          <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
            {task.text}
          </span>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
  );
};

export default TaskList;
