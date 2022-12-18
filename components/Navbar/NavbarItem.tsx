import { useRouter } from 'next/router'
import React from 'react'
import { styled } from '~/theme'

const StyledSpan = styled('span', {
  padding: '$5',
  borderBottomStyle: 'solid',
  borderBottomWidth: '2px',
  borderBottomColor: 'transparent',
  cursor: 'pointer',

  '@initial': {
    marginHorizontal: '$5',
  },
  '@sm': {
    marginHorizontal: '$10',
  },
  '@md': {
    marginHorizontal: '$15',
  },
  '@lg': {
    marginHorizontal: '$20',
  },

  '&:hover': {
    borderBottomColor: '$gray',
  },

  '&[data-selected=true]': {
    borderBottomColor: '$green',
  },
})

interface Props {
  label: string
  route: string
  includes?: boolean
}

const NavbarItem = ({ label, route }: Props) => {
  const { push, asPath } = useRouter()

  return (
    <StyledSpan onClick={() => push(route)} data-selected={asPath === route || asPath.includes(route)}>{label}</StyledSpan>
  )
}

export default NavbarItem