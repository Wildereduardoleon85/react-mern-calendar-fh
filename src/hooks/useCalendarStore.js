import { useDispatch, useSelector } from 'react-redux'
import { calendarApi } from '../api'
import {
  onAddNewEvent,
  onDeleteEvent,
  onSetActiveEvent,
  onUpdateEvent,
} from '../store'

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector((state) => state.calendar)
  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()

  const setActiveEvent = (calendarEvent) => {
    dispatch(onSetActiveEvent(calendarEvent))
  }

  const startSavingEvent = async (calendarEvent) => {
    // TODO: reach to the backend

    // If everything goes well
    if (calendarEvent._id) {
      // Updating
      dispatch(onUpdateEvent(calendarEvent))
    } else {
      const { data } = await calendarApi.post('/events', calendarEvent)

      console.log(data)
      dispatch(onAddNewEvent({ ...calendarEvent, id: data.id, user }))
    }
  }

  const startDeletingEvent = () => {
    dispatch(onDeleteEvent())
  }

  return {
    events,
    activeEvent,
    setActiveEvent,
    startSavingEvent,
    startDeletingEvent,
  }
}
