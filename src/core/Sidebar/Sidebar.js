import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

// TODO: take prop side = left/right, and implement in code
const Sidebar = ({ className, open, onClose, children }) => {
  const [isOpen, setIsOpen] = useState()
  const sidebarRef = useRef(null)

  const openSidebar = () => {
    setIsOpen(true)
  }

  const closeSidebar = () => {
    onClose && onClose()
    setIsOpen(false)
  }
  
  const toggleSidebar = () => {
    open ? openSidebar() : closeSidebar()
  }

  const clickToClose = event => {
    if (!sidebarRef.current.contains(event.target)) {
      closeSidebar()
    }
  }
 
  useEffect(() => {
    toggleSidebar()
  }, [open])

  useEffect(() => {
    document.addEventListener('mousedown', clickToClose)
    return () => {
      document.removeEventListener('mousedown', clickToClose)
    }
  }, [])
  
  return (
    <>
      <nav className={`${styles.sidebar} ${className || ''} ${isOpen ? styles.open : styles.close}`} ref={sidebarRef} aria-label="sidebar" aria-hidden={!isOpen}>
        {children}
      </nav>
      <div className={`${styles.overlay} ${isOpen ? styles.openOverlay : styles.closeOverlay}`} onClick={closeSidebar} aria-label="sidebar overlay" aria-hidden={!isOpen}></div>
    </>
  )
}

export default Sidebar
