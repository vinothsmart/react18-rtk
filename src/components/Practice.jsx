import React, { memo, useCallback, useEffect, useState } from "react";

const TODO_API_URL = "https://jsonplaceholder.typicode.com/todos";

const Practice = () => {
  const [todos, setTodos] = useState([]);

  const fetchTodos = useCallback(async () => {
    const response = await fetch(TODO_API_URL);
    const result = await response.json();
    setTodos(result);
  }, []);

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  const handleRemove = useCallback(
    id => () => {
      const removeTodos = todos.filter(todo => todo.id !== id);
      setTodos(removeTodos);
    },
    [todos],
  );

  return (
    <>
      {todos.map(({ id, title }) => (
        <div key={id}>
          <p>{title}</p>
          <button onClick={handleRemove(id)}>remove</button>
        </div>
      ))}
    </>
  );
};

export default memo(Practice);
