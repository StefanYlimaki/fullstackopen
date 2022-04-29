import {useState, useEffect} from "react"
import axios from "axios"
import Filter from "./components/Filter"
import Countries from "./components/Countries"

function App() {

  const [countries, setCountries] = useState([])
  //const [countryNames, setCountryNames] = useState([])
  const [search, setSearch] = useState("")

  useEffect(() => {
    console.log('Effect');
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        console.log('Response is', response.data);
        setCountries(response.data)
      })
  }, [])

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  return (
    <div>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <Countries countriesToShow={countriesToShow} setSearch={setSearch} />
    </div>
  );
}

export default App;
