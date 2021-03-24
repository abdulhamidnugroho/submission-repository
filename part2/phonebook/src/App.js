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

    const check = persons.some(el => el.name.toLowerCase() === newName.toLowerCase())

    if (check) {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        console.log('update', personObject)

        const person = persons.find(el => el.name.toLowerCase() === newName.toLowerCase())
        const updatedPerson = { ...person, number: newNumber}

        personsService
          .update(person.id, updatedPerson)
          .then(editedPerson => 
            setPersons(persons.map(el => el.id !== person.id 
              ? el 
              : editedPerson)))
      }
    } else {
      console.log('create')
      
      personsService
        .create(personObject)
        .then(returnedPerson => setPersons(persons.concat(returnedPerson)))
    }

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

  const handleDelete = (event) => {
    event.preventDefault()

    const parsedValue = parseInt(event.target.value)

    if (window.confirm("Do you really want to delete this record?")) {
      personsService
        .destroy(parsedValue)
        .then(() => {
          setPersons(persons.filter(el => el.id !== parsedValue))
          console.log(persons)
        })
    }
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
      <Persons persons={persons.filter(el => el.name.toLowerCase().includes(filter))} handleDelete={handleDelete} />
    </div>
  )
}

export default App