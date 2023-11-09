import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

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
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', clickToClose)
    return () => {
      document.removeEventListener('mousedown', clickToClose)
    }
  }, [])
  
  return (
    <>
      <nav className={`${styles.sidebar} ${className} ${isOpen ? styles.open : styles.closed}`} ref={sidebarRef}>
        {children}
      </nav>
      {isOpen && <div className={`${styles.overlay} ${styles.open}`} onClick={closeSidebar} />}
    </>
  )
}

export default Sidebar
