import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineUserGroup,
} from 'react-icons/hi'
import './Sidebar.css'

const links = [
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'Discover', to: '/', icon: HiOutlineHome },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
]

const NavLinks = ({ handleClick }) => (
  <div className="navLinks">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="navItemClass"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="navItemName" />
        {item.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {
  return (
    <>
      <div className="sideBar">
        <h2>OuterSpace</h2>
        <NavLinks />
      </div>
    </>
  )
}

export default Sidebar
