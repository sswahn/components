import { useState } from 'react'

import UserIcon from './UserIcon'

export default function Avatar({ src, username }) {
  const [context, dispatch] = useContext(Context)


  // need to handle close modals
  const handleNavigation = event => {
    event.preventDefault()
    const route = `/profile/${username.toLowerCase()}`
    if (window.location.pathname !== route) {
      history.pushState(null, '', route)
      dispatch({ type: 'router', payload: route })
    }
  }

  return (
    <a className="avatar" href={`/profile/${username.toLowerCase()}`} onClick={handleNavigation} aria-label={`${username}'s' profile`}>
      {src 
        ? <img src={src} alt={`${username}'s' avatar`} />
        : <FontAwesomeIcon icon={faCircleUser} aria-label="default avatar image" />
      }
      {/* context.user.isPro && ( */}
        <div className="pro-badge" aria-label="pro badge">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 100 100">
            <circle cx="50" cy="50" r="44" fill="#00bfff" stroke="white" strokeWidth="9" />
            <path d="M35 50L45 60L65 35" stroke="#fff" strokeWidth="8" fill="none" />
          </svg>
        </div>
      
    </a>
  )
}
