import { useState, useEffect } from 'react'

const debounce = (fn, delay) => {
  let timeoutId
  return (...args) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => {
      fn(...args)
    }, delay)
  }
}

const LikeButton = ({ className, initialCount, onChange }) => {
  const [liked, setLiked] = useState(false)
  const [count, setCount] = useState(0)
  const debouncedOnChange = debounce(onChange, 500)

  const handleClick = () => {
    const newState = !liked
    const newCount = newState ? count + 1 : count - 1
    setLiked(newState)
    setCount(newCount)
    debouncedOnChange({ liked: newState, count: newCount })
  }

  useEffect(() => {
    setCount(initialCount)
  }, [initialCount])

  return (
    <button className={`${styles.like} ${className}`} onClick={handleClick}>
      {liked ? 'Unlike' : 'Like'} {count} {/* change text to icons */}
    </button>
  )
}

export default LikeButton
