//Example of using useState and useEffect in a real-world React application.
//In this example, we'll create a simple task management app that allows you to add, delete, and mark tasks as completed.
//The code will be well-commented to explain each part

import React, { useState, useEffect } from 'react';

function TaskApp() {
  // Define state variables
  const [tasks, setTasks] = useState([]); // To store tasks
  const [newTask, setNewTask] = useState(''); // To store the new task input
  const [completedTasks, setCompletedTasks] = useState(0); // To count completed tasks

  // useEffect to fetch initial data (if any) from a server when the component mounts
  useEffect(() => {
    // Simulate fetching tasks from a server
    const fetchedTasks = [
      { id: 1, text: 'Buy groceries', completed: false },
      { id: 2, text: 'Clean the house', completed: true },
      // Add more tasks here
    ];

    setTasks(fetchedTasks);

    // Calculate the number of completed tasks
    const completedCount = fetchedTasks.filter(task => task.completed).length;
    setCompletedTasks(completedCount);
  }, []);

  // useEffect to update completedTasks when tasks array changes
  useEffect(() => {
    const completedCount = tasks.filter(task => task.completed).length;
    setCompletedTasks(completedCount);
  }, [tasks]);

  // Event handler to add a new task
  const handleAddTask = () => {
    if (newTask.trim() === '') return; // Don't add empty tasks

    const newTaskObject = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, newTaskObject]);
    setNewTask(''); // Clear the input field
  };

  // Event handler to mark a task as completed
  const handleCompleteTask = taskId => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task
    );
    setTasks(updatedTasks);
  };

  // Event handler to delete a task
  const handleDeleteTask = taskId => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Task Manager</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a new task"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div>
        <h2>Tasks</h2>
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              <span>{task.text}</span>
              {!task.completed && (
                <>
                  <button onClick={() => handleCompleteTask(task.id)}>
                    Mark as Completed
                  </button>
                  <button onClick={() => handleDeleteTask(task.id)}>
                    Delete
                  </button>
                </>
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <p>Completed tasks: {completedTasks}</p>
      </div>
    </div>
  );
}

export default TaskApp;
