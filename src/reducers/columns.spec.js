import columns from './columns'
import { ADD_COLUMN, ADD_CARD, MOVE_CARD } from '../actions'

describe('columns reducer', () => {
  it('should handle init state', () => {
    expect(columns(undefined, {})).toEqual({ byId: {}, allIds: [] })
  })

  it('should handle ADD_COLUMN', () => {
    expect(
      columns(
        { byId: {}, allIds: [] },
        {
          type: ADD_COLUMN,
          columnId: 'column_0',
          columnTitle: 'План на месяц',
          columnCards: [],
        }
      )
    ).toEqual({
      byId: {
        column_0: {
          id: 'column_0',
          title: 'План на месяц',
          cards: [],
        },
      },
      allIds: ['column_0'],
    })

    expect(
      columns(
        {
          byId: {
            column_0: {
              id: 'column_0',
              title: 'План на месяц',
              cards: [],
            },
          },
          allIds: ['column_0'],
        },
        {
          type: ADD_COLUMN,
          columnId: 'column_1',
          columnTitle: 'План на день',
          columnCards: [],
        }
      )
    ).toEqual({
      byId: {
        column_0: {
          id: 'column_0',
          title: 'План на месяц',
          cards: [],
        },
        column_1: {
          id: 'column_1',
          title: 'План на день',
          cards: [],
        },
      },
      allIds: ['column_0', 'column_1'],
    })
  })

  it('should handle ADD_CARD to column', () => {
    expect(
      columns(
        {
          byId: {
            column_0: {
              id: 'column_0',
              title: 'План на месяц',
              cards: [],
            },
          },
          allIds: ['column_0'],
        },
        {
          type: ADD_CARD,
          cardId: 'card_0',
          cardText: 'Пройти курс по React',
          columnId: 'column_0',
        }
      )
    ).toEqual({
      byId: {
        column_0: {
          id: 'column_0',
          title: 'План на месяц',
          cards: ['card_0'],
        },
      },
      allIds: ['column_0'],
    })
  })

  it('should throw an error', () => {
    expect(() => {
      columns(
        {
          byId: {
            column_0: {
              id: 'column_0',
              title: 'План на месяц',
              cards: [],
            },
          },
          allIds: ['column_0'],
        },
        {
          type: ADD_CARD,
          cardId: 'card_0',
          cardText: 'Пройти курс по React',
          columnId: 'column_1',
        }
      )
    }).toThrow()
  })

  it('should handle MOVE_CARD: inside one column', () => {
    expect(
      columns(
        {
          byId: {
            column_0: {
              id: 'column_0',
              title: 'План на месяц',
              cards: ['card_0', 'card_1', 'card_2'],
            },
            column_1: {
              id: 'column_1',
              title: 'План на день',
              cards: ['card_4', 'card_5'],
            },
          },
          allIds: ['column_0', 'column_1'],
        },
        {
          type: MOVE_CARD,
          source: { droppableId: 'column_0', index: 0 },
          destination: { droppableId: 'column_0', index: 2 },
          draggableId: 'card_0',
        }
      )
    ).toEqual({
      byId: {
        column_0: {
          id: 'column_0',
          title: 'План на месяц',
          cards: ['card_1', 'card_2', 'card_0'],
        },
        column_1: {
          id: 'column_1',
          title: 'План на день',
          cards: ['card_4', 'card_5'],
        },
      },
      allIds: ['column_0', 'column_1'],
    })
  })

  it('should handle MOVE_CARD: between columns', () => {
    expect(
      columns(
        {
          byId: {
            column_0: {
              id: 'column_0',
              title: 'План на месяц',
              cards: ['card_0', 'card_1'],
            },
            column_1: {
              id: 'column_1',
              title: 'План на день',
              cards: [],
            },
          },
          allIds: ['column_0', 'column_1'],
        },
        {
          type: MOVE_CARD,
          source: { droppableId: 'column_0', index: 0 },
          destination: { droppableId: 'column_1', index: 0 },
          draggableId: 'card_0',
        }
      )
    ).toEqual({
      byId: {
        column_0: {
          id: 'column_0',
          title: 'План на месяц',
          cards: ['card_1'],
        },
        column_1: {
          id: 'column_1',
          title: 'План на день',
          cards: ['card_0'],
        },
      },
      allIds: ['column_0', 'column_1'],
    })
  })
})
