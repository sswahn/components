import React, { useState } from 'react'

const debounce = (fn, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const LikeButton = ({ count, onChange }) => {
  const [liked, setLiked] = useState(false)
  const debouncedLikeChange = debounce(onChange, 500)

  const handleLikeClick = () => {
    setLiked(!liked)
    debouncedLikeChange(liked ? -1 : 1)
  }

  return (
    <div>
      <button onClick={handleLikeClick}>
        {liked ? 'Unlike' : 'Like'} {count} {/* change text to icons */}
      </button>
    </div>
  )
}

export default LikeButton
