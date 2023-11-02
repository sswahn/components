import { useState } from 'react'
import styles from './styles.module.css'

const Search = ({ className }) => {

  return (
    <input className={`${styles.search} ${className}`} type="text" //>
  )
}

export default Search
