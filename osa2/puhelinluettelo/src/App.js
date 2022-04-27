import {useState} from 'react'
import Person from "./components/Person"

const App = () => {
  // initializing persons state-variable and settings state to an array containing "Arto Hellas".
  const [persons, setPersons] = useState([{name: 'Arto Hellas'}])
  // initializing newName state-variable and setting state to an empty string.
  const [newName, setNewName] = useState('')

  /* onSubmit event handler for the HTML form's "add" button.
   * @Param event
   * creates a new person object,
   * if person to be added is already in the phonebook
   * ==> alert user that the phonebook already contains that persons
   * if person is not already in the phonebook
   * ==> adds the object to persons state variable, and
   * ==> set the state of newName to empty string.
   */
  const addPerson = (event) => {
    event.preventDefault()
    const personObj = {
      name: newName
    }

    for(var i = 0; i < persons.length; i++) {
      if(persons[i].name === newName) {
        alert(`${newName} is already in the phonebook`)
        return
      }
    }
    setPersons(persons.concat(personObj))
    setNewName("")
  }

  /* onChange event handler for the HTML form's input field.
   * @Param event
   * sets the state of newName to be the value in input field.
   */
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <div>
          <ul>
            {persons.map(person => <Person key={person.name} name={person.name} />)}
          </ul>
        </div>

    </div>
  )
}

export default App
