'use client'

import { useEffect, useRef } from 'react'

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

  const handleClose = () => {
    if (onClose) {
      onClose()
    }
  }

  return (
    isOpen && (
      <div
        className="fixed left-0 top-0 h-screen w-full max-w-3xl content-center bg-black/70 p-4"
        onClick={handleClose}
      >
        <div
          className="h-52 overflow-y-scroll rounded-lg bg-white p-4 md:max-w-3xl"
          onClick={(e) => e.stopPropagation()}
        >
          {children}
        </div>
      </div>
    )
  )
}
