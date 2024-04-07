// TaskForm.js
import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('normal');

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask({ text: taskText, priority, date: new Date().toLocaleDateString() });
    setTaskText('');
    setPriority('normal');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={taskText} onChange={(e) => setTaskText(e.target.value)} placeholder="Enter task" />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="normal">Normal Priority</option>
        <option value="priority">Priority</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
