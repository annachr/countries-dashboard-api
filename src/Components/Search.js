import React, { useContext, useState } from 'react'
import {CountryContext} from '../countriesContext'

function Search() {
  const [query, setQuery] = useState("")
  const {handleChange} = useContext(CountryContext)
  // const [searchResult, setSearchResult] = useState([])
  // const handleInputChange = (e) => {
  //   setQuery(e.target.value)
  // }
  return (
    <>
      <input
      className="searchField"
      type="text"
      value={query}
      name="query"
      onChange={handleChange}
      placeholder="Search for a country..."
      />
    </>
  )
}

export default Search
