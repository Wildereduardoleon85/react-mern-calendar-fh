import { useEffect } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from '../'
import { localizer, getMessages } from '../../helpers'
import { useCalendarStore, useUiStore } from '../../hooks'

export const CalendarPage = () => {
  const { onOpenModal } = useUiStore()
  const { events, setActiveEvent, startLoadingEvents } = useCalendarStore()
  const lastView = localStorage.getItem('lastView') || 'week'

  useEffect(() => {
    startLoadingEvents()
  }, [])

  const eventStyleGetter = (event, start, end, isSelected) => {
    const style = {
      backgroundColor: '#347CF7',
      display: 'block',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    }

    return { style }
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event)
  }

  return (
    <>
      <Navbar />

      <Calendar
        components={{ event: CalendarEvent }}
        culture='es'
        defaultView={lastView}
        endAccessor='end'
        eventPropGetter={eventStyleGetter}
        events={events}
        localizer={localizer}
        messages={getMessages()}
        onDoubleClickEvent={onOpenModal}
        onSelectEvent={setActiveEvent}
        onView={onViewChanged}
        startAccessor='start'
        style={{ height: 'calc(100vh - 80px)' }}
      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  )
}
