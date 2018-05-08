import * as actions from './actions'

export const initialState = {
  items: [],
  count: 0,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.ADD_ITEM:
      return {
        items: [...state.items, action.item],
        count: state.count+1,
      }
    case actions.REMOVE_ITEM:
      return {
        items: state.items.filter(item => item.id !== action.itemId),
        count: state.count-1,
      }
    default:
      return state
  }
}
