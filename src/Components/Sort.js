import React, { useContext } from 'react'
import {CountryContext} from '../countriesContext'

function Sort() {
  const {handleSortUp, handleSortDown} = useContext(CountryContext)

  return (
    <div className="sort">
      <p>Sort by population</p>
      <button className="btn" onClick={handleSortUp}>↑</button>
      <button className="btn" onClick={handleSortDown}>↓</button>
    </div>
  )
}

export default Sort
