import { useState, useCallback, useMemo } from "react";

const data = [
  { id: 1, city: "Chennai" },
  { id: 2, city: "Bangalore" },
  { id: 3, city: "Hyderabad" },
  { id: 4, city: "Pune" },
  { id: 5, city: "Mumbai" },
];

const Practice = () => {
  const [cityList, setCityList] = useState(data);
  const [selectedCity, setSelectedCity] = useState("");
  const [newCity, setNewCity] = useState("");
  const handleCity = useCallback(e => {
    const { value } = e.target;
    setNewCity(value);
  }, []);

  const handleCityChange = useCallback(e => {
    const { value } = e.target;
    setSelectedCity(value);
  }, []);

  const addCity = useCallback(() => {
    if (newCity.trim() === "") return;
    const newId = cityList.length
      ? Math.max(...cityList.map(city => city.id)) + 1
      : 1;
    setCityList(prevList => [...prevList, { id: newId, city: newCity }]);
    setNewCity("");
  }, [newCity, cityList]);

  const options = useMemo(
    () =>
      cityList.map(city => (
        <option key={city.id} value={city.city}>
          {city.city}
        </option>
      )),
    [cityList],
  );

  return (
    <>
      <h1>Testing Page</h1>
      <input
        type="text"
        placeholder="Add City"
        onChange={handleCity}
        value={newCity}
      />
      <button onClick={addCity}>Add City</button>
      <label htmlFor="city-select">Select City: </label>
      <select id="city-select" value={selectedCity} onChange={handleCityChange}>
        <option value="">-- Select a City --</option>
        {options}
      </select>
      {selectedCity && <p>Selected City: {selectedCity}</p>}
    </>
  );
};

export default Practice;
