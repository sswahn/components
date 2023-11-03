import { useState, useEffect } from 'react'
import styles from './styles.module.css'

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
    const isLiked = !liked
    const newCount = isLiked ? count + 1 : count - 1
    setLiked(isLiked)
    setCount(newCount)
    debouncedOnChange({ liked: isLiked, count: newCount })
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
