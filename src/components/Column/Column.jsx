import React from 'react'
import CardContainer from '../Card/CardContainer'
import CardAdder from '../Adder/CardAdder'
import './style.css'

const Column = ({ column }) => {
  return (
    <div className="column">
      <div className="column__title">{column.title}</div>
      <div className="column__content">
        {column.cards.map(cardId => (
          <CardContainer key={cardId} cardId={cardId} />
        ))}
      </div>
      <CardAdder columnId={column.id} />
    </div>
  )
}

export default Column
