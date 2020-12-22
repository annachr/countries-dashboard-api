import React from "react"

const CountryDetails = ({
    flag,
    nativeName,
    name,
    population,
    region,
    subregion,
    topLevelDomain,
    currencies,
    languages,
    capital,
    borders
  }) => {
  return(
    <div className="countryDetailsCard">
        <img className="flagImg" src={flag} alt="country flag"/>
        <p className="countryName">{name}</p>
        <p><span className="details">Native Name:</span>{nativeName}</p>
        <p><span className="details">Population:</span> {population === 0 ? "N/A" : population}</p>
        <p><span className="details">Region:</span> {region === "" ? "other" : region}</p>
        <p><span className="details">Sub Region:</span> {subregion}</p>
        <p><span className="details">Capital:</span> {capital === "" ? "N/A" : capital}</p>
        <br/>
        <p><span className="details">Top Level Domain:</span> {topLevelDomain}</p>
        <p><span className="details">Currencies:</span> {currencies}</p>
        <p><span className="details">Languages:</span> {languages}</p>
        <br/>
        <p>Border Countries:</p>
        <button>{borders}</button>
    </div>
  )
}

export default CountryDetails
