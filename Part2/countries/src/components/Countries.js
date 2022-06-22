const Countries = ({ countriesToDisplay, setCountriesToDisplay }) => {
    if (countriesToDisplay.length === 1) 
    return null;
    else{
    return countriesToDisplay.map((country) => (
      <div key={country.name.official}>{country.name.common}
        <button onClick={() => setCountriesToDisplay([country])}>show</button>
      </div>
    ));}
  };
  
  export default Countries;