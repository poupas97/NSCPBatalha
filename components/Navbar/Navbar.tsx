import React from 'react'
import { useRouter } from 'next/router'
import Row from '~/primitive/Row'
import Box from '~/primitive/Box'
import { RootRoute, ShopRoute } from '~/routes'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  const { push, asPath } = useRouter()

  return (
    <Row vertical='center' css={{ margin: '0 20%', paddingVertical: '$10', }}>
      <Box horizontal='start' css={{ flex: 1, }}>Logo</Box>
      <Row horizontal='center' css={{ flex: 2, }}>
        <NavbarItem label='Home' selected={asPath === RootRoute} onClick={() => push(RootRoute)} />
        <NavbarItem label='Shop' selected={asPath === ShopRoute} onClick={() => push(ShopRoute)} />
        <NavbarItem label='Pages' selected={false} onClick={() => { }} />
        <NavbarItem label='Blog' selected={false} onClick={() => { }} />
        <NavbarItem label='Contacts' selected={false} onClick={() => { }} />
      </Row>
      <Box horizontal='end' css={{ flex: 1, }}>Options</Box>
    </Row>
  )
}


export default Navbar