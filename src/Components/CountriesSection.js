import React, { useContext, useState } from 'react'
import CountryCard from './CountryCard'
import {CountryContext} from '../countriesContext'

const CountriesSection = () => {
  const {countries} = useContext(CountryContext)
  const singleCountry = countries.map(country => <CountryCard key={country.name} {...country} />)

  return(
    <div className="countrySection">
     {singleCountry}
    </div>
  )
}

export default CountriesSection
