import { useState, useEffect } from 'react'
import { Context } from '../../Provider'
import styles from 'styles.module.css'

const SideBar = ({ children, className }) => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  const openSidebar = () => {
    if (!isSidebarOpen) {
      setIsSidebarOpen(true)
    }
  }

  const closeSidebar = () => {
    setIsSidebarOpen(false)
  }

  useEffect(() => {
    openSidebar()
    return () => {
      closeSidebar()
    }
  }, [])
  
  return (
    <>
      <nav className={`${styles.sidebar} ${className} ${isSidebarOpen ? styles.open : styles.closed}`}>
        {/* make off click close functionality */}
        {children}
      </nav>
      {/* isSidebarOpen && <div className="overlay" onClick={closeSidebar} /> */} {/* Overlay for closing sidebar */}
    </>
  )
}

export default Sidebar
