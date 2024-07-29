import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../store/userSlice";

const Practice = () => {
  const dispatch = useDispatch();

  const users = useSelector(state => state.users.data);

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
