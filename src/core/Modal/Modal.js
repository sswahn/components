import { useState, useEffect, useRef } from 'react'

const Modal = ({ className, open, onClose, children }) => {
  const dialogRef = useRef(null)
  
  const openModal = () => {
    dialogRef.current.showModal()
  }
  
  const closeModal = event => {
    dialogRef.current.close()
    onClose && onClose()
  }

  const clickToClose = event => {
    if (!dialogRef.current.contains(event.target)) {
      closeModal()
    }
  }
  
  const toggleModal = () => {
    open ? openModal() : closeModal()
  }
  
  useEffect(() => {
    toggleModal()
  }, [open])

  useEffect(() => {
    document.addEventListener('mousedown', clickToClose)
    return () => {
      document.removeEventListener('mousedown', clickToClose)
    }
  }, [])
  
  
  return (
    <dialog className={className} ref={dialogRef}>
      <div className={styles.content}>{children}</div>
    </dialog>
  )
}

export default Modal
