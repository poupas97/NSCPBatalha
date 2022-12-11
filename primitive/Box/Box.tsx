import { CSS } from '@stitches/react'
import { HTMLProps } from 'react'
import { styled } from '~/theme'

const StyledBox = styled('div', {
  '&[data-type="click"]': {
    '&:hover': {
      cursor: 'pointer',
    }
  },

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
    },
    direction: {
      column: {
        flexDirection: 'column'
      },
      row: {
        flexDirection: 'row'
      }
    }
  },

  defaultVariants: {
    direction: 'column'
  }
})

export interface Props {
  children: HTMLProps<HTMLDivElement>['children']
  flex?: boolean
  vertical?: 'top' | 'center' | 'bottom'
  horizontal?: 'start' | 'center' | 'end'
  direction?: 'column' | 'row'
  onClick?: () => void
  css?: CSS
}


const Box = (props: Props) => {
  return <StyledBox data-type={props.onClick ? 'click' : undefined}{...props} />
}

export default Box