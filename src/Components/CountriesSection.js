import React, { useContext } from 'react'
import CountryCard from './CountryCard'
import {CountryContext} from '../countriesContext'

const CountriesSection = () => {
  const {countries, countriesToDisplay, isFiltered} = useContext(CountryContext)
  const singleCountry = countries.map(country => <CountryCard key={country.name} {...country} />)
  const filteredCountries = countriesToDisplay.map(country => <CountryCard key={country.name} {...country} />)

  return(
    <div className="countrySection">
      {isFiltered ? filteredCountries : singleCountry}
    </div>
  )
}

export default CountriesSection
