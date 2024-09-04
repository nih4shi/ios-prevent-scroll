'use client'
import { useRef, useEffect } from 'react'

export default function Modal({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean
  onClose(): void
  children: React.ReactNode
}) {
  const modalRef = useRef<HTMLDialogElement>(null)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden' // iOS Safariの背面スクロールを止める
      modalRef.current?.showModal()
    } else {
      modalRef.current?.close()
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const closeModal = () => {
    if (onClose) onClose()
  }

  return (
    <dialog
      ref={modalRef}
      onClick={closeModal}
      className="mx-auto h-1/2 w-full rounded p-4 md:max-w-3xl"
    >
      <div onClick={(e) => e.stopPropagation()}>{children}</div>
    </dialog>
  )
}
