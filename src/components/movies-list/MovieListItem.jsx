import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import MovieInfo from './MovieInfo'

const MovieItem = styled.li`
  border: 1px solid lightgrey;
  border-radius: 5px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  text-decoration: none;
  margin-bottom: 10px;
  background-color: white;
  color: grey;
  margin: 5px;
  max-width: 250px;
  box-shadow: 3px 3px #464643;
`

const MoviePoster = styled.img`
  max-height: 260px;
  max-width: 250px;
`

function MovieListItem (props) {
  const { movie } = props
  return (
    <MovieItem>
      <MoviePoster src={movie.Poster} alt="Movie Poster" />
      <MovieInfo title={movie.Title} year={movie.Year} />
    </MovieItem>
  )
}

MovieListItem.propTypes = {
  movie: PropTypes.object
}

export default MovieListItem
