import { ADD_COLUMN, ADD_CARD, MOVE_CARD } from '../actions'

export default function columns(state = { byId: {}, allIds: [] }, action) {
  switch (action.type) {
    case ADD_COLUMN:
      return {
        byId: {
          ...state.byId,
          [action.columnId]: {
            id: action.columnId,
            title: action.columnTitle,
            cards: action.columnCards,
          },
        },
        allIds: [...state.allIds, action.columnId],
      }
    case ADD_CARD:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.columnId]: {
            ...state.byId[action.columnId],
            cards: [...state.byId[action.columnId].cards, action.cardId],
          },
        },
      }
    case MOVE_CARD:
      const { source, destination, draggableId } = action
      const sourceColumn = state.byId[source.droppableId]
      const destinationColumn = state.byId[destination.droppableId]
      if (sourceColumn === destinationColumn) {
        const newCardIds = sourceColumn.cards.slice()
        newCardIds.splice(source.index, 1)
        newCardIds.splice(destination.index, 0, draggableId)
        return {
          ...state,
          byId: {
            ...state.byId,
            [sourceColumn.id]: {
              ...sourceColumn,
              cards: newCardIds,
            },
          },
        }
      }
      const sourceCardIds = sourceColumn.cards.slice()
      sourceCardIds.splice(source.index, 1)
      const destinationCardIds = destinationColumn.cards.slice()
      destinationCardIds.splice(destination.index, 0, draggableId)
      return {
        ...state,
        byId: {
          ...state.byId,
          [sourceColumn.id]: {
            ...sourceColumn,
            cards: sourceCardIds,
          },
          [destinationColumn.id]: {
            ...destinationColumn,
            cards: destinationCardIds,
          },
        },
      }
    default:
      return state
  }
}
