import { useCallback, useEffect, useState } from "react";

const UsersURL = "https://jsonplaceholder.typicode.com/users";

const Practice = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    try {
      const response = await fetch(UsersURL);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <h1>Testing Page</h1>
      <>
        {users.map(user => (
          <div key={user.id}>
            {user.name}
            <button className="m-2 btn-danger">Delete</button>
          </div>
        ))}
      </>
    </>
  );
};

export default Practice;
