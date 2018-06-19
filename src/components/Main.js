import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/main'
import Characters from './Characters'
import Spiner from 'react-loader-spinner'

class Main extends Component {
  componentDidMount() {
    this.props.dispatch(actions.getCharacters())
  }

  filterCharacters = (e) => {
    this.props.dispatch(actions.filterCharacters(e.target.value))
  }

  render() {
    const { characters } = this.props

    if (!characters) {
      return <Spiner />
    }
    return (
      <div className='col-12'>
        <div className='row'>
          <div className='col-8'>
            { <Characters characters={ characters } />}
          </div>
          <div className='form-group col-4 mt-20'>
            <input placeholder='Start typing name...' onChange={this.filterCharacters} className='form-control' />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    characters: state.main.filtered_characters
  }
}

export default connect(mapStateToProps)(Main)
