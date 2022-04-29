const Country = ({name, country, chooseCountry}) => {
  return(
    <li>
      {name}
      <button onClick={() => chooseCountry(name)}>show</button>
    </li>
  )
}

const Language = ({language}) => {
  return(
    <li>
      <strong>
      {language}
      </strong>
    </li>
  )
}


const SingleCountry = ({country}) => {

  const languages = []

  console.log(country);

  for(var key in country.languages) {
    languages.push(country.languages[key])
  }

  return(
    <div>
      <strong>
        <h2>{country.name.common}</h2>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h3>Languages: </h3>
        <ul>
          {languages.map(language => <Language key={language} language={language} />)}
        </ul>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`}/>
      </strong>
    </div>
  )
}

const Countries = ({countriesToShow, setSearch}) => {
  const chooseCountry = (name) => {
    console.log(name);
    setSearch(name)
  }

  switch (countriesToShow.length) {
    case 0:
      return(<p>No matches</p>)
    case 1:
      return(
        <div>
          <SingleCountry country={countriesToShow[0]} />
        </div>
      )
    case ((countriesToShow.length>=1 && countriesToShow.length<=10) ? countriesToShow.length : -1):
      return(
        <div>
          <ul>
            {countriesToShow.map(country => <Country key={country.name.common} name={country.name.common} country={country} chooseCountry={chooseCountry} />)}
          </ul>
        </div>
      )
    default:
      return(
      <div>
        <p>Too many matches, specify another filter</p>
      </div>
    )
  }
}

export default Countries
