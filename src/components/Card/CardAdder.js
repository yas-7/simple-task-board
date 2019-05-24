import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../../actions'

const CardAdder = ({ columnId, dispatch }) => {
  const [text, setText] = useState('')

  const handleChange = e => {
    setText(e.target.value)
  }
  const onSubmitTask = e => {
    e.preventDefault()
    if (!text.trim()) {
      return
    }
    dispatch(addCard(text, columnId))
    setText('')
  }

  return (
    <div className="add-block">
      <form action="" onSubmit={onSubmitTask}>
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Введите название карточки"
        />
        <button type="submit">+ Add card </button>
      </form>
    </div>
  )
}

export default connect()(CardAdder)
