import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { addColumn } from '../../actions'
import './style.css'

const ColumnAdder = ({ dispatch }) => {
  const [title, setTitle] = useState('')
  const [open, setOpen] = useState(false)
  const box = useRef()
  const inputEl = useRef()

  const handleClickOutside = e => {
    if (box.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setOpen(false)
  }

  const handleClose = () => {
    setOpen(false)
    setTitle('')
  }

  useEffect(() => {
    if (open) {
      inputEl.current.focus()
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

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
    setOpen(false)
  }

  return (
    <div className="column column_adder add-block" ref={box}>
      {open ? (
        <form action="" onSubmit={onSubmitColumn}>
          <input
            className="add-block__input"
            value={title}
            ref={inputEl}
            onChange={handleChange}
            placeholder="Введите название колонки"
            required
          />

          <div className="add-block__controls">
            <button className="add-block__submit" type="submit">
              Добавить колонку
            </button>
            <button className="add-block__cancel" onClick={handleClose} />
          </div>
        </form>
      ) : (
        <button className="add-block__btn" onClick={() => setOpen(true)}>
          Добавить еще одну колонку
        </button>
      )}
    </div>
  )
}

export default connect()(ColumnAdder)
