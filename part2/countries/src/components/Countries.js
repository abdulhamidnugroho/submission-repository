const Countries = ({filter, show, handleShow}) => {
  console.log(show)
  if (filter.length >= 10) {
    return <p>Too many matches, specify another filter.</p>
  }

  if (typeof show !== 'undefined') {
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

  if (filter.length === 1) {
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
      </div>
    )
  }

  return <p>No matches</p>
  
}

export default Countries