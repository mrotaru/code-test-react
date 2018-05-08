export const ADD_ITEM = 'ADD_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'

export const addItem = item => ({
  type: ADD_ITEM,
  item,
})

export const removeItem = itemId => ({
  type: REMOVE_ITEM,
  itemId,
})