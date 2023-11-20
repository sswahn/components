import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

const Dropdown = ({ className, icon: Icon, text, options }) => {
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

  //TODO: handle optional icons - an icon prop (icon={buttonIcon}), and icon property in options (option.icon)
  // consider using conditional classes instead of inline styles on <menu>
  
  return (
    <div className={`${styles.dropdown} ${className || ''}`}>
      <button type="button" onClick={toggleDropdown} ref={dropdownRef} aria-label="dropdown button" aria-haspopup="true" aria-expanded={isOpen}>
        {Icon && <div><Icon /></div>} 
        {text && <div>{text}</div>}
      </button>
      <menu ref={menuRef} style={{display: isOpen ? 'block' : 'none'}} aria-hidden={!isOpen}>
        {options.map((option, index) => (
          <li key={index} onClick={option.onClick} role="menuitem">
            {option.icon && <div><option.icon /></div>} 
            <div>{option.label}</div>
          </li>
        ))}
      </menu>
    </div>
  )
}

export default Dropdown
