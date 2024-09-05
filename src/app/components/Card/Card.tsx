'use client'

import { useState } from 'react'
import Modal from '../Modal'

interface Props {
  card: CARD
}

export default function Card({ card }: Props) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="flex justify-between rounded border border-gray-300 bg-white p-4">
      <div className="content-center text-lg font-bold">{card.title}</div>
      <button className="rounded bg-gray-700 p-2 text-white" onClick={openModal}>
        Open Modal
      </button>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div>{card.text}</div>
      </Modal>
    </div>
  )
}
