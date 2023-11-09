import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

const Sidebar = ({ className, open, children }) => {
  const [isOpen, setIsOpen] = useState()
  const sidebarRef = useRef(null)

  const toggleModal = () => {
    open ? setIsOpen(true) : setIsOpen(false)
  }

  const clickToClose = event => {
    if (!sidebarRef.current.contains(event.target)) {
      closeModal()
    }
  }
 
  useEffect(() => {
    toggleModal()
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
        {/* make off click close functionality */}
        {children}
      </nav>
      {/* isOpen && <div className="overlay" onClick={closeSidebar} /> */} {/* Overlay for closing sidebar */}
    </>
  )
}

export default Sidebar
