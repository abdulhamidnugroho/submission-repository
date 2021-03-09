const PersonForm = (props) => {
  return (
    <div>
      <form onSubmit={props.submit}>
        <div>
          name: <input value={props.newName} onChange={props.onChangePerson}/>
        </div>
        <div>
          number: <input value={props.newNumber} onChange={props.onChangeNumber}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    </div>
  )
}

export default PersonForm