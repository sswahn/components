import { useState } from 'react'
import UserIcon from './UserIcon'
import BadgeIcon from './BadgeIcon'
import styles from './styles.module.css'

const Avatar = ({ image, username, onClick, badge }) => {
  return (
    <a className={styles.avatar} href={`/profile/${username.toLowerCase()}`} onClick={onClick} aria-label={`${username}'s' profile`}>
      {image 
        ? <img src={image} alt={`${username}'s' avatar`} />
        : <UserIcon />
      }
      {badge &&  }
    </a>
  )
}

export default Avatar
