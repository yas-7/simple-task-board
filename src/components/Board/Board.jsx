import React from 'react'
import ColumnContainer from '../Column/ColumnContainer'
import ColumnAdder from '../Adder/ColumnAdder'
import './style.css'

const Board = ({ columnsId }) => (
  <div className="board">
    <div className="board__wrapper">
      {columnsId.map(columnId => (
        <ColumnContainer key={columnId} columnId={columnId} />
      ))}
      <ColumnAdder />
    </div>
  </div>
)

export default Board
