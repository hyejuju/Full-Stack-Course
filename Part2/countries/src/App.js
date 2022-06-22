import { useState, useEffect } from "react";
import axios from "axios";
import Countries from "./components/Countries";
import Country from "./components/Country";

const App = () => {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [countriesToDisplay, setCountriesToDisplay] = useState([]);

  useEffect(() => {
    axios
    .get("https://restcountries.com/v3.1/all")
    .then((response) => {
      setCountries(response.data);
    });
  }, []);

  const changeDisplay = (e) => {
    setFilter(e.target.value)
    setCountriesToDisplay(
      countries.filter((c) =>
        c.name.common.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const doAccordingly = () => {
    
      if(countriesToDisplay.length===1){
        return <Country country={countriesToDisplay[0]} />
      }
      if(countriesToDisplay.length > 10){
        return <p>Too many matches, specify another filter</p>
      }
      else{
        return <Countries
        countriesToDisplay={countriesToDisplay}
        setCountriesToDisplay={setCountriesToDisplay}
      />
      }
  } 

  return (
    <>
        Find countries <input value={filter} onChange={changeDisplay} />
    
      {
        doAccordingly()
      }
    </>
  );
};

export default App;