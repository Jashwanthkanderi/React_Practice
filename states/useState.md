**Markdown content for a file about the useState hook in React**

## Theory

The useState Hook in React allows you to add state to a function component. State is data that changes over time, and it is used to control how a component renders.

To use the useState Hook, you first import it from React:

```javascript
import React, { useState } from 'react';
```

Then, you call the useState Hook inside your function component and pass it an initial state value. The useState Hook returns an array with two values: the current state value and a function to update the state.

```javascript
const [count, setCount] = useState(0);
```

In this example, we have declared a state variable called `count` with an initial value of 0. We can then use the `setCount` function to update the state.

```javascript
setCount(count + 1);
```

Whenever the `setCount` function is called, React will re-render the component with the new state value.

## Basic syntax and code snippets

**Declaring a state variable:**

```javascript
const [count, setCount] = useState(0);
```

**Updating the state:**

```javascript
setCount(count + 1);
```

**Using the state in the render function:**

```javascript
<p>Count: {count}</p>
```

## Example

```javascript
import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}

export default Counter;
```

## Real-life example

A real-life example of useState is a to-do list. The to-do list needs to track the state of the items in the list, such as whether they are completed or not. We can use useState to track this state.

```javascript
import React, { useState } from 'react';

// This component renders a to-do list.
function TodoList() {
  // This state variable tracks the list of to-do items.
  const [todos, setTodos] = useState([
    { text: 'Learn React', completed: false },
    { text: 'Build a to-do list', completed: false },
  ]);

  // This function handles toggling the completed state of a to-do item.
  function handleToggleTodo(index) {
    // Create a copy of the to-do list.
    const newTodos = [...todos];

    // Toggle the completed state of the to-do item at the given index.
    newTodos[index].completed = !newTodos[index].completed;

    // Update the state with the new to-do list.
    setTodos(newTodos);
  }

  // This function renders the to-do list.
  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => handleToggleTodo(index)}
          />
          {todo.text}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
```

## Conclusion

The useState Hook is a powerful tool for managing state in React function components. It allows you to easily add and update state, and to re-render your component whenever the state changes.

## Further reading for useEffect() hook

Click on below link to go to Repo on useEffect hook

https://tinyurl.com/useEffecthooktut
