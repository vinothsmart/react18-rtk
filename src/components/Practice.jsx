import { memo, useCallback, useState } from "react";

const Practice = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [users, setUsers] = useState([]);

  const [user, setUser] = useState({
    id: Date.now(),
    username: "",
    email: "",
  });

  const handleChange = useCallback(e => {
    const { name, value } = e.target;
    setUser(prevUser => ({ ...prevUser, [name]: value }));
  }, []);

  const addUser = useCallback(() => {
    setUsers(prevUsers => [...prevUsers, user]);
    setUser({ id: Date.now(), username: "", email: "" });
  }, [user]);

  const deleteUser = useCallback(
    id => () => {
      setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
    },
    [],
  );

  const viewUser = useCallback(
    id => () => {
      const user = users.find(user => user.id === id);
      if (user) {
        setUser(user);
        setIsAdding(true);
      }
    },
    [users],
  );

  const updateUser = useCallback(() => {
    setUsers(prevUsers => prevUsers.map(u => (u.id === user.id ? user : u)));
    setUser({ id: Date.now(), username: "", email: "" });
    setIsAdding(false);
  }, [user]);

  return (
    <>
      <h1>Testing Page</h1>
      <input
        type="text"
        name="username"
        value={user.username}
        onChange={handleChange}></input>
      <input
        type="text"
        name="email"
        value={user.email}
        onChange={handleChange}></input>
      <button onClick={isAdding ? updateUser : addUser}>
        {isAdding ? "Update User" : "Add User"}
      </button>
      <>
        {users.map(({ id, username, email }) => (
          <div key={id}>
            {username} - {email}
            <button onClick={viewUser(id)}>Update</button>
            <button onClick={deleteUser(id)}>Delete</button>
          </div>
        ))}
      </>
    </>
  );
};

export default memo(Practice);
