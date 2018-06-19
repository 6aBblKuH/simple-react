import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Character extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    house: PropTypes.string
  }

  render() {
    const { house, name } = this.props
    return (
      <div>
        <div>Name: {name}</div>
        <div>House: {house || 'Snow'}</div>
      </div>
    )
  }
}

export default Character
