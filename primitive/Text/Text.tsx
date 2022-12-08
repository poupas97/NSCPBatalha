import { CSS } from '@stitches/react'
import React from 'react'
import { styled } from '~/theme'

interface Props {
  children: string
  type?: '4' | '5'
  bold?: boolean
  css?: CSS
}

const StyledSpan = styled('span', {
  paddingVertical: '$5',

  variants: {
    type: {
      '4': {
        fontSize: '12px'
      },
      '5': {
        fontSize: '15px'
      },
    },
    bold: {
      true: {
        fontWeight: 'bold'
      }
    }
  },

  defaultVariants: {
    type: '5'
  }
})

const Text = (props: Props) => {
  return (
    <StyledSpan {...props} />
  )
}

export default Text