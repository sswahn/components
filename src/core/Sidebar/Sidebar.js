import { useState, useEffect } from 'react'
import { Context } from '../../Provider'
import styles from 'styles.module.css'

const SideBar = ({ children, className }) => {
 const [isOpen, setIsOpen] = useState(false)
  
  const openSidebar = () => {
    if (!isOpen) {
      setIsOpen(true)
    }
  }

  const closeSidebar = () => {
    setIsOpen(false)
  }

  useEffect(() => {
    openSidebar()
    return () => {
      closeSidebar()
    }
  }, [])
  
  return (
    <>
      <nav className={`${styles.sidebar} ${className} ${isOpen ? styles.open : styles.closed}`}>
        {/* make off click close functionality */}
        {children}
      </nav>
      {/* isOpen && <div className="overlay" onClick={closeSidebar} /> */} {/* Overlay for closing sidebar */}
    </>
  )
}

export default Sidebar
