import { useState } from 'react'
import styles from './styles.module.css'

const Dropdown = ({ className, text, options }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className={`${styles.dropdown} ${className}`}>
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
