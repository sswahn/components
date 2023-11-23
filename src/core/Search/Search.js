import { useState } from 'react'
import styles from './styles.module.css'

const Search = ({ className, placeholder, onChange }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleOnChange = (event) => {
    const newValue = event.target.value
    setSearchValue(newValue)
    onChange && onChange(newValue)
  }
  
  return (
    <input 
      className={`${styles.search} ${className || ''}`} 
      type="search"
      value={searchValue}
      onChange={handleOnChange}
      placeholder={placeholder || ''}
      role="searchbox"
    />
  )
}

export default Search
