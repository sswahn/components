import { useContext, lazy } from 'react'
import { Context } from '../../Provider'
import styles from 'styles.module.css'

const SideBar = ({ children }) => {
  const [context, dispatch] = useContext(Context)
  
  const handleSidebar = event => {
    dispatch({ type: 'sidebar', payload: false })
  }
  
  return (
    <>
      <nav id="sidebar" className={`${styles.sidebar} ${context.sidebar ? 'sidebar-open : 'sidebar-closed'}`}>
        {/* make off click close functionality */}
        {children}
      </nav>
      {/* isSidebarOpen && <div className="overlay" onClick={toggleSidebar} /> */} {/* Overlay for closing sidebar */}
    </>
  )
}

export default Sidebar
