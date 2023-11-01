import { useContext, lazy } from 'react'
import { Context } from '../../Provider'
import styles from 'styles.module.css'

const SideBar = ({ children, className }) => {
  const [context, dispatch] = useContext(Context)
  
  const handleSidebar = event => {
    dispatch({ type: 'sidebar', payload: false })
  }

  // add event listeners for handling close sidebar
  
  return (
    <>
      <nav id="sidebar" className={`${styles.sidebar} ${className} ${context.sidebar ? styles['sidebar-open'] : styles['sidebar-closed']}`}>
        {/* make off click close functionality */}
        {children}
      </nav>
      {/* isSidebarOpen && <div className="overlay" onClick={toggleSidebar} /> */} {/* Overlay for closing sidebar */}
    </>
  )
}

export default Sidebar
