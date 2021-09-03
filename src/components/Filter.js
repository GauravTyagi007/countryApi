import React, { useEffect } from "react"

const Filter = ({
  searchInput,
  setSearchInput,
  setFiltered,
  setCountries,
  countries,
}) => {
  const subregions = [
    {
      name: "Filter by Subregion",
      desc: "All",
    },
    {
      name: "Southern Asia",
      desc: "Southern Asia",
    },
    {
      name: "Western Asia",
      desc: "Western Asia",
    },
    {
      name: "South-Eastern Asia",
      desc: "South-Eastern Asia",
    },
    {
      name: "Eastern Asia",
      desc: "Eastern Asia",
    },
    {
      name: "Central Asia",
      desc: "Central Asia",
    },
    
  ]

  // Prevent page reload when submitting the form
  const handleSubmit = (e) => {
    e.preventDefault()
  }

  // Search countries
  const searchCountries = (searchValue) => {
    setSearchInput(searchValue)

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        Object.values(country)
          .join("")
          .toLowerCase()
          .includes(searchValue.toLowerCase())
      )
      setFiltered(filteredCountries)
    } else {
      setFiltered(countries)
    }
  }

 
  return (
    <>
      <form className="form" id="form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          autoComplete="off"
          placeholder="Search Country"
          onChange={(e) => searchCountries(e.target.value)}
        />
     
      </form>
    </>
  )
}

export default Filter