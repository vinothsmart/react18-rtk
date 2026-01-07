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
      console.log("Error in fecthing", e);
    }
  }, []);

  const handleDelte = useCallback(
    deletUser => () => {
      const filterUers = users.filter(user => user.id !== deletUser);
      setUsers(filterUers);
    },
    [users],
  );

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  return (
    <>
      <h1>Testing Page</h1>
      {users.map(user => (
        <>
          <div>
            <p>{user.name}</p>
            <span onClick={handleDelte(user.id)}>Delete</span>
          </div>
        </>
      ))}
    </>
  );
};

export default Practice;
