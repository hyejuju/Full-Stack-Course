/* import { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'

const App = () => {
  const [filterCountry, setFilterCountry] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [countries, setCountries] = useState([])

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((response) => {
      console.log(response.data)
      setAllCountries(response.data);
    });
  }, []);

  const displayCountries = (e) => {
    setFilterCountry(e.target.value);
    
    if(filterCountry.length > 0) {
      var filtered = allCountries.filter(c => c.name.common.toLowerCase().includes(filterCountry.toLowerCase()));
      setCountries(filtered);
      //return countries.map(country => <p key ={country.name.common}> {country.name.common}</p> )
    }
  }
  //countries.filter(c => c.name.common.toLowerCase().includes(filterCountry.toLowerCase()));
  //countries.map(country => <p key ={country.name.common}> {country.name.common}</p> )
  //setFilterCountry(e.target.value)
  return (
    <div>
    <p>find countries <input value={filterCountry} onChange={e => displayCountries(e)}/></p>
 
    <Countries countries={countries} setCountries={setCountries}/>
 

    </div>
  )
}

export default App 
 */
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