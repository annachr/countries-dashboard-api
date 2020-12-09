import React, { useContext } from 'react'
import {CountryContext} from '../countriesContext'

const Filter = () => {

  const {regions, handleChange} = useContext(CountryContext)
  const regionsList = regions.map(region => region.region)
  const allRegions = [...new Set(regionsList)]
  // const singleRegion = allRegions.map(item => item === "" ? "other" : item)
  const singleRegion = allRegions.map(item => <option value={item} key={item}>{item === "" ? "other" : item}</option>)

  // const oneRegion = singleRegion.map(item => <option key={item}>{item}</option>)

  return(
    <div>
      {/*<select*/}
      {/*  className="select"*/}
      {/*  value={selectedRegion}*/}
      {/*  name="selectedRegion"*/}
      {/*  onChange={handleChange}*/}
      {/*>*/}
      {/*  <option>Filter by Region</option>*/}
      {/*  {oneRegion}*/}
      {/*</select>*/}
      <select className="select" onChange={handleChange}>
        <option>Filter by Region</option>
        {singleRegion}
      </select>
    </div>
  )
}


export default Filter

