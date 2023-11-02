import { useState, useEffect, useRef } from 'react'
import styles from './styles.module.css'

const Modal = ({ children, className, onClose }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const dialogRef = useRef(null)
  
  const openModal = () => {
    if (!isModalOpen) {
      dialogRef.current.showModal()
      setIsModalOpen(true)
    }
  }
  
  const closeModal = event => {
    if (event.target.tagName === 'DIALOG') {
      onClose()
      dialogRef.current.close()
      setIsModalOpen(false)
    }
  }
  
  useEffect(() => {
    openModal()
  }, [])
  
  useEffect(() => {
    document.addEventListener('mousedown', closeModal)
    return () => {
      document.removeEventListener('mousedown', closeModal)
    }
  }, [])
  
  return (
    <dialog className={`${styles.modal} ${className}`} ref={dialogRef}>
      {children}
    </dialog>
  )
}

export default Modal
