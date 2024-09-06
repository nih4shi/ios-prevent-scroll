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
      document.documentElement.style.overflow = ''
      document.body.style.overflow = ''
      modalRef.current?.close()
    }
  }, [isModalOpen])

  return (
    <div>
      <h2 className="mb-2 mt-4">&lt;html&gt;と&lt;body&gt;にoverflow: hidden</h2>
      <button className="w-full rounded-lg bg-gray-700 p-2 text-white" onClick={openModal}>
        Open Modal
      </button>
      <dialog ref={modalRef} onClick={closeModal} className="w-full rounded-lg">
        <div className="w-full">
          <div
            className="h-52 overflow-y-scroll bg-white p-4 md:max-w-3xl"
            onClick={(e) => e.stopPropagation()}
          >
            {[...Array(20)].map((_, index) => (
              <div key={index}>&lt;html&gt;と&lt;body&gt;にoverflow:hidden</div>
            ))}
          </div>
        </div>
      </dialog>
    </div>
  )
}
