import {useState, useEffect} from "react"
import axios from "axios"

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
  const lat = country.latlng[0]
  const lon = country.latlng[1]
  const api_key = process.env.REACT_APP_API_KEY
  const [weather, setWeather] = useState([])

  useEffect(() => {
    console.log('Getting Weather');
    axios
      .get(`https:api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
      .then(response => {
        setWeather(response.data)
        console.log(response.data);
      })
  }, [lat, lon, api_key])

  const languages = []
  for(var key in country.languages) {
    languages.push(country.languages[key])
  }

  if(weather.length === 0) {
    return(
    <></>
    )
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
        <h2>Weather in {country.capital}</h2>
        <p>Temperature {Math.round((weather.main.temp-273.15) *100) / 100} Celcius</p>
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt={"weather icon for", weather.weather[0].description}/>
        <p>Wind {weather.wind.speed} m/s</p>
      </strong>
    </div>
  )
}

const Countries = ({countriesToShow, setSearch}) => {
  const chooseCountry = (name) => {
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
