import React, {Component} from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'

import { MINIMUM_SEARCH_INPUT_LENGTH, SEARCH_WARNING_MESSAGE } from '../../constants'
import { fetchMoviesList } from '../../redux/movies-list-service/actions'


const SearchBarContainer = styled.div`
	display: flex;
	@media (max-width: 550px) {
    display: block;
    margin-top: 10px;
  }
`
const SearchInput = styled.input `
  min-width: 200px;
  height: 34px;
  padding: 6px 0 6px 0;
  margin-right: 10px;
  font-size: 14px;
  color: #555;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  flex-grow: 1;
  @media (max-width: 550px) {
    width: 100%;
    margin-right: 0;
  }
`

const SearchButton = styled.button `
  min-width: 100px;
  height: 48px;
  font-size: 14px;
  color: #fff;
  cursor: pointer;
  background-color: #23695b;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
  [disabled=true] {
    background-color:lightgrey;
  }
  @media (max-width: 550px) {
  	width: 100%;
    margin-top: 10px;
	}
`

class SearchBar extends Component {
	
	constructor(props){
    super(props);

   	this.state = {
      searchedVal: '',
      showError: false
   	}
  }

	handleSearch = (event) => {
    if (event.which === 13) {
      this.handleSubmit()
    } else {
      this.setState({ searchedVal: event.target.value })
    }
	}

	handleSubmit = () => {
		if (this.state.searchedVal.length < MINIMUM_SEARCH_INPUT_LENGTH) {
			this.setState({ showError: true })
		} else if (!this.props.isLoading) {
			this.setState({ showError: false })
			this.props.fetchMoviesList(this.state.searchedVal)
		}
	}

  render () {
	  const WarningMessage = styled.span `
	    font-size: 14px;
	    color: yellow;
	    margin-top: 5px;
	    display: ${this.state.showError? 'block' : 'none'};
		`
    return (
      <SearchBarContainer>
      	<div>
        	<SearchInput name="s" placeholder="Search Movie Title" onKeyUp={this.handleSearch} />
        	<WarningMessage>{SEARCH_WARNING_MESSAGE}</WarningMessage>
        </div>
        <SearchButton disabled={this.props.isLoading} onClick={this.handleSubmit}>Search</SearchButton>
      </SearchBarContainer>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
	return({
		fetchMoviesList: (name) => dispatch(fetchMoviesList(name))
	})
}

const mapStateToProps = (state) => {
  return({
    isLoading: state.MoviesListReducer.isLoading
  })
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar)
