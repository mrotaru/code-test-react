import React from 'react';
import { connect } from 'react-redux'

import * as beerActions from '../../modules/beers/actions'
import BeersList from '../BeersList'

class Home extends React.Component{
  constructor(props) {
    super(props)
    this.loadMore = this.loadMore.bind(this)
  }
  loadMore() {
    this.props.loadMore(this.props.nextPageNumber)
  }
  render() {
    const { beers, fetching } = this.props
    return (
    <div>
      <h1>Home</h1>
      <div>
        <BeersList beers={beers} />
      </div>
      <button onClick={this.loadMore} enabled={!fetching}>Load More</button>
    </div>
    )
  }
}

const mapStateToProps = state => ({
  nextPageNumber: state.beers.nextPage,
  fetching: state.fetching,
})

const mapDispatchToProps = (dispatch) => ({
  loadMore: (nextPageNumber) => dispatch(beerActions.fetchBeers(nextPageNumber))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
