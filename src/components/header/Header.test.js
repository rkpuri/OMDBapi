
import React from 'react'
import { shallow } from 'enzyme'

import Header from './Header'
import SearchBar from '../search-bar/SearchBar'

describe('Header ', () => {
	let wrapper

	beforeEach(() => {
		wrapper = shallow(<Header />)
	})

	it('render Header component ', () => {
		expect(wrapper).toHaveLength(1)
	})

	it('Should render SearchBar component ', () => {
		expect(wrapper.find(SearchBar).length).toBe(1)
	})
})