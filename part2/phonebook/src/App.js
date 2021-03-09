import React, { useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm';

const App = () => {
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    persons.some(el => el.name === newName)
      ? alert(`${newName} is already added to phonebook`) 
      : setPersons(persons.concat(personObject))

    setNewName('')
    setNewNumber('')
  }

  const handlePersonChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} onChange={handleFilterChange} />
      <h2>Add a New</h2>
      <PersonForm 
        submit={addPerson}
        newName={newName} 
        newNumber={newNumber} 
        onChangePerson={handlePersonChange} 
        onChangeNumber={handleNumberChange} 
      />
      <h2>Numbers</h2>
      <Persons persons={persons.filter(el => el.name.toLowerCase().includes(filter))} />
    </div>
  )
}

export default App