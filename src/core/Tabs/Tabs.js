import { useState } from 'react'
import styles from './styles.module.css'

const Tabs = ({ className, options }) => {
  const [active, setActive] = useState(0)

  const handleTabClick = tabNumber => {
    setActive(tabNumber)
  }

  return (
    <div className={`${styles.tabs} ${className || ''}`}>
      <nav role="tablist">
        {options.map((tab, index) => (
          <button 
            key={index} 
            id={`tab-${index}`}
            className={active === index ? 'active-tab' : ''} 
            onClick={() => handleTabClick(index)} 
            type="button" 
            role="tab" 
            aria-selected={active === index} 
            aria-controls={`tabpanel-${index}`}>
            {tab.label}
          </button>
        ))}
      </nav>
      <section 
        id={`tabpanel-${active}`}
        className={styles.content} 
        role="tabpanel"
        aria-labelledby={`tab-${active}`}>
        {options[active].content}
      </section>
    </div>
  )
}

export default Tabs
