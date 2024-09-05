'use client'

import { useRef, useEffect, useState } from 'react'

export default function ModalHtmlAndBody() {
  const modalRef = useRef<HTMLDialogElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflow = 'hidden'
      document.body.style.overflow = 'hidden'
      modalRef.current?.showModal()
    } else {
      document.documentElement.style.overflow = 'auto'
      document.body.style.overflow = 'auto'
      modalRef.current?.close()
    }
  }, [isModalOpen])

  return (
    <>
      <h2 className="mb-2 mt-4">htmlタグとbodyにoverflow: hiddenを付与</h2>
      <button className="rounded-lg bg-gray-700 p-2 text-white" onClick={openModal}>
        Open Modal
      </button>
      <dialog ref={modalRef} onClick={closeModal} className="w-full">
        <div className="w-full bg-white p-4 md:max-w-3xl" onClick={(e) => e.stopPropagation()}>
          &lt;html&gt;と&lt;body&gt;にoverflow:hidden
        </div>
      </dialog>
    </>
  )
}
