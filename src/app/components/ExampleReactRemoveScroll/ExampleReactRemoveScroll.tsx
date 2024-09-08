'use client'

import { useRef, useEffect, useState } from 'react'
import { RemoveScroll } from 'react-remove-scroll'
import ModalCreatedByDialog from '../ModalCreatedByDialog'

export default function ExampleReactRemoveScroll() {
  const modalRef = useRef<HTMLDialogElement>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  useEffect(() => {
    if (isModalOpen) {
      modalRef.current?.showModal()
    } else {
      modalRef.current?.close()
    }
  }, [isModalOpen])

  return (
    <div>
      <h2 className="mb-2 mt-4">react-remove-scroll</h2>
      <button className="w-full rounded-lg bg-gray-700 p-2 text-white" onClick={openModal}>
        Open Modal
      </button>
      {isModalOpen && (
        <RemoveScroll forwardProps noIsolation>
          <div className="scroll">
            <ModalCreatedByDialog isOpen={isModalOpen} onClose={closeModal}>
              {[...Array(20)].map((_, index) => (
                <div key={index}>react-remove-scroll</div>
              ))}
            </ModalCreatedByDialog>
          </div>
        </RemoveScroll>
      )}
    </div>
  )
}
