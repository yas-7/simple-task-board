import React, { useRef, useEffect } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import CardContainer from '../Card/CardContainer'
import CardAdder from '../Adder/CardAdder'
import './style.css'

const Column = ({ column }) => {
  const node = useRef()
  useEffect(() => {
    const { scrollHeight, clientHeight } = node.current
    const maxScrollTop = scrollHeight - clientHeight
    node.current.scrollTop = maxScrollTop > 0 ? maxScrollTop : 0
  })
  return (
    <div className="column">
      <div className="column__title">{column.title}</div>
      <div className="column__content" ref={node}>
        <Droppable droppableId={String(column.id)}>
          {provided => (
            <div
              className="column__inner"
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
      </div>

      <CardAdder columnId={column.id} />
    </div>
  )
}

export default Column
