import { useCallback, useEffect, useState } from "react";

const UsersURL = "https://jsonplaceholder.typicode.com/users";

const Practice = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const data = await fetch(UsersURL);
      const result = await data.json();
      setUsers(result);
    } catch (e) {
      console.log("Error failed API", e);
    }
  }, []);

  const handleDelete = useCallback(
    userID => () => {
      setUsers(prev => prev.filter(user => user.id !== userID));
    },
    [],
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <h1>Testing Page</h1>
      {users.map(user => (
        <div key={user.id}>
          <h1>{user.name}</h1>
          <button onClick={handleDelete(user.id)}>Delte User</button>
        </div>
      ))}
    </>
  );
};

export default Practice;
