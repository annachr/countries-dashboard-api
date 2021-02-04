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
      <a href={`https://en.wikipedia.org/wiki/${name}`} className="countryDetails">
        <img className="flagImg" src={flag} alt="country flag"/>
        <p className="countryName">{name}</p>
        <p><span className="details">Population:</span> {population === 0 ? "N/A" : population.toLocaleString()}</p>
        <p><span className="details">Region:</span> {region === "" ? "other" : region}</p>
        <p><span className="details">Capital:</span> {capital === "" ? "N/A" : capital}</p>
      </a>
    </div>
  )
}


export default CountryCard
