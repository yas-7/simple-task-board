import React from 'react'
import { Droppable } from 'react-beautiful-dnd'
import CardContainer from '../Card/CardContainer'
import CardAdder from '../Adder/CardAdder'
import './style.css'

const Column = ({ column }) => {
  return (
    <div className="column">
      <div className="column__title">{column.title}</div>
      <Droppable droppableId={String(column.id)}>
        {provided => (
          <div
            className="column__content"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {column.cards.map((cardId, index) => (
              <CardContainer key={cardId} cardId={cardId} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <CardAdder columnId={column.id} />
    </div>
  )
}

export default Column
