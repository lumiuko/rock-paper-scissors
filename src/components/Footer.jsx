import { useState } from 'react'
import Modal from 'react-modal'
import rulesImg from '../assets/images/image-rules.svg'
import iconClose from '../assets/images/icon-close.svg'

Modal.setAppElement('#root')

const customStyles = {
  overlay: {
    backgroundColor: null
  },
  content: {
    border: null,
    borderRadius: null,
    padding: null,
    inset: null
  }
}

export default function Footer() {
  const [modalIsOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <footer className="flex justify-center mt-auto mb-8 md:mr-8 md:justify-end">
      <button
        className="uppercase tracking-button py-[0.625rem] px-9 border-[1px] border-white rounded-score-md transition-colors hover:text-dark-blue hover:bg-[#fff]"
        onClick={openModal}
      >
        Rules
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        closeTimeoutMS={200}
        contentLabel="Rules"
      >
        <div className="self-stretch flex justify-center mb-12 md:justify-between">
          <h5 className="uppercase text-modal leading-default">Rules</h5>
          <button onClick={closeModal} aria-label="Close modal" className="hidden md:block">
            <img src={iconClose} alt="Close" aria-hidden="true" />
          </button>
        </div>
        <img src={rulesImg} alt="Rules" />
        <button onClick={closeModal} aria-label="Close modal" className="md:hidden">
          <img src={iconClose} alt="Close" aria-hidden="true" />
        </button>
      </Modal>
    </footer>
  )
}
