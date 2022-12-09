import React from 'react'
import { useRouter } from 'next/router'
import Row from '~/primitive/Row'
import Box from '~/primitive/Box'
import { CartRoute, ProductsRoute, RootRoute, } from '~/routes'
import NavbarItem from './NavbarItem'
import Text from '~/primitive/Text'
import Icon from '~/primitive/Icon'

const Navbar = () => {
  const { push, asPath } = useRouter()

  return (
    <Box >
      <Row vertical='center' css={{ padding: '0 20%', paddingVertical: '$10', backgroundColor: 'black', color: 'white', justifyContent: 'space-between' }}>
        <Text>sfshdk jfhkjdsh jksdf kdsfkj dsflksdlkajçfj ajiowe</Text>
        <Text>Sign in</Text>
      </Row>
      <Row vertical='center' css={{ padding: '0 20%', paddingVertical: '$10', }} >
        <Box>Logo</Box>
        <Row horizontal='center' css={{ flex: 1, }}>
          <NavbarItem label='Home' selected={asPath === RootRoute} onClick={() => push(RootRoute)} />
          <NavbarItem label='Products' selected={asPath === ProductsRoute} onClick={() => push(ProductsRoute)} />
          <NavbarItem label='Cart' selected={asPath === CartRoute} onClick={() => push(CartRoute)} />
          <NavbarItem label='Blog' selected={false} onClick={() => { }} />
          <NavbarItem label='Contacts' selected={false} onClick={() => { }} />
        </Row>
        <Row vertical='center'>
          <Icon name='cart' />
          <Text>(1) € 0.2</Text>
        </Row>
      </Row>
    </Box>
  )
}

export default Navbar