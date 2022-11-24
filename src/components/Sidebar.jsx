import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineHashtag, HiOutlineMenu } from 'react-icons/hi'
import { RiCloseLine } from 'react-icons/ri'

const links = [
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  return (
    <>
      <div className="navLinks">
        <h2>OuterSpace</h2>
        <NavLinks />
      </div>
      <div className="sideMenu">
        {!mobileMenuOpen ? (
          <HiOutlineMenu
            className="menuIcon"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="menuCloseIcon"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>
    </>
  )
}

export default Sidebar
