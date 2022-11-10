import { useDispatch, useSelector } from 'react-redux'
import { onCloseDateModal, onOpenDateModal } from '../store'

export const useUiStore = () => {
  const dispatch = useDispatch()
  const { isDateModalOpen } = useSelector((state) => state.ui)

  const onOpenModal = () => {
    dispatch(onOpenDateModal())
  }

  const onCloseModal = () => {
    dispatch(onCloseDateModal())
  }

  return { isDateModalOpen, onOpenModal, onCloseModal }
}
