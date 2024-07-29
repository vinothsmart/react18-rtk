import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/userSlice";

// const USER_URL = "https://jsonplaceholder.typicode.com/users";

const Practice = () => {
  const dispatch = useDispatch();
  // const [users, setUsers] = useState([]);

  const users = useSelector(state => state.users);

  console.log("vinoth", users);

  // const fetchUsers = useCallback(async () => {
  //   const result = await fetch(USER_URL);
  //   const data = await result.json();
  //   setUsers(data);
  // }, []);

  // useEffect(() => {
  //   fetchUsers();
  // }, [fetchUsers]);

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <>
      <h1> Testing Page </h1>
      {users.map(user => (
        <div key={user.id}>{user.name}</div>
      ))}
    </>
  );
};

export default Practice;
