import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import Persons from './components/Persons'
import PersonForm from './components/PersonForm'
import personsService from './services/persons'

const App = () => {
  const [ persons, setPersons ] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    persons.some(el => el.name.toLowerCase() === newName.toLowerCase())
      ? alert(`${newName} is already added to phonebook`) 
      : personsService
        .create(personObject)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)))

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

  useEffect(() => {
    personsService
      .getAll()
      .then(initialPersons => setPersons(initialPersons))
  }, [])

  console.log('render ', persons.length, ' persons')
  
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