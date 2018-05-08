export const FETCH_BEERS_REQUEST = 'FETCH_BEERS_REQUEST'
export const FETCH_BEERS_SUCCESS = 'FETCH_BEERS_SUCCESS'
export const FETCH_BEERS_FAILURE = 'FETCH_BEERS_FAILURE'

const fetchBeersRequest = () => ({
  type: FETCH_BEERS_REQUEST,
})

const fetchBeersSuccess = (beers) => ({
  type: FETCH_BEERS_SUCCESS,
  beers,
})

const fetchBeersFailure = (error) => ({
  type: FETCH_BEERS_FAILURE,
  error,
})

export const fetchBeers = () => 
  (dispatch, getState, { api }) => {
    dispatch(fetchBeersRequest())
    return api.fetchFunction('https://api.punkapi.com/v2/beers')
      .then(res => res.json())
      .then(beers => dispatch(fetchBeersSuccess(beers)))
      .catch(error => dispatch(fetchBeersFailure(error)))
  }
