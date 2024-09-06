'use client'

import { useRef, useEffect, useState } from 'react'
import { RemoveScroll } from 'react-remove-scroll'

export default function ModalReactRemoveScroll() {
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
        <RemoveScroll removeScrollBar={false} forwardProps noIsolation>
          <div className="scroll">
            <dialog ref={modalRef} onClick={closeModal} className="w-full rounded-lg">
              <div className="w-full">
                <div
                  className="h-52 overflow-y-scroll bg-white p-4 md:max-w-3xl"
                  onClick={(e) => e.stopPropagation()}
                >
                  {[...Array(20)].map((_, index) => (
                    <div key={index}>react-remove-scroll</div>
                  ))}
                </div>
              </div>
            </dialog>
          </div>
        </RemoveScroll>
      )}
    </div>
  )
}
