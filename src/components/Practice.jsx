import React, { memo, useCallback, useEffect, useState } from "react";

const usersDataURL = "https://jsonplaceholder.typicode.com/users";

export const Practice = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    const response = await fetch(usersDataURL);
    const data = await response.json();
    setUsers(data);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      {users.map(user => (
        <div key={user.id}>
          <h1>{user.name}</h1>
        </div>
      ))}
    </>
  );
};

export default memo(Practice);
