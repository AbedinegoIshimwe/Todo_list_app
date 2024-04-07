// TaskList.js
import React from 'react';

function TaskList({ tasks, deleteTask }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Priority</th>
          <th>Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {tasks.map((task, index) => (
          <tr key={index}>
            <td>{task.text}</td>
            <td className={task.priority === 'priority' ? 'priority' : ''}>{task.priority}</td>
            <td>{task.date}</td>
            <td><button onClick={() => deleteTask(index)}>Delete</button></td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default TaskList;
