import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import { addHours } from 'date-fns'
import { Navbar, CalendarEvent, CalendarModal } from '../'
import { localizer, getMessages } from '../../helpers'

const events = [
  {
    title: 'Cumpleaños del Jefe',
    notes: 'Hay que comprar el pastel',
    start: new Date(),
    end: addHours(new Date(), 1),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Wilder',
    },
  },
]

export const CalendarPage = () => {
  const lastView = localStorage.getItem('lastView') || 'week'

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

  const onDoubleClick = (event) => {
    console.log({ doubleClick: event })
  }

  const onSelect = (event) => {
    console.log({ click: event })
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
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
        startAccessor='start'
        style={{ height: 'calc(100vh - 80px)' }}
      />
      <CalendarModal />
    </>
  )
}
