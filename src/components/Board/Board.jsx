import React from 'react'
import ColumnContainer from '../Column/ColumnContainer'
import ColumnAdder from '../Column/ColumnAdder'

const Board = ({ columnsId }) => (
  <div className="board">
    {columnsId.map(columnId => (
      <ColumnContainer key={columnId} columnId={columnId} />
    ))}
    <ColumnAdder />
  </div>
)

export default Board
