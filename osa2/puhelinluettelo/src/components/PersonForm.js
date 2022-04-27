const PersonForm = ({aP, nNa, nNu, hNaC, hNuC}) => {
  return(
    <div>
      <p>Type in name and number, and hit "add" to add a person to the phonebook.</p>
      <br></br>
      <form onSubmit={aP}>
        <div> name: <input value={nNa} onChange={hNaC}/></div>
        <div> number: <input value={nNu} onChange={hNuC}/></div>
        <div> <button type="submit">add</button></div>
      </form>
    </div>
  )
}

export default PersonForm
