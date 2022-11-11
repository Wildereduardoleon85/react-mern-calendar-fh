import { useDispatch, useSelector } from 'react-redux'
import { onAddNewEvent, onSetActiveEvent } from '../store'

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar)
  const dispatch = useDispatch()

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    // TODO: reach to the backend

    // If everything goes well
    if (calendarEvent._id) {
      // Updating
    } else {
      // Creating
      dispatch(onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }))
    }
  }

  return { events, activeEvent, setActiveEvent, startSavingEvent }
}
