import { useState, useEffect } from 'react'
import { Context } from '../../Provider'
import styles from 'styles.module.css'

const SideBar = ({ children, className }) => {
 const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  
  const openSidebar = () => {
    if (isSidebarOpen) {
      setIsSidebarOpen(true)
    }
  }

  const closeSidebar = () => { // fires on off click (needs event handler)
    setIsSidebarOpen(false)
  }

  useEffect(() => {
    openSidebar()
  })

  useEffect(() => {
    // event handlers for closing
    return () => {
      
    }
  })
  
  return (
    <>
      <nav className={`${styles.sidebar} ${className} ${isSidebarOpen ? styles.open : styles.closed}`}>
        {/* make off click close functionality */}
        {children}
      </nav>
      {/* isSidebarOpen && <div className="overlay" onClick={toggleSidebar} /> */} {/* Overlay for closing sidebar */}
    </>
  )
}

export default Sidebar
