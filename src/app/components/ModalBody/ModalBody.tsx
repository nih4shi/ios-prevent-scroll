'use client'

import { useRef, useEffect, useState } from 'react'

export default function ModalBody() {
  const modalRef = useRef<HTMLDialogElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden'
      modalRef.current?.showModal()
    } else {
      document.body.style.overflow = ''
      modalRef.current?.close()
    }
  }, [isModalOpen])

  return (
    <div>
      <h2 className="mb-2 mt-4">&lt;body&gt;にoverflow: hiddenを付与</h2>
      <button className="w-full rounded-lg bg-gray-700 p-2 text-white" onClick={openModal}>
        Open Modal
      </button>
      <dialog
        ref={modalRef}
        onClick={closeModal}
        className="relative m-0 box-border h-full max-h-none w-full max-w-none bg-black/0 p-4 py-16 backdrop:bg-black/0"
      >
        <div className="h-full w-full border bg-white p-4" onClick={(e) => e.stopPropagation()}>
          &lt;body&gt;にoverflow:hidden
        </div>
      </dialog>
    </div>
  )
}
