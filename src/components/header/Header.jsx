import React from 'react'
import SearchBar from '../search-bar/SearchBar'

import styled from 'styled-components'

const HeaderContainer = styled.header`
  background-color: #22947d;
  height: auto;
  border: 1px solid lightgrey;
  display: flex;
  padding: 10px;
  position: fixed;
  top: 0;
  left:0;
  right: 0;
  width: 940px;
  left: 50%;
  margin-left: -481px;
  z-index: 100;
  @media (max-width: 550px) {
    display: block;
  }
  @media (max-width: 960px) {
    left: 0;
    margin: 0;
    width: auto;
  }
`

const HeaderTitle = styled.span`
  flex-grow: 1;
  color: white;
  font-size: 25px;
  font-weight: bold;
  padding-top: 8px;
`

function Header () {
  return (
    <HeaderContainer>
      <HeaderTitle>BananaMDB</HeaderTitle>
      <SearchBar />
    </HeaderContainer>
  )
}

export default Header
