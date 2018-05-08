import React from 'react';
import { connect } from 'react-redux'

import * as beerActions from '../../modules/beers/actions'
import BeersList from '../BeersList'
import Spinner from '../../components/Spinner'

class Home extends React.Component{
  constructor(props) {
    super(props)
    this.loadMore = this.loadMore.bind(this)
  }
  loadMore() {
    this.props.loadMore(this.props.nextPageNumber)
  }
  render() {
    const fetching = this.props.isFetching ? 'true' : ''
    return (
    <div>
      <h1>Home</h1>
      <div>
        <BeersList />
      </div>
      <button onClick={this.loadMore} disabled={fetching}>Load More</button>
      {this.props.isFetching && <Spinner />}
    </div>
    )
  }
}

const mapStateToProps = state => ({
  nextPageNumber: state.beers.nextPage,
  isFetching: state.beers.isFetching,
})

const mapDispatchToProps = (dispatch) => ({
  loadMore: (nextPageNumber) => dispatch(beerActions.fetchBeers(nextPageNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
