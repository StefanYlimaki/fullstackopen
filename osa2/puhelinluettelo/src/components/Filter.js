const Filter = ({newSearch, handleSearchChange}) => {
  return(
    <div>
      <h4>Search</h4>
      <p>You can search for persons by name or number.</p>
      <input value={newSearch} onChange={handleSearchChange}/>
    </div>
  )
}

export default Filter
