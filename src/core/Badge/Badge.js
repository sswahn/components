import { useState } from 'react'
import styles from './styles.module.css'

const Badge = ({ children }) => {

  return (
    <div className="badge" role="status" aria-label="notification indicator" aria-hidden="false">
      {children}
    </div>
  )
}
