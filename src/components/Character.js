import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as actions from '../actions/main'

class Character extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    house: PropTypes.string
  }

  killCharacter = () => {
    this.props.dispatch(actions.killCharacter(this.props.id))
  }

  render() {
    const { house, name } = this.props
    return (
      <div>
        <hr />
        <div>Name: {name}</div>
        <div>House: {house || 'Snow'}</div>
        <div><button className='btn btn-danger btn-lg' onClick={this.killCharacter}>Kill</button></div>
        <hr />
      </div>
    )
  }
}

export default connect()(Character)
