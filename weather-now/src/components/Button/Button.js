import React from 'react'

const Button = ({children, event}) => (
    <button className='button' onClick={() => event()}>{children}</button>
)

export default Button
