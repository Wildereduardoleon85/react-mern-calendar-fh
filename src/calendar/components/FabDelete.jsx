import { useCalendarStore } from '../../hooks'

export const FabDelete = () => {
  const { startDeletingEvent, activeEvent } = useCalendarStore()

  return (
    activeEvent && (
      <button
        className='btn btn-danger fab-danger'
        onClick={startDeletingEvent}
      >
        <i className='fas fa-trash-alt'></i>
      </button>
    )
  )
}
