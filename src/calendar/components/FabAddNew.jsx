import React from 'react'
import { addHours } from 'date-fns'
import { useCalendarStore, useUiStore } from '../../hooks'

export const FabAddNew = () => {
  const { onOpenModal } = useUiStore()
  const { setActiveEvent } = useCalendarStore()

  const onAddNewEvent = () => {
    onOpenModal()
    setActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 1),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Wilder',
      },
    })
  }

  return (
    <button className='btn btn-primary fab' onClick={onAddNewEvent}>
      <i className='fas fa-plus'></i>
    </button>
  )
}
