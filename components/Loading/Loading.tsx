import React from 'react'
import Box from '~/primitive/Box'
import { keyframes, styled } from '~/theme'

const animation = keyframes({
  '0%': { transform: 'rotate(0deg)', },
  '100%': { transform: 'rotate(360deg)' }
})

const StyledDiv = styled('div', {
  borderRadius: '50%',
  animation: `${animation} 2s linear infinite`,
  borderColor: '$gray100',
  borderStyle: 'solid',
  borderTopColor: '$green',

  variants: {
    size: {
      '100': {
        width: '100px',
        height: '100px',
        borderWidth: '10px',
      },
      '50': {
        width: '50px',
        height: '50px',
        borderWidth: '5px',
      },
    }
  },

  defaultVariants: {
    size: '100'
  }
})


interface Props {
  size?: '100' | '50'
}

const Loading = ({ size }: Props) => {
  return (
    <Box flex vertical='center' horizontal='center'>
      <StyledDiv size={size} />
    </Box>
  )
}

export default Loading
