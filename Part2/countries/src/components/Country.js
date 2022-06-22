import Weather from "./Weather";

const Country = ({ country }) => {
  return (
    <div>
      <h1>{country.name.common}</h1>
      capital {country.capital}
      <br/>
      area {country.area} 
      <br/>
      <h3>languages:</h3>
      <ul>
      
        {Object.entries(country.languages).map(([key, value])=>{
          return <li key= {key}>{value.toString()}</li>
        })
         }
      </ul>
      <img src={country.flags.png} alt={`${country.name.common}`} />
      <Weather city={country.capital} />
    </div>
  );
};

export default Country;