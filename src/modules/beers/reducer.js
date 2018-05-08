import * as actions from './actions'

const initialState = {
  beers: [],
  perPage: 25,
  currentPage: 1,
  fetching: false,
}

export default (state = initialState, action) => {
  switch(action.type) {
    case actions.FETCH_BEERS_REQUEST:
      return {
        ...state,
        isFetching: true,
      }
    default:
      return state
  }
}