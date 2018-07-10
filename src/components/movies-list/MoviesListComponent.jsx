import React , { Component } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MovieListItem from './MovieListItem'

const MoviesList = styled.ul`
  list-style: none;
  margin: 0px;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  justify-content: center;
  padding: 10px;
`

class MoviesListComponent extends Component{

  getMovies = () => {
    let movies = this.props.movies.map(function(movie) {
      return(
        <MovieListItem key={movie.imdbID} movie={movie} />
      )
    })
    return movies
  }

  render() {
    return (
      <MoviesList>
        {this.getMovies()}
      </MoviesList>
    )
  }
}

MoviesListComponent.propTypes = {
  movies: PropTypes.array
}

export default MoviesListComponent
