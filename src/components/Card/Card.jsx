import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import './style.css'

const Card = ({ card, index }) => (
  <Draggable draggableId={card.id} index={index}>
    {provided => (
      <div
        className="card"
        {...provided.draggableProps}
        {...provided.dragHandleProps}
        ref={provided.innerRef}
      >
        {card.text}
      </div>
    )}
  </Draggable>
)

export default Card
