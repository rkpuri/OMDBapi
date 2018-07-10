import React from 'react'

import styled from 'styled-components'


const LoaderContainer = styled.div`
  position: absolute;
  height: 450px;
  width: 100%;
  background-color: transparent;
  color: black;
`

function Loader () {
  return (
    <LoaderContainer>
      <span> Loading... </span>
    </LoaderContainer>
  )
}

export default Loader
