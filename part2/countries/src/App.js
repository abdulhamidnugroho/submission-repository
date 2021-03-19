import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Countries from './components/Countries';

const App = () => {
  const [countries, setCountries] = useState([])
  const [search, setSearch] = useState('')
  const [show, setShow] = useState()
  const [weather, setWeather] = useState()
  
  const filter = countries.filter(el => el.name.toLowerCase().includes(search.toLowerCase()))

  const handleSearchChange = (event) => {
    setSearch(event.target.value)
    setShow()
  }

  const handleShow = event => {

    const show_one = filter.filter(el => el.name.includes(event.target.value))
    console.log(show_one)
    setShow(show_one)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        console.log('promise fulfilled')
        setCountries(response.data)
      })
  }, [])

  useEffect(() => {
    if (filter.length === 1) {
      axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${filter[0].capital}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        console.log(response.data)
        setWeather(response.data)
      })      
    } else if (typeof show !== 'undefined') {
      axios
      .get(`http://api.openweathermap.org/data/2.5/weather?q=${show[0].capital}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then(response => {
        console.log(response.data)
        setWeather(response.data)
      }) 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
	return (
    <div>
      find countries : <input value={search} onChange={handleSearchChange}/>
      <Countries filter={filter} show={show} handleShow={handleShow} weather={weather}/>
  
    </div>
  )
}

export default App