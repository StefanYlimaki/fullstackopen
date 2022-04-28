import {useState, useEffect} from 'react'
import axios from 'axios'
import Filter from "./components/Filter"
import PersonForm from "./components/PersonForm"
import Persons from "./components/Persons"

const App = () => {
  // initializing persons state-variable and settings state to an array containing "Arto Hellas".
  const [persons, setPersons] = useState([])
  // initializing newName state-variable and setting state to empty string.
  const [newName, setNewName] = useState("")
  // initializing newNumber state-variable and setting state to empty string.
  const [newNumber, setNewNumber] = useState("")
  // initializing newSearch state-variable and setting state to empty string.
  const [newSearch, setNewSearch] = useState("")

  useEffect(() => {
    axios
      .get("http://localhost:3001/persons")
      .then(response => {
        setPersons(response.data)
      })
  }, [])

  /* onSubmit event handler for the HTML form's "add" button.
   * @Param event
   * creates a new person object,
   * if name to be added is already in the phonebook
   * ==> alert user that the phonebook already contains that name
   * if the number to be is already in the phonebook
   * ==> alert user that the phonebook already contains that number
   * if person is not already in the phonebook
   * ==> adds the object to persons state variable, and
   * ==> set the state of newName to empty string.
   * ==> set the state of newNumber to empty string.
   */
  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName,
      number: newNumber
    }

    for(var i = 0; i < persons.length; i++) {
      if(persons[i].name === newName) {
        alert(`${newName} is already in the phonebook`)
        return
      }
    }

    for(i = 0; i < persons.length; i++) {
      if(persons[i].number === newNumber) {
        alert(`${newNumber} is already in the phonebook`)
        return
      }
    }
    setPersons(persons.concat(personObj))
    setNewName("")
    setNewNumber("")
  }

  /* onChange event handler for the HTML form's name input field.
   * @Param event
   * sets the state of newName to be the value in input field.
   */
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  /* onChange event handler for the HTML form's number input field.
   * @Param event
   * sets the state of newNumber to be the value in input field.
   */
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  /* creates the personsToShow -array depending on the search.
   * if person name or number includes the newSearch -string (CASE INSENSITIVE)
   * ==> creates array with those persons
   *
   */
  const personsToShow = persons.filter(person => person.name.toLowerCase().includes(newSearch.toLowerCase()) || person.number.includes(newSearch))

  /* onChange event handler for the search input field.
   * @Param event
   * sets the state of newSearch to be the value in input field.
   */
  const handleSearchChange = (event) => {
    setNewSearch(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newSearch={newSearch} handleSearchChange={handleSearchChange} />
      <br></br>
      <br></br>
      <h4>Add New Person</h4>
      <PersonForm aP={addPerson} nNa={newName} hNaC={handleNameChange} nNu={newNumber} hNuC={handleNumberChange}/>
      <br></br>
      <br></br>
      <h4>Phonebook Persons and Numbers</h4>
      <Persons personsToShow={personsToShow} />
    </div>
  )
}

export default App
