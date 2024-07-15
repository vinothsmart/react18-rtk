import React, { useCallback, useState } from "react";

const Practice = () => {
  const [email, setEmail] = useState("");
  const [emailList, setEmailList] = useState([]);
  const [isAdd, setIsAdd] = useState(true);

  const handleChange = useCallback(e => {
    setEmail(e.target.value);
  }, []);

  const handleAdd = useCallback(() => {
    setEmailList(prev => [...prev, email]);
    setEmail("");
  }, [email]);

  const handleDelete = useCallback(
    emailId => () => {
      const filterEmails = emailList.filter(email => email !== emailId);
      setEmailList(filterEmails);
    },
    [emailList],
  );

  const viewEmail = useCallback(
    emailId => () => {
      setEmail(emailId);
      handleDelete(emailId)();
      setIsAdd(false);
    },
    [handleDelete],
  );

  const handleEdit = useCallback(
    selectedEmail => () => {
      const filterEmails = emailList.filter(email => email !== selectedEmail);
      setEmailList([...filterEmails, email]);
      setEmail("");
      setIsAdd(true);
    },
    [email, emailList],
  );

  return (
    <>
      <input type="text" name="email" onChange={handleChange} value={email} />
      <button onClick={isAdd ? handleAdd : handleEdit(email)}>
        {isAdd ? "Add" : "Edit"}
      </button>
      <div>
        {emailList.map(item => {
          return (
            <div key={item}>
              <h1 onClick={handleDelete(item)}>{item}</h1>
              <button onClick={viewEmail(item)}>edit</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Practice;
