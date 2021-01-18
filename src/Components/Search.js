import React, { useContext } from 'react'
import {CountryContext} from '../countriesContext'

function Search() {
  const {handleInputChange, query} = useContext(CountryContext)
  // const [searchResult, setSearchResult] = useState([])

  return (
    <>
      <input
      className="searchField"
      type="text"
      value={query.charAt(0).toUpperCase() + query.slice(1)}
      name="query"
      onChange={handleInputChange}
      placeholder="Search for a country or a capital..."
      />
    </>
  )
}

export default Search
