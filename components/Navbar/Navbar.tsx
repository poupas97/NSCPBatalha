import React from 'react'
import NavbarItem from './NavbarItem'
import Row from '~/components/Row'
import Box from '~/components/Box'

const Navbar = () => {
  return (
    <Row vertical='center' css={{ margin: '0 20%', paddingVertical: '$10', }}>
      <Box flex horizontal='start' css={{ flex: 1, }}>Logo</Box>
      <Box flex horizontal='center' css={{ flex: 2, }}>
        <NavbarItem label='Home' selected onClick={() => { }} />
        <NavbarItem label='Shop' selected={false} onClick={() => { }} />
        <NavbarItem label='Pages' selected={false} onClick={() => { }} />
        <NavbarItem label='Blog' selected={false} onClick={() => { }} />
        <NavbarItem label='Contacts' selected={false} onClick={() => { }} />
      </Box>
      <Box flex horizontal='end' css={{ flex: 1, }}>Options</Box>
    </Row>
  )
}


export default Navbar