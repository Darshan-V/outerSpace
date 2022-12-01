import React, { useState } from 'react'
import { RxDotsVertical } from 'react-icons/rx'

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
        <RxDotsVertical onClick={handleClick} />
      </div>
      <div className="menuChild" style={{ display: display }}>
        {props.children}
      </div>
    </div>
  )
}

export default Dropdown
