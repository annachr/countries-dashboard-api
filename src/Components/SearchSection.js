import React from 'react'
import Search from './Search'
import Filter from './Filter'
import Sort from './Sort'

const SearchSection = () => {

  return(
    <div className="searchSection">
      <Search />
      <Filter />
      <Sort />
    </div>
  )
}

export default SearchSection
