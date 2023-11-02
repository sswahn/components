import { useState } from 'react'
import styles from './styles.module.css'

const Search = ({ className, onChange, placeholder }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleOnChange = (event) => {
    const newValue = event.target.value
    setSearchValue(newValue)
    if (onChange) {
      onChange(newValue)
    }
  }
  
  return (
    <input 
      className={`${styles.search} ${className}`} 
      type="text"
      value={searchValue}
      onChange={handleOnChange}
      placeholder={placeholder || ''}
    />
  )
}

export default Search
