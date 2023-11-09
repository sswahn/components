import { useState, useEffect, useRef } from 'react'

const Modal = ({ className, open, onClose, children }) => {
  const dialogRef = useRef(null)
  
  const openModal = () => {
    dialogRef.current.showModal()
  }
  
  const closeModal = event => {
    if (event.target.tagName === 'DIALOG') {
      dialogRef.current.close()
      onClose && onClose()
    }
  }
  
  const toggleModal = () => {
    open ? openModal() : closeModal()
  }
  
  useEffect(() => {
    toggleModal()
  }, [open])

  /*
  useEffect(() => {
    document.addEventListener('mousedown', closeModal)
    return () => {
      document.removeEventListener('mousedown', closeModal)
    }
  }, [])
  */
  
  return (
    <dialog className={className} ref={dialogRef}>
      {children}
    </dialog>
  )
}

export default Modal
