import { CSS } from '@stitches/react'
import React from 'react'
import { styled } from '~/theme'

export interface Props {
  children: string
  type?: '4' | '5' | '6' | '7'
  bold?: boolean
  color?: 'red'
  onClick?: () => void
  css?: CSS
}

const StyledSpan = styled('span', {
  paddingVertical: '$5',

  '&[data-type="click"]': {
    '&:hover': {
      color: 'gray',
      cursor: 'pointer',
    }
  },

  variants: {
    type: {
      '4': {
        fontSize: '12px'
      },
      '5': {
        fontSize: '15px'
      },
      '6': {
        fontSize: '18px'
      },
      '7': {
        fontSize: '21px'
      },
    },
    bold: {
      true: {
        fontWeight: 'bold'
      }
    },
    color: {
      red: {
        color: 'red'
      }
    }
  },

  defaultVariants: {
    type: '5'
  }
})

const Text = (props: Props) => {
  return (
    <StyledSpan data-type={props.onClick ? 'click' : undefined}  {...props} />
  )
}

export default Text