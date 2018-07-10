import React, { Component } from 'react'
import styled from 'styled-components'
import Header from './components/header/Header'
import MoviesListContainer from './components/movies-list/MoviesListContainer'

const Page = styled.div`
	max-width:960px;
	margin: 0px auto;
`

class App extends Component {
  render() {
    return (
      <Page>
        <Header />
        <MoviesListContainer />
      </Page>
    );
  }
}

export default App
