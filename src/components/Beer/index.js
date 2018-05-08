import React from 'react'

class Beer extends React.Component {
  constructor(props) {
    super(props)
    this.state = { showButton: false }
    this.onMouseEnter = this.onMouseEnter.bind(this)
    this.onMouseLeave = this.onMouseLeave.bind(this)
  }
  onMouseEnter () {
    this.setState({ showButton: true })
  }
  onMouseLeave () {
    this.setState({ showButton: false })
  }
  render() {
    const { beer, addToCart, inCart } = this.props
    const { showButton } = this.state
    return (
      <div onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave}>
        <span>{beer.name}</span>
        {inCart && <span>( {inCart} )</span>}
        {showButton &&
        <button onClick={() => {
          addToCart(beer)
        }}> + </button>}
      </div>
    )
  }
}

export default Beer