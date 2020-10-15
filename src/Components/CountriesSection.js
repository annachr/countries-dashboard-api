import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'

const CountriesSection = () => {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    const fetchFunction = async () => {
      const country = await fetch('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
                      .then(res => res.json())
      setCountries(country)
    }
    fetchFunction()
  }, [])

  const singleCountry = countries.map(country => <CountryCard key={country.name} {...country} />)

  return(
    <div className="countrySection">
      {singleCountry}
    </div>
  )
}

export default CountriesSection
