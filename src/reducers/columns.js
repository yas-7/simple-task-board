import { ADD_COLUMN } from '../actions'
import { ADD_CARD } from '../actions'

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
    default:
      return state
  }
}
