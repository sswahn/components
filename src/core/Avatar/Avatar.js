import { useState } from 'react'
import UserIcon from './UserIcon.js'
import BadgeIcon from './BadgeIcon.js'
import styles from './styles.module.css'

const Avatar = ({ className, image, username, onClick, badge }) => {
  return (
    <div className={`${styles.avatar} ${className}`} onClick={onClick} aria-label={`${username}'s avatar`}>
      {image 
        ? <img src={image} alt={`${username}'s avatar`} />
        : <UserIcon />
      }
      {badge && (
        <div className={styles.badge}>
          <BadgeIcon />
        </div>
      )}
    </div>
  )
}

export default Avatar
