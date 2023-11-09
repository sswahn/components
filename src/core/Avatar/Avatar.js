import { useState } from 'react'
import UserIcon from './UserIcon.js'
import BadgeIcon from './BadgeIcon.js'
import styles from './styles.module.css'

const Avatar = ({ className, image, username, onClick }) => {
  return (
    <div className={`${styles.avatar} ${className}`} onClick={onClick} aria-label={`${username}'s avatar`}>
      {image 
        ? <img src={image} alt={`${username}'s avatar`} />
        : <UserIcon />
      }
    </div>
  )
}

export default Avatar
