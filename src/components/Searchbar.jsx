import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import './Searchbar.css'

function Searchbar() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }
  return (
    <form onSubmit={handleSubmit} className="searchForm">
      <div className="searchBarContainer">
        <FiSearch aria-hidden="true" className="searchIcon" />
        <input
          name="search-field"
          id="search-field"
          className="searchInput"
          placeholder="Search all files"
          type="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  )
}

export default Searchbar
