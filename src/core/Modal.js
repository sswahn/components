import { useEffect, useRef } from 'react'

export default function Modal({ children, className, onClose }) {
  const dialogRef = useRef(null)
  
  const openModal = () => {
    if (dialogRef.current) {
      dialogRef.current.showModal();
    }
  }
  
  const handleClose = event => {
    if (event.target.id === 'dialog') {
      onClose()
      dialogRef.current.close()
    }
  }
  
  useEffect(() => {
    openModal()
  })
  
  useEffect(() => {
    document.addEventListener('mousedown', handleClose)
    return () => {
      document.removeEventListener('mousedown', handleClose)
    }
  }, [])
  
  return (
    <dialog className={`modal ${className}`} ref={dialogRef}>
      {children}
    </dialog>
  )
}
