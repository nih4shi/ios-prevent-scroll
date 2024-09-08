'use client'

import { useState } from 'react'
import ModalCreatedByDialog from '../ModalCreatedByDialog'

export default function ExampleAddOverflowHiddenToHtmlAndBody() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => {
    document.documentElement.style.overflow = 'hidden'
    document.body.style.overflow = 'hidden'
    document.documentElement.style.scrollbarGutter = 'stable'
    setIsModalOpen(true)
  }
  const closeModal = () => {
    document.documentElement.style.overflow = ''
    document.body.style.overflow = ''
    document.documentElement.style.scrollbarGutter = ''
    setIsModalOpen(false)
  }

  return (
    <div>
      <h2 className="mb-2 mt-4">&lt;html&gt;と&lt;body&gt;にoverflow: hidden</h2>
      <button className="w-full rounded-lg bg-gray-700 p-2 text-white" onClick={openModal}>
        Open Modal
      </button>
      <ModalCreatedByDialog isOpen={isModalOpen} onClose={closeModal}>
        {[...Array(20)].map((_, index) => (
          <div key={index}>&lt;html&gt;と&lt;body&gt;にoverflow:hidden</div>
        ))}
      </ModalCreatedByDialog>
    </div>
  )
}
