const Person = ({name, number}) => {
  return(
    <li>
      {name} {number}
    </li>
  )
}

const Persons = ({personsToShow}) => {
  return (
    <div>
      <ul>
        {personsToShow.map(person => <Person key={person.name} name={person.name} number={person.number} />)}
      </ul>
    </div>
  )
}

export default Persons
