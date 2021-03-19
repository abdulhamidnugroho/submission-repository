const Countries = ({filter, show, handleShow, weather}) => {
  
  if (filter.length >= 10) {
    return <p>Too many matches, specify another filter.</p>
  }

  if (typeof show !== 'undefined' && typeof weather !== 'undefined') {
    console.log(show)
    return (
      <div>
        <h1>{show[0].name}</h1>
        <p>Capital: {show[0].capital}</p>
        <p>Population: {show[0].population}</p>
        <b>Languages :</b>
        <ul>
          {show[0].languages.map(el => 
            <li key={el.name}>{el.name}</li>  
          )}
        </ul>
        <img src={show[0].flag} alt="img" width="200" />
        <h2>Weather in {show[0].capital}</h2>
        <p><b>temperature: </b>{weather.main.temp} Celcius</p>
        <img alt="img" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} />
        <p><b>wind speed: </b>{weather.wind.speed}</p>
      </div>
    )
  }

  if (filter.length > 1 && filter.length <= 10) {
    return (
      <div>
        <ul>
          {filter.map(el => 
            <>
            <li key={el.name}>{el.name}</li> <button value={el.name} on onClick={handleShow}>Show</button>
            </>
          )}
        </ul>
      </div>
    )
  }

  if (filter.length === 1 && typeof weather !== 'undefined') {
    console.log(weather)
    return (
      <div>
        <h1>{filter[0].name}</h1>
        <p>Capital: {filter[0].capital}</p>
        <p>Population: {filter[0].population}</p>
        <b>Languages :</b>
        <ul>
          {filter[0].languages.map(el => 
            <li key={el.name}>{el.name}</li>  
          )}
        </ul>
        <img src={filter[0].flag} alt="img" width="200" />
        <h2>Weather in {filter[0].capital}</h2>
        <p><b>temperature: </b>{weather.main.temp} Celcius</p>
        <img alt="img" src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`} />
        <p><b>wind speed: </b>{weather.wind.speed}</p>
      </div>
    )
  }

  return <p>No matches or Wait for API</p>
  
}

export default Countries