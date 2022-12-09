import { CSS } from '@stitches/react'
import { useRouter } from 'next/router'
import React from 'react'
import { styled } from '~/theme'
import Icon, { IconProps } from "~/primitive/Icon";

interface Props {
  text: string | number
  navigate?: string
  onClick?: () => void
  icon?: IconProps['name']
  css?: CSS
}

const StyledButton = styled('button', {
  backgroundColor: 'black',
  border: '1px solid black',
  padding: '$10',
  borderRadius: '3px',
  color: 'white',
  width: '100%',

  '&:hover': {
    cursor: 'pointer'
  },

  '&:active': {
    backgroundColor: '$green100'
  },
})

const Button = ({ text, navigate, onClick, icon, css }: Props) => {
  const router = useRouter()

  const handleClick = () => {
    if (navigate) router.push(navigate)
    else onClick?.()
  }

  return (
    <StyledButton
      onClick={handleClick}
      css={css}
    >
      {icon && <Icon name={icon} />}
      {text}
    </StyledButton>
  )
}

export default Button