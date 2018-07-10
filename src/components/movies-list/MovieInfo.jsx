import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const MovieTitle = styled.div`
  color: black;
  font-size: 15px;
`

function MovieItemInfo (props) {
  const { title, year } = props
  return (
    <MovieTitle>
      <p>{title}</p>
      <p>{year}</p>
    </MovieTitle>
  )
}

MovieItemInfo.propTypes = {
  title: PropTypes.string,
  year: PropTypes.string
}

export default MovieItemInfo
