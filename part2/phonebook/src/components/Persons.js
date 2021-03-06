const Persons = ({persons, handleDelete}) => {
  return (
    <div>
      <ul>
        {persons.map(person => 
          <li className="list-person" key={person.name} >{person.name}  -  {person.number} <button value={person.id} onClick={handleDelete}>delete</button></li>
        )}
      </ul>
    </div>
  )
}

export default Persons