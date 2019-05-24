import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addColumn } from '../../actions'

const CardAdder = ({ dispatch }) => {
  const [title, setTitle] = useState('')

  const handleChange = e => {
    setTitle(e.target.value)
  }
  const onSubmitColumn = e => {
    e.preventDefault()
    if (!title.trim()) {
      return
    }
    dispatch(addColumn(title))
    setTitle('')
  }

  return (
    <div className="add-block">
      <form action="" onSubmit={onSubmitColumn}>
        <input
          value={title}
          onChange={handleChange}
          placeholder="Введите название колонки"
        />
        <button type="submit">+ Add column </button>
      </form>
    </div>
  )
}

export default connect()(CardAdder)
