import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

const Dropdown = ({ className, text, options }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef(null)
  const menuRef = useRef(null)
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen)
  }

  const clickToClose = event => {
    if (!menuRef.current.contains(event.target) && event.target !== dropdownRef.current) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', clickToClose)
    return () => {
      document.removeEventListener('mousedown', clickToClose)
    }
  }, [])

  return (
    <div className={`${styles.dropdown} ${className || ''}`}>
      <button type="button" onClick={toggleDropdown} ref={dropdownRef} aria-label="dropdown button" aria-haspopup="true" aria-expanded={isOpen}>
        {text}
      </button>
      <menu style={{display: isOpen ? 'block' : 'none'}} ref={menuRef} aria-hidden={!isOpen}>
        {options.map((option, index) => (
          <li key={index} onClick={option.onClick} role="menuitem">
            {option.label}
          </li>
        ))}
      </menu>
    </div>
  )
}

export default Dropdown
