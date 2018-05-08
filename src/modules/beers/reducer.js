import * as actions from './actions'

const initialState = {
  beers: [],
  perPage: 25,
  currentPage: 1,
  fetching: false,
  error: null,
}

export default (state = initialState, action) => {
  console.log('rrrred', action.error)
  switch(action.type) {
    case actions.FETCH_BEERS_REQUEST:
      return {
        ...state,
        error: null,
        isFetching: true,
      }
    case actions.FETCH_BEERS_SUCCESS:
      return {
        ...state,
        error: null,
        isFetching: false,
        beers: [
          ...state.beers,
          ...action.beers,
        ]
      }
    case actions.FETCH_BEERS_FAILURE:
      return {
        ...state,
        error: action.error.toString(),
      }
    default:
      return state
  }
}