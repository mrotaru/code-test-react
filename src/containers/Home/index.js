import React from 'react';
import { connect } from 'react-redux'

import * as beerActions from '../../modules/beers/actions'
import BeersList from '../../components/BeersList'

class Home extends React.Component{
  constructor(props) {
    super(props)
    this.loadMore = this.loadMore.bind(this)
  }
  loadMore() {
    this.props.loadMore()
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
  beers: state.beers,
  fetching: state.fetching,
})

const mapDispatchToProps = (dispatch) => ({
  loadMore: () => dispatch(beerActions.fetchBeers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
