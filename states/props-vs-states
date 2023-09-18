
# React Props vs. States

React components use two fundamental concepts for managing and passing data: props and states. Understanding when and how to use each is crucial for building efficient and maintainable React applications.

## Props

Props (short for "properties") are used to pass data from a parent component to a child component. These data are immutable, meaning they cannot be changed by the child component. Instead, props are passed down from the parent, which is responsible for managing the data.

### Use Case for Props

Props are typically used when you need to provide data that is necessary for rendering a child component. For example:

```javascript
function ParentComponent() {
  const buttonText = 'Click me!';

  return <Button text={buttonText} />;
}

function Button({ text }) {
  return <button>{text}</button>;
}
```

In this example, the `text` prop is passed from the `ParentComponent` to the `Button` component, enabling the `Button` component to display the button text.

## States

States, on the other hand, are used to manage data that is specific to a component and can change over time. Components can modify their own state, and when the state is updated, React re-renders the component to reflect the changes.

### Use Case for States

States are typically used for managing data that belongs to the component itself and needs to be updated over time. For example:

```javascript
function CounterComponent() {
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
```

In this example, the `CounterComponent` uses the `useState` hook to manage its own state (`count`). When the "Increment" button is clicked, the `handleClick` function updates the state, triggering a re-render of the component.

## Rules of Thumb

Here are some rules of thumb for when to use props vs. states:

- **Props**: Use props to pass data from a parent component to a child component that is needed to render the child component.

- **States**: Use states to manage data that is specific to a component and that needs to be updated over time.

- **Avoid Changing Props**: Avoid changing props from within a child component, as they are immutable.

- **Avoid Unnecessary States**: Avoid using states to store data that is only needed to render the component once.

By following these guidelines, you can write more efficient and maintainable React applications.

