const Filter = ({newSearch, handleSearchChange}) => {
  return(
    <div>
      <h4>Search</h4>
      <input value={newSearch} onChange={handleSearchChange}/>
    </div>
  )
}

export default Filter
