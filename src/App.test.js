
import React from 'react'
import { mount, shallow } from 'enzyme'

import App from './App'
import Header from './components/header/Header'
import MoviesListContainer from './components/movies-list/MoviesListContainer'

describe('App ', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallow(<App />)
	})

	it('render App component ', () => {
		expect(wrapper).toHaveLength(1)
	})

	it('Should render Header component ', () => {
		expect(wrapper.find(Header).length).toBe(1)
	})

	it('Should render MoviesListContainer component ', () => {
		expect(wrapper.find(MoviesListContainer).length).toBe(1)
	})
})