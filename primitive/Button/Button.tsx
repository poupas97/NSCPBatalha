import { CSS } from '@stitches/react'
import { useRouter } from 'next/router'
import React from 'react'
import { styled } from '~/theme'

interface Props {
  text: string | number
  navigate?: string
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

const Button = ({ text, navigate, css }: Props) => {
  const router = useRouter()

  const onClick = () => {
    if (navigate) router.push(navigate)
  }

  return (
    <StyledButton onClick={onClick} css={css}>{text}</StyledButton>
  )
}

export default Button