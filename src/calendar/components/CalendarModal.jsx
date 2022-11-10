import { useState } from 'react'
import Modal from 'react-modal'

export const CalendarModal = () => {
  const [isOpen, setIsOpen] = useState(true)

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  }

  Modal.setAppElement('#root')

  const onCloseModal = () => {
    setIsOpen(false)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      contentLabel='Example Modal'
      className='modal'
      overlayClassName='modal-fondo'
      closeTimeoutMS={200}
    >
      <h1>Hola Mundo</h1>
      <hr />
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque rerum
        possimus nulla, alias fugiat ratione, modi iure quod, dolor dicta sunt.
      </p>
    </Modal>
  )
}
