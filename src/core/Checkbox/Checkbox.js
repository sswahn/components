import { useRef } from 'react'
import CheckedIcon from './CheckedIcon.js'
import UncheckedIcon from './UncheckedIcon.js'
import styles from 'styles.module.css'

const Checkbox = ({ label, checked, onChange }) => {
  const checkboxRef = useRef(null)

  const handleClick = event => {
    checkboxRef.current.click()
  }
  
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input className={styles.checkbox} ref={checkboxRef} type="checkbox" checked={checked} onChange={onChange} aria-checked={checked} />
      {checked ? <CheckedIcon onClick={handleClick} /> : <UncheckedIcon onClick={handleClick} />}
    </div>
  )
}

export default Checkbox
