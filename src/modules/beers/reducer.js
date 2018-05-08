import * as actions from './actions'

const initialState = {
  beers: [],
  perPage: 25,
  nextPage: 1,
  fetching: false,
  error: null,
}

export default (state = initialState, action) => {
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
        nextPage: state.nextPage+1,
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