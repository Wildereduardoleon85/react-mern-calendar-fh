import React from 'react'

export const CalendarEvent = ({ event }) => {
  const { title, user } = event

  const hola = 'hello world'

  return (
    <>
      <strong>{title}</strong>
      <span>-{user.name}</span>
    </>
  )
}
