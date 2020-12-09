import React, { useEffect, useState } from "react"
const CountryContext = React.createContext()

function CountryContextProvider(props) {
  const [countries, setCountries] = useState([])
  const [regions, setRegions] = useState([])
  const [countriesToDisplay, setCountriesToDisplay] = useState([])
  const [check, setCheck] = useState(false)


  useEffect(() => {
    const fetchFunction = async () => {
      const region = await fetch('https://restcountries.eu/rest/v2/all?fields=region')
      .then(res => res.json())
      setRegions(region)
    }
    fetchFunction()
  }, [])

  useEffect(() => {
    const fetchFunction = async () => {
      const allCountries = await fetch('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
      .then(res => res.json())
      setCountries(allCountries)
    }
    fetchFunction()
  }, [])

  function handleChange(event) {
    const filtered = countries.filter(country => country.region === event.target.value)
    setCountries(filtered)
    setCheck(true)
  }


  return (
    <CountryContext.Provider value={{countries, setCountries, regions, check, handleChange}}>
      {props.children}
    </CountryContext.Provider>
  )
}

export {CountryContextProvider, CountryContext}
