import React, { useCallback, useState } from "react";

const Practice = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const handleChange = useCallback(e => {
    const { name, value } = e.target;
    if (name === "username") {
      setName(value);
    } else {
      setPassword(value);
    }
  }, []);

  const handleSubmit = useCallback(e => {
    e.preventDefault();
    setIsLogged(true);
  }, []);

  const handleLogout = useCallback(e => {
    e.preventDefault();
    setIsLogged(false);
  }, []);

  return (
    <>
      {!isLogged ? (
        <>
          <input
            type="text"
            name="username"
            value={name}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
          />
          <button onClick={handleSubmit}>Login</button>
        </>
      ) : (
        <>
          <h1>Welcome to Dashaboard Logged in Sucessfully</h1>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </>
  );
};

export default Practice;
