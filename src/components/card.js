import React from 'react'
import '../App.css'

const Card = ({ modalToggle, id, title, body }) => {

  const bodySubstring = () => body.length > 16 ? `${body.substring(0, 15)}...` : body

  return (
    <div className='card' onClick={() => modalToggle(id)}>
      <h1>{title}</h1>
      <p>{bodySubstring()}</p>
    </div>
  )
}

export default Card