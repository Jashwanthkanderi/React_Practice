//Example of using useState and useEffect in a real-world React application.
//In this example, we'll create a simple task management app that allows you to add, delete, and mark tasks as completed.
//The code will be well-commented to explain each part
import React, { useState, useEffect } from 'react';

function TaskApp() {
  // State variables to store data
  const [tasks, setTasks] = useState([]); // To store tasks
  const [newTask, setNewTask] = useState(''); // To store the new task input
  const [completedTasks, setCompletedTasks] = useState(0); // To count completed tasks

  // Simulate fetching initial data when the component first loads
  useEffect(() => {
    // In a real app, you would fetch data from a server here
    const initialTasks = [
      { id: 1, text: 'Buy groceries', completed: false },
      { id: 2, text: 'Clean the house', completed: true },
    ];

    setTasks(initialTasks);

    // Calculate the number of completed tasks
    const completedCount = initialTasks.filter(task => task.completed).length;
    setCompletedTasks(completedCount);
  }, []);

  // Update the completedTasks count whenever tasks change
  useEffect(() => {
    const completedCount = tasks.filter(task => task.completed).length;
    setCompletedTasks(completedCount);
  }, [tasks]);

  // Event handler to add a new task
  const handleAddTask = () => {
    if (newTask.trim() === '') {
      // Prevent adding empty tasks
      return;
    }

    const newTaskObject = {
      id: tasks.length + 1,
      text: newTask,
      completed: false,
    };

    // Update the tasks array with the new task
    setTasks([...tasks, newTaskObject]);

    // Clear the input field
    setNewTask('');
  };

  // Event handler to mark a task as completed
  const handleCompleteTask = taskId => {
    // Create a copy of tasks and update the completed status
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: true } : task
    );

    // Update the tasks array with the updated data
    setTasks(updatedTasks);
  };

  // Event handler to delete a task
  const handleDeleteTask = taskId => {
    // Filter out the task with the specified ID to delete it
    const updatedTasks = tasks.filter(task => task.id !== taskId);

    // Update the tasks array without the deleted task
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
/*
In this code:

We define state variables using useState to manage tasks, the new task input, and the count of completed tasks.
We use useEffect to simulate fetching initial data from a server when the component mounts and to update the completed task count when the tasks array changes.
We have event handlers for adding, completing, and deleting tasks.
The component renders the task list and provides buttons to mark tasks as completed or delete them.
The number of completed tasks is displayed at the bottom.
*/
