export const ADD_COLUMN = 'ADD_COLUMN'
export const ADD_CARD = 'ADD_CARD'

let nextId = 0
export const addColumn = columnTitle => ({
  type: ADD_COLUMN,
  columnId: `column_${nextId++}`,
  columnTitle,
  columnCards: [],
})

export const addCard = (cardText, columnId) => ({
  type: ADD_CARD,
  cardId: `card_${nextId++}`,
  cardText,
  columnId,
})
