import { useState } from 'react'
import styles from './styles.module.css'

const Badge = ({ className, count }) => {

  return (
    <div className={`${styles.badge} ${className}`} role="status" aria-label="notification indicator" aria-hidden="false">
      {count === 0 || count ? count : ''}
    </div>
  )
}
