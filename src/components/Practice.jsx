import React, { memo, useCallback, useState } from "react";
import EmailFrom from "./EmailFrom";

export const Practice = () => {
  const [values, setValues] = useState({ name: "", email: "" });
  const [showText, setShowText] = useState(false);
  const [usersList, setUsersList] = useState([]);

  const handleChange = useCallback(e => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
  }, []);

  const handleSumbit = useCallback(
    e => {
      e.preventDefault();
      setUsersList(prev => [...prev, values]);
      setShowText(true);
    },
    [values],
  );

  const handleRemove = useCallback(
    email => () => {
      setUsersList(prev => prev.filter(user => user.email !== email));
    },
    [],
  );

  return (
    <EmailFrom
      values={values}
      handleChange={handleChange}
      handleSumbit={handleSumbit}
      showText={showText}
      usersList={usersList}
      handleRemove={handleRemove}
    />
  );
};

export default memo(Practice);
