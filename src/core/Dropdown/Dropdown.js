import { useState } from 'react'

const Dropdown = ({ className, text, options }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`${className}`}>
      <button type="button" onClick={toggleDropdown} aria-label="dropdown button" aria-haspopup="true" aria-expanded={isOpen}>
        {text}
      </button>
      {isOpen && (
        <menu>
          {options.map((option, index) => (
            <li key={index} onClick={option.onClick} role="menuitem">
              {option.label}
            </li>
          ))}
        </menu>
      )}
    </div>
  )
}

export default Dropdown
