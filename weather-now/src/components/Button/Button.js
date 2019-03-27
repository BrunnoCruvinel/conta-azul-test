import React from 'react'
import PropTypes from 'prop-types'

const Button = ({children, event}) => (
    <button className='button' onClick={() => event()}>{children}</button>
)

Button.propTypes = {
    event: PropTypes.func,
    children: PropTypes.string
}

export default Button
