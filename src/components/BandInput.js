// Add BandInput component
import React, { Component } from 'react'
import { connect } from 'react-redux'

class BandInput extends Component {
<<<<<<< HEAD
  state = {
=======
  this.state = {
>>>>>>> 98ce6907ed973f06ce53395bcb4502273ed42bd8
    name: ''
  }
  
  handleChange = e => {
    this.setState({
      name: e.target.value
    })
  }
  
  handleSubmit = e => {
    e.preventDefault()
    this.props.addBand(this.state)
    
    this.setState({
      name: ''
    })
  }
  
  render() {
    return(
      <div>
        <h1>Band Input</h1>
        
        <form onSubmit={this.handleSubmit}>
    	    <label>Name</label>
          <input type="text" onChange={ this.handleChange } value={this.state.name}/>
          
<<<<<<< HEAD
          <input type="submit" />
=======
          <input type="submit" onSumbit={ this.handleSubmit }/>
>>>>>>> 98ce6907ed973f06ce53395bcb4502273ed42bd8
       </form>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  addBand: formData => dispatch({ type: 'ADD_BAND', payload: formData })
})

export default connect(null, mapDispatchToProps)(BandInput)
