import React from 'react'
import { styled } from '~/theme'

const StyledImage = styled('img', {
  width: '100%'
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