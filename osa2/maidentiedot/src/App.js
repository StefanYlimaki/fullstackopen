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

  /*countryNames.length = 0
  for(var i = 0; i < countries.length; i++) {
    const countryObject = {
      name: countries[i].name.common
    }
    countryNames.push(countryObject)
  }
  */

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
  }

  const countriesToShow = countries.filter(country => country.name.common.toLowerCase().includes(search.toLowerCase()))

  console.log("Countries to show:", countriesToShow);

  return (
    <div>
      <Filter search={search} handleSearchChange={handleSearchChange} />
      <Countries countriesToShow={countriesToShow} />
    </div>
  );
}

export default App;
