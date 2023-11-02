import { useState } from 'react'
import UserIcon from './UserIcon'

const Avatar = ({ image, username, onClick, badge }) => {
  return (
    <a className="avatar" href={`/profile/${username.toLowerCase()}`} onClick={onClick} aria-label={`${username}'s' profile`}>
      {image 
        ? <img src={image} alt={`${username}'s' avatar`} />
        : <UserIcon />
      }
      {badge &&
        <div className="pro-badge" aria-label="pro badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" fill="#00bfff" stroke="white" strokeWidth="9" />
            <path d="M35 50L45 60L65 35" stroke="#fff" strokeWidth="8" fill="none" />
          </svg>
        </div>
      }
    </a>
  )
}

export default Avatar
