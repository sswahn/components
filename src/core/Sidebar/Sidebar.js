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
      <nav className={`${styles.sidebar} ${className || ''} ${isOpen ? styles.open : styles.closed}`} ref={sidebarRef} aria-label="collapsible sidebar" aria-hidden={!isOpen}>
        {children}
      </nav>
      {/* isOpen && <div className={`${styles.overlay}`} onClick={closeSidebar} /> */}
    </>
  )
}

export default Sidebar
