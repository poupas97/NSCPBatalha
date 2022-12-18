import React from 'react'
import { styled } from '~/theme'

const StyledImage = styled('img', {
  display: 'block',

  variants: {
    respect: {
      heigh: {
        width: 'auto',
        height: '100%',
      },
      width: {
        width: '100%',
        height: 'auto',
      },
      auto: {
        width: 'auto',
        height: 'auto',
      }
    },
  }
})

interface Props {
  src: string
  alt: string
  respect?: 'heigh' | 'width' | 'auto'
}

const Image = ({ src, alt, respect }: Props) => {
  return (
    <StyledImage src={src} alt={alt} respect={respect} />
  )
}

export default Image