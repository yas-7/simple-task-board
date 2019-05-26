import React from 'react'
import { DragDropContext } from 'react-beautiful-dnd'
import ColumnContainer from '../Column/ColumnContainer'
import ColumnAdder from '../Adder/ColumnAdder'
import './style.css'

const Board = ({ columnsId, onDragEnd }) => (
  <div className="board">
    <div className="board__wrapper">
      <DragDropContext onDragEnd={onDragEnd}>
        {columnsId.map(columnId => (
          <ColumnContainer key={columnId} columnId={columnId} />
        ))}
        <ColumnAdder />
      </DragDropContext>
    </div>
  </div>
)

export default Board
