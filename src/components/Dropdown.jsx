import React, { useState } from 'react'
import { HiOutlineHeart } from 'react-icons/hi'

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
        <HiOutlineHeart onClick={handleClick} />
      </div>
      <div className="menuChild" style={{ display: display }}>
        {props.children}
      </div>
    </div>
  )
}

export default Dropdown
