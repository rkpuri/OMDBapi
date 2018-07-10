import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const MessageWrapper = styled.div`
  padding: 60px;
  font-size: 25px;
`

function MessageComponent (props) {
  return( <MessageWrapper>{props.message}</MessageWrapper> )
}

MessageComponent.propTypes = {
  message: PropTypes.string
}

MessageComponent.defaultProps = {
  message: 'Welcome to BananaMDB Movies Search Engine!!!'
}

export default MessageComponent
