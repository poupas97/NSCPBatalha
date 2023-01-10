import React, { useEffect, useState } from 'react'
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
        display: 'flex',
        alignItems: 'center',
      },
    }
  }
})

const StyledContent = styled('div', {
  position: 'fixed',
  backgroundColor: 'white',
  padding: '$20',
  width: '60%',
  left: '50%',
  transform: 'translate(-50%, 0%)',
  overflowY: 'auto',
})

type Props = {
  children: JSX.Element
  title: string
} & ({
  trigger: JSX.Element
  isOpen?: never
  onChange?: never
} | {
  trigger?: never
  isOpen: boolean
  onChange: (_: boolean) => void
})

const MyModal = ({ children, trigger, title, isOpen, onChange }: Props) => {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (isOpen === undefined) return

    setOpen(isOpen)
  }, [isOpen])

  const handleChange = () => {
    onChange?.(false)
    setOpen(false)
  }

  return (
    <>
      <div onClick={() => setOpen(true)}>
        {trigger}
      </div>
      <StyledDiv open={open} onClick={handleChange}>
        <StyledContent>
          <div style={{ position: 'absolute', left: '96%', cursor: 'pointer' }}>
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

export default MyModal
