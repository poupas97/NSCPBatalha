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
  alt: string
  className?: string
}

const Image = ({ src, alt, className }: Props) => {
  return (
    <StyledImage src={src} alt={alt} className={className} />
  )
}

export default Image