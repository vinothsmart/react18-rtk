import React, { useCallback, useEffect, useState } from "react";

const taskTodos = [
  {
    id: 1,
    name: "Task 1",
    checked: false,
  },
  {
    id: 2,
    name: "Task 2",
    checked: true,
  },
  {
    id: 3,
    name: "Task 3",
    checked: true,
  },
];

const Practice = () => {
  const [todos, setTodos] = useState([]);
  const [todoName, setTodoName] = useState("");

  useEffect(() => {
    setTodos(taskTodos);
  }, []);

  const handleChange = useCallback(
    id => () => {
      const filterData = todos.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked: !todo.checked };
        }
        return todo;
      });

      setTodos(filterData);
    },
    [todos],
  );

  const handleTodoText = useCallback(e => {
    const { value } = e.target;
    setTodoName(value);
  }, []);

  const handleAddTodo = useCallback(
    e => {
      e.preventDefault();
      setTodos(prev => [
        ...prev,
        {
          id: prev.length + 1,
          name: todoName,
          checked: true,
        },
      ]);
    },
    [todoName],
  );
  return (
    <>
      <h1>Testing Page</h1>
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.checked}
              onChange={handleChange(todo.id)}
            />
            {todo.name}
          </li>
        ))}
      </ul>
      <label>Name:</label>
      <input type="text" onChange={handleTodoText} value={todoName} />
      <button onClick={handleAddTodo}>Add Todo</button>
    </>
  );
};

export default Practice;
