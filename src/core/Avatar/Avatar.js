import { useState } from 'react'
import UserIcon from './UserIcon'
import BadgeIcon from './BadgeIcon'
import styles from './styles.module.css'

const Avatar = ({ image, username, onClick, badge }) => {
  return (
    <div className={styles.avatar} onClick={onClick} aria-label={`${username}'s avatar`}>
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
