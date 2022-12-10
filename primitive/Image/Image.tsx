import React from 'react'
import { styled } from '~/theme'

const StyledImage = styled('img', {
  display: 'block',
  width: '100%',
  maxHeight: '350px',
  maxWidth: '350px',
})

interface Props {
  src: string
}

const Image = ({ src }: Props) => {
  return (
    <StyledImage src={src} alt={src} />
  )
}

export default Image