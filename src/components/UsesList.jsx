import React, { useState, useEffect } from "react";

const arr = [
  { id: 11, name: "Sam" },
  { id: 12, name: "Jhon" },
  { id: 13, name: "Arun" },
];

// {userList.map((user)=>(<div key={user.id}>{user.name}</div>))}

export function App(props) {
  const [userList, setUserList] = useState(arr);

  useEffect(() => {
    // setUserList(arr);
    const filterUserBYID = userList.filter(user => user.id !== 12);
    setUserList(filterUserBYID);
  }, [userList]);

  return (
    <div className="App">
      <h1>Hello React.</h1>
      <h2>Start editing to see some magic happen!</h2>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>name</td>
          </tr>
        </thead>
        <tbody>
          {userList.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Log to console
console.log("Hello console");
