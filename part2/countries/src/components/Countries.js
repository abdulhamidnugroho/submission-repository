const Countries = ({filter}) => {
  console.log(filter.length)

  if (filter.length >= 10) {
    return <p>Too many matches, specify another filter.</p>
  }

  if (filter.length > 1 && filter.length <= 10) {
    return (
      <div>
        <ul>
          {filter.map(el => 
            <li key={el.name} >{el.name}</li>
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

}

export default Countries