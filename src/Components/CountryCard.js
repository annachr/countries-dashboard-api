import React from 'react'

const CountryCard = ({
  flag,
  name,
  population,
  region,
  capital
}) => {
  return(
    <div className="countryCard">
      <div>
        <img className="flagImg" src={flag} alt="country flag"/>
      </div>
      <div className="countryDetails">
        <p className="countryName">{name}</p>
        <p><span className="details">Population:</span> {population}</p>
        <p><span className="details">Region:</span> {region}</p>
        <p><span className="details">Capital:</span> {capital}</p>
      </div>
    </div>
  )
}

export default CountryCard
