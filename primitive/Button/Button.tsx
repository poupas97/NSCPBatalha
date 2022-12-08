import { CSS } from '@stitches/react'
import React from 'react'
import { styled } from '~/theme'

interface Props {
  text: string | number
  css?: CSS
}

const StyledButton = styled('button', {
  backgroundColor: 'transparent',
  border: '1px solid black',
  padding: '$5',
  borderRadius: '3px',
  color: 'black',

  '&:hover': {
    cursor: 'pointer'
  },

  '&:active': {
    backgroundColor: '$green100'
  }
})

const Button = ({ text, ...rest }: Props) => {
  return (
    <StyledButton {...rest} >{text}</StyledButton>
  )
}

export default Button