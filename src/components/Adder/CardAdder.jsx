import React, { useEffect, useState, useRef } from 'react'
import { connect } from 'react-redux'
import { addCard } from '../../actions'
import './style.css'

const CardAdder = ({ columnId, dispatch }) => {
  const [text, setText] = useState('')
  const [open, setOpen] = useState(false)
  const triggerEl = useRef()
  const textareaEl = useRef()

  const handleClickOutside = e => {
    if (triggerEl.current.contains(e.target)) {
      // inside click
      return
    }
    // outside click
    setOpen(false)
  }

  const handleChange = e => {
    setText(e.target.value)
    textareaEl.current.style.height = 'inherit'
    textareaEl.current.style.height = `${e.target.scrollHeight}px`
  }
  const handleClose = () => {
    setOpen(false)
    setText('')
  }

  const onSubmitTask = e => {
    e.preventDefault()
    if (!text.trim()) {
      return
    }
    dispatch(addCard(text, columnId))
    setText('')
    setOpen(false)
  }

  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  return (
    <div className="add-block">
      <div className="trigger" ref={triggerEl}>
        {open ? (
          <form action="" onSubmit={onSubmitTask}>
            <textarea
              ref={textareaEl}
              className="add-block__textarea"
              value={text}
              rows="1"
              onChange={handleChange}
              placeholder="Введите название карточки"
            />
            <div className="add-block__controls">
              <button className="add-block__submit" type="submit">
                Добавить карточку
              </button>
              <button className="add-block__cancel" onClick={handleClose} />
            </div>
          </form>
        ) : (
          <span className="trigger__label" onClick={() => setOpen(true)}>
            Добавить еще одну карточку
          </span>
        )}
      </div>
    </div>
  )
}

export default connect()(CardAdder)
