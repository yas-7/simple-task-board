import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { addColumn } from '../../actions'
import './style.css'

const ColumnAdder = ({ dispatch }) => {
  const [title, setTitle] = useState('')
  const [open, setOpen] = useState(false)
  const triggerEl = useRef()
  const inputEl = useRef()

  const handleClickOutside = e => {
    if (triggerEl.current.contains(e.target)) {
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
    <div className="column column_adder add-block">
      <div className="trigger" ref={triggerEl}>
        {open ? (
          <form action="" onSubmit={onSubmitColumn}>
            <input
              className="add-block__input"
              value={title}
              ref={inputEl}
              onChange={handleChange}
              placeholder="Введите название колонки"
            />

            <div className="add-block__controls">
              <button className="add-block__submit" type="submit">
                Добавить колонку
              </button>
              <button className="add-block__cancel" onClick={handleClose} />
            </div>
          </form>
        ) : (
          <span className="trigger__label" onClick={() => setOpen(true)}>
            Добавить еще одну колонку
          </span>
        )}
      </div>
    </div>
  )
}

export default connect()(ColumnAdder)
