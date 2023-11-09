import { useState, useEffect, useRef } from 'react'

const Modal = ({ className, onClose, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const dialogRef = useRef(null)
  
  const openModal = () => {
    if (!isOpen) {
      dialogRef.current.showModal()
      setIsOpen(true)
    }
  }
  
  const closeModal = event => {
    if (event.target.tagName === 'DIALOG') {
      setIsOpen(false)
      dialogRef.current.close()
      onClose && onClose()
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
    <dialog className={className} ref={dialogRef}>
      {children}
    </dialog>
  )
}

export default Modal
