import React from 'react'
import { styled } from '~/theme'

interface Props {
  label: string
  onClick: () => void
  selected: boolean
}

const StyledSpan = styled('span', {
  marginHorizontal: '$20',
  padding: '$5',
  borderBottomStyle: 'solid',
  borderBottomWidth: '2px',
  borderBottomColor: 'transparent',
  cursor: 'pointer',

  '&:hover': {
    borderBottomColor: '$gray',
  },

  '&[data-selected=true]': {
    borderBottomColor: '$green',
    color: '$green'
  },
})

const NavbarItem = ({ label, onClick, selected }: Props) => {
  return (
    <StyledSpan onClick={onClick} data-selected={selected}>{label}</StyledSpan>
  )
}

export default NavbarItem