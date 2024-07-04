// TaskForm.js
import React, { useState} from 'react';
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";

const TaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.trim() !== '') {
      addTask(newTask);
      setNewTask('');
    }
  };

  return (
    <div className='w-100'>
      <form onSubmit={handleSubmit}>
        <input
          type="text" className='w-100'
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
        />
        {/* <button type="submit">Add Task</button> */}
        {/* <Zoom in={isExpanded ? true : false}> */}
            <Fab onClick={handleSubmit}>
              <AddIcon />
            </Fab>
          {/* </Zoom> */}
      </form>
    </div>
  );
};

export default TaskForm;
