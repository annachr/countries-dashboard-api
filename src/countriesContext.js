import React, { useEffect, useState } from "react"
const CountryContext = React.createContext()

function CountryContextProvider(props) {
  const [countries, setCountries] = useState([])
  const [regions, setRegions] = useState([])
  const [countriesToDisplay, setCountriesToDisplay] = useState([])
  const [isFiltered, setIsFiltered] = useState(false)
  const [query, setQuery] = useState("")
  const [sortingOrder, setSortingOrder] = useState(null)


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

  function handleInputChange(event) {
    const target = event.target.value
    const searched = countries.filter(
      country => country.name.includes(target) || country.capital.includes(target)
    )
    console.log(searched)
    setQuery(event.target.value)
    setIsFiltered(true)
    setCountriesToDisplay(searched)
    if(event.target.value === "") {
      setCountriesToDisplay(countries)
    }
  }

  function handleChange(event) {
    const filtered = countries.filter(country => country.region === event.target.value)
    if(event.target.value === "Filter by Region") {
      setIsFiltered(false)
    } else {
      setIsFiltered(true)
    }
    setCountriesToDisplay(filtered)
    // if(event.target.value === "Filter by Region") {
    //   setCountriesToDisplay(countries)
    // } else {
    //   setCountriesToDisplay(filtered)
    // }
  }


  function handlePopulation(a, b) {
    const pop1 = a.population
    const pop2 = b.population

    let comparison = 0;
    if (pop1 > pop2) {
      comparison = 1;
    } else if (pop1 < pop2) {
      comparison = -1;
    }
    return (
      (sortingOrder) ? comparison : (comparison * -1)
    )
  }


  function handleSortUp() {
    setSortingOrder(true)
    const sorted = isFiltered ? countriesToDisplay.sort(handlePopulation) : countries.sort(handlePopulation)
    setCountriesToDisplay(sorted)
    // setCountries(sorted)
  }

  function handleSortDown() {
    setSortingOrder(false)
    const sorted = isFiltered ? countriesToDisplay.sort(handlePopulation) : countries.sort(handlePopulation)
    setCountriesToDisplay(sorted)
    // setCountries(sorted)
  }

  return (
    <CountryContext.Provider value={{
      countries,
      regions,
      countriesToDisplay,
      isFiltered,
      query,
      handleChange,
      handleInputChange,
      handleSortUp,
      handleSortDown
    }}>
      {props.children}
    </CountryContext.Provider>
  )
}

export {CountryContextProvider, CountryContext}
