import React, { useCallback, useEffect, useState } from "react";

const Practice = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    setUsers(data);
  }, []);

  const handleDelete = useCallback(
    id => () => {
      const filter = users.filter(user => user.id !== id);
      setUsers(filter);
    },
    [users],
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      {users.map(({ id, name }) => (
        <h1 key={id} onClick={handleDelete(id)}>
          {name}
        </h1>
      ))}
    </>
  );
};

export default Practice;
