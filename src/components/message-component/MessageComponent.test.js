
import React from 'react'
import { mount } from 'enzyme'

import MessageComponent from './MessageComponent'

describe('MessageComponent ', () => {
	let wrapper

	beforeEach(() => {
		wrapper = mount(<MessageComponent message="Welcome" />)
	})

	it('render MessageComponent component ', () => {
		expect(wrapper).toHaveLength(1)
	})

	it('Should render single div element ', () => {
		expect(wrapper.find('div').length).toBe(1)
	})
})