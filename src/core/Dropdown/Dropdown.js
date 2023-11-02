import { useState } from 'react'

const Dropdown = ({ text, options }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="dropdown">
      <button className="dropbtn" onClick={toggleDropdown}>
        {text}
      </button>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option, index) => (
            <button type="button" key={index} onClick={option.onClick}>
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
