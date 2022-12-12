import React, { useState } from 'react'
import { HiOutlineHeart } from 'react-icons/hi'
import DropdownStyle from './Dropdown.module.css'
const Dropdown = (props) => {
  const [display, setDisplay] = useState('none')

  function handleClick() {
    if (display === 'none') {
      setDisplay('block')
    } else {
      setDisplay('none')
    }
  }
  return (
    <div className="dropDown">
      <div className="dropDownIcon">
        <HiOutlineHeart
          className={DropdownStyle.LikeIcon}
          onClick={handleClick}
        />
      </div>
      <div className="menuChild" style={{ display: display }}>
        {props.children}
      </div>
    </div>
  )
}

export default Dropdown
