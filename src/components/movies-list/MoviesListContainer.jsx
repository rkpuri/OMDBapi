import React, {Component} from 'react'
import { connect } from 'react-redux'

import MessageComponent from '../message-component/MessageComponent'
import MoviesListComponent from './MoviesListComponent'
import Loader from '../loader/Loader'
import styled from 'styled-components'

const MoviesListWrapper = styled.section`
  text-align: center;
  background: #1abc9c;
  color: white;
  margin: 75px auto 0;
  position: relative;
  @media (max-width: 550px) {
    margin: 155px auto 0;
  }
`

class MoviesListContainer extends Component {

  getContainerContent = () => {

    const { moviesList, errorMessage } = this.props
    if (moviesList.length) {
      return (
        <MoviesListComponent movies={moviesList} />
      )
    } else {
      return (
        <MessageComponent message={errorMessage} />
      )
    }
  }

  render () {
    const { isLoading } = this.props
    return (
      <MoviesListWrapper>
        {isLoading ? <Loader /> : ''}
        {this.getContainerContent()}
      </MoviesListWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return({
    moviesList: state.MoviesListReducer.moviesList,
    errorMessage: state.MoviesListReducer.errorMessage,
    isLoading: state.MoviesListReducer.isLoading
  })
}

export default connect(mapStateToProps)(MoviesListContainer)
