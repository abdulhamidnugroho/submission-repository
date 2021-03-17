import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')

  const filter = countries.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    console.log(search)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

	return (
    <div>
      find countries : <input value={search} onChange={handleSearchChange}/>
      <Countries filter={filter} />
  
    </div>
  )
}

export default App