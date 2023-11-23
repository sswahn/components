import { useState } from 'react'
import styles from './styles.module.css'

const Search = ({ className, onChange, placeholder }) => {
  const [searchValue, setSearchValue] = useState('')

  const handleOnChange = (event) => {
    const newValue = event.target.value
    setSearchValue(newValue)
    onChange && onChange(newValue)
  }
  
  return (
    <search>
      <form>
        <input 
          className={`${styles.search} ${className || ''}`} 
          type="text"
          value={searchValue}
          onChange={handleOnChange}
          placeholder={placeholder || ''}
          role="searchbox"
        />
      </form>
    </search>
  )
}

export default Search
