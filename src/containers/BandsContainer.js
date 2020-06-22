import React, { Component } from 'react'
import BandInput from '../components/BandInput';
import Bands from '../components/Bands';
import { connect } from 'react-redux'

class BandsContainer extends Component {
  
  
  render() {
    return(
      <div>
        <BandInput addBand={this.props.addBand}/>
        <Bands bands={this.props.bands}/>
      </div>
    )
  }
}

<<<<<<< HEAD
const mapStateToProps = ({ bands }) => ({ bands })
=======
const mapStateToProps = state => {
  return {
    bands: state.bands
  }
}
>>>>>>> 98ce6907ed973f06ce53395bcb4502273ed42bd8

const mapDispatchToProps = dispatch => {
  return { 
    addBand: band => dispatch({ type: "ADD_BAND", band }) 
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BandsContainer)
