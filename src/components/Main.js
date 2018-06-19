import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/main'
import Characters from './Characters'
import Spiner from 'react-loader-spinner'

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(actions.getCharacters())
  }

  render() {
    const { characters } = this.props

    if (!characters) {
      return <Spiner />
    }
    return (
      <div>
        { <Characters characters={ characters } />}
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    characters: state.main.characters
  }
}

export default connect(mapStateToProps)(Main)
