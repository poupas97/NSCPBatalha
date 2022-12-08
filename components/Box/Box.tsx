import { CSS } from '@stitches/react'
import { styled } from '~/theme'

const StyledBox = styled('div', {
  variants: {
    flex: {
      true: {
        display: 'flex',
      }
    },
    vertical: {
      top: {
        alignItems: 'flex-start'
      },
      center: {
        alignItems: 'center'
      },
      bottom: {
        alignItems: 'flex-end'
      }
    },
    horizontal: {
      start: {
        justifyContent: 'flex-start'
      },
      center: {
        justifyContent: 'center'
      },
      end: {
        justifyContent: 'flex-end'
      }
    }
  }
})

export interface Props {
  children: string | JSX.Element | JSX.Element[]
  flex?: boolean
  vertical?: 'top' | 'center' | 'bottom'
  horizontal?: 'start' | 'center' | 'end'
  css?: CSS
}


const Box = (props: Props) => {
  return <StyledBox {...props} />
}

export default Box