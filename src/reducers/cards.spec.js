import cards from './cards'
import { ADD_CARD } from '../actions'

describe('cards reducer', () => {
  it('should handle init state', () => {
    expect(cards(undefined, {})).toEqual({ byId: {}, allIds: [] })
  })

  it('should handle ADD_CARD', () => {
    expect(
      cards(
        { byId: {}, allIds: [] },
        {
          type: ADD_CARD,
          cardId: 'card_0',
          cardText: 'Пройти курс по React',
          columnId: 'column_0',
        }
      )
    ).toEqual({
      byId: {
        card_0: { id: 'card_0', text: 'Пройти курс по React' },
      },
      allIds: ['card_0'],
    })

    expect(
      cards(
        {
          byId: {
            card_0: { id: 'card_0', text: 'learn react' },
          },
          allIds: ['card_0'],
        },
        {
          type: ADD_CARD,
          cardId: 'card_1',
          cardText: 'Отметить день рождения',
          columnId: 'column_0',
        }
      )
    ).toEqual({
      byId: {
        card_0: { id: 'card_0', text: 'learn react' },
        card_1: { id: 'card_1', text: 'Отметить день рождения' },
      },
      allIds: ['card_0', 'card_1'],
    })
  })
})
