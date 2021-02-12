import React, { useContext } from 'react'
import {CountryContext} from '../countriesContext'

const Filter = () => {

  const {regions, handleChange} = useContext(CountryContext)
  const regionsList = regions.map(region => region.region)
  const allRegions = [...new Set(regionsList)]
  const singleRegion = allRegions.map(item => <option value={item} key={item}>{item === "" ? "other" : item}</option>)

  return(
    <div>
      <select className="select" onChange={handleChange}>
        <option>Filter by Region</option>
        {singleRegion}
      </select>
    </div>
  )
}

export default Filter

