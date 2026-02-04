import { useCallback, useState } from "react";

const Practice = () => {
  // let arr1 = [1, 2, 2, 3, 3, 3, 4];
  // let arr2 = [1, 2, 3, 4, 5, 6, 7];

  // const unique = arr1.indexOf(arr1);
  // console.log({ unique });
  const [values, setValues] = useState({
    rows: "",
    cloumns: "",
  });

  const handleChange = useCallback(e => {
    const { name, value } = e.target;
    setValues(preVale => ({
      ...preVale,
      [name]: value,
    }));
  }, []);

  const addRowAndColumns = useCallback(() => {
    console.log("values", values);
  }, [values]);

  return (
    <>
      <h1>Testing Page</h1>
      <div>
        <input
          type="text"
          name="rows"
          value={values.rows}
          onChange={handleChange}
        />
      </div>
      <div>
        <input
          type="text"
          name="cloumns"
          value={values.cloumns}
          onChange={handleChange}
        />
      </div>
      <button onClick={addRowAndColumns}>Add Rows ad Columns</button>
      <table>
        {values.rows}
        <tr>ROW</tr>
        <td>Columns</td>
      </table>
    </>
  );
};

export default Practice;
