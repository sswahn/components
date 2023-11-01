import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

export default function Modal({ children, className, onClose }) {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dialogRef = useRef(null)
  
  const openModal = () => {
    if (!isModalOpen) {
      dialogRef.current.showModal()
      setIsModalOpen(true)
    }
  }
  
  const handleClose = event => {
    if (event.target.id === 'dialog') {
      onClose()
      dialogRef.current.close()
      setIsModalOpen(false)
    }
  }
  
  useEffect(() => {
    openModal()
  }, [])
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClose)
    return () => {
      document.removeEventListener('mousedown', handleClose)
    }
  }, [])
  
  return (
    <dialog className={`${styles.modal} ${className}`} ref={dialogRef}>
      {children}
    </dialog>
  )
}
