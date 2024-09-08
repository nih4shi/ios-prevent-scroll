'use client'

import { useEffect, useRef } from 'react'

export default function ModalCreatedByDialog({
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
      modalRef.current?.showModal()
    } else {
      modalRef.current?.close()
    }
  }, [isOpen])

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    <dialog
      ref={modalRef}
      onClick={handleClose}
      className="mt-8 w-full rounded-lg backdrop:bg-black/70 md:max-w-3xl"
    >
      <div
        className="h-52 overflow-y-scroll bg-white p-4 md:max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </dialog>
  )
}
