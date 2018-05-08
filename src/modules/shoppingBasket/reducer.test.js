import reducer, { initialState } from './reducer'
import * as actions from './actions'

describe('shoppingBasket reducer', () => {
  test('returns the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState)
  })

  test('handles "ADD_ITEM"', () => {
    expect(reducer({ items: [], count: 0}, {
      type: actions.ADD_ITEM,
      item: { id: 1 },
    })).toEqual({
      items: [{id: 1}],
      count: 1,
    })
  })

  test('handles "REMOVE_ITEM"', () => {
    expect(reducer({ items: [{ id: 1}, {id: 2}], count: 2}, {
      type: actions.REMOVE_ITEM,
      itemId: 1,
    })).toEqual({
      items: [{id: 2}],
      count: 1,
    })
  })
})