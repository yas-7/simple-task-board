import { ADD_CARD } from '../actions'

export default function cards(state = { byId: {}, allIds: [] }, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        byId: {
          ...state.byId,
          [action.cardId]: {
            id: action.cardId,
            text: action.cardText,
          },
        },
        allIds: [...state.allIds, action.cardId],
      }
    default:
      return state
  }
}
