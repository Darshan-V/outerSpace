import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlineUserGroup,
  HiOutlineHeart,
  HiHome,
  HiMenu,
} from 'react-icons/hi'
import SidebarStyle from './Sidebar.module.css'

const links = [
  { name: 'Top Play', to: '/', icon: HiHome },
  { name: 'Top Charts', to: '/top-charts', icon: HiOutlineHashtag },
  { name: 'Discover', to: '/discover', icon: HiOutlineHome },
  { name: 'Top Artists', to: '/top-artists', icon: HiOutlineUserGroup },
  { name: 'Liked Songs', to: '/my-playlist', icon: HiOutlineHeart },
]

const NavLinks = ({ handleClick }) => (
  <div className={SidebarStyle.navLinks}>
    <HiMenu className={SidebarStyle.Menu} />
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className={SidebarStyle.navItemClass}
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className={SidebarStyle.navItemName} />
        {item.name}
      </NavLink>
    ))}
  </div>
)

const Sidebar = () => {
  return (
    <>
      <div className={SidebarStyle.sideBar}>
        <h2 className={SidebarStyle.OuterSpace}>OuterSpace</h2>
        <NavLinks />
      </div>
    </>
  )
}

export default Sidebar
