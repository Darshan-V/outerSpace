import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

function Searchbar() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }
  return (
    <form onSubmit={handleSubmit} className="searchForm">
      <label htmlFor="search-field" className="searchLabel">
        Search all files
      </label>
      <div className="searchBarContainer">
        <FiSearch aria-hidden="true" className="w-5 h-5 ml-4" />
        <input
          name="search-field"
          id="search-field"
          className="searchInput"
          placeholder="Search"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  )
}

export default Searchbar
