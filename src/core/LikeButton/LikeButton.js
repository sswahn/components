import React, { useState } from 'react'

function LikeButton() {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)

  const handleLikeClick = () => {
    if (!liked) {
      setCount(count + 1)
    } else {
      setCount(count - 1)
    }
    setLiked(!liked)
  }

  return (
    <div>
      <button onClick={handleLikeClick}>
        {liked ? 'Unlike' : 'Like'} ({count})
      </button>
    </div>
  )
}

export default LikeButton
