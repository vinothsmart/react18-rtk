import React, { useCallback, useEffect, useState } from "react";

const USERURL = "https://jsonplaceholder.typicode.com/users";

const Practice = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(USERURL);
    const users = await response.json();
    setUsers(users);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);
  return (
    <>
      {users.map(user => (
        <h1 key={user.id}>{user.name}</h1>
      ))}
    </>
  );
};

export default Practice;
