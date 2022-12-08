import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import SearchBarStyle from './Searchbar.module.css'

function Searchbar() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }
  return (
    <form onSubmit={handleSubmit} className={SearchBarStyle.searchForm}>
      <div className={SearchBarStyle.searchBarContainer}>
        <FiSearch aria-hidden="true" className={SearchBarStyle.searchIcon} />
        <input
          name="search-field"
          id="search-field"
          className={SearchBarStyle.searchInput}
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
