import React, { useState } from 'react'
import Box from '~/primitive/Box'
import Icon from '~/primitive/Icon'
import Text from '~/primitive/Text'
import { styled } from '~/theme'

const StyledDiv = styled('div', {
  position: 'fixed',
  zIndex: '1',
  top: '50%',
  transform: 'translate(0, -50%)',
  left: '0',
  bottom: '0',
  right: '0',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',

  variants: {
    open: {
      false: {
        display: 'none',
      },
      true: {
        display: 'block',
      },
    }
  }
})

const StyledContent = styled('div', {
  position: 'fixed',
  backgroundColor: 'white',
  padding: '$20',
  width: '60%',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, 0%)',
})

interface Props {
  children: JSX.Element
  trigger: JSX.Element
  title: string
}

const Modal = ({ children, trigger, title }: Props) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div onClick={() => setOpen(true)}>
        {trigger}
      </div>
      <StyledDiv open={open} onClick={() => setOpen(false)}>
        <StyledContent>
          <div style={{ position: 'absolute', left: '96%' }}>
            <Icon name='delete' />
          </div>
          <Text type='7'>{title}</Text>
          <Box>
            {children}
          </Box>
        </StyledContent>
      </StyledDiv>
    </>
  )
}

export default Modal