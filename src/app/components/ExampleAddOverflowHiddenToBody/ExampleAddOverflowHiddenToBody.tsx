'use client'

import { useState } from 'react'
import ModalCreatedByDialog from '../ModalCreatedByDialog'

export default function ExampleAddOverflowHiddenToBody() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    document.body.style.overflow = 'hidden'
    document.body.style.scrollbarGutter = 'stable'
    setIsModalOpen(true)
  }
  const closeModal = () => {
    document.body.style.overflow = ''
    document.body.style.scrollbarGutter = ''
    setIsModalOpen(false)
  }

  return (
    <div>
      <h2 className="mb-2 mt-4">&lt;body&gt;にoverflow: hidden</h2>
      <button className="w-full rounded-lg bg-gray-700 p-2 text-white" onClick={openModal}>
        Open Modal
      </button>
      <ModalCreatedByDialog isOpen={isModalOpen} onClose={closeModal}>
        {[...Array(20)].map((_, index) => (
          <div key={index}>&lt;body&gt;にoverflow:hidden</div>
        ))}
      </ModalCreatedByDialog>
    </div>
  )
}
