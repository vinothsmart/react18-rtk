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
        {/* {values.rows} */}
        {/* dynamic row and colums based on values values.row and values.cloumns */}
        {[...Array(Number(values.rows))].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {[...Array(Number(values.cloumns))].map((_, colIndex) => (
              <td
                key={colIndex}
                style={{ border: "1px solid black", padding: "5px" }}>
                Row {rowIndex + 1} - Col {colIndex + 1}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </>
  );
};

export default Practice;
