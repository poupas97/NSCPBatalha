import React from 'react'
import { useRouter } from 'next/router'
import Row from '~/primitive/Row'
import Box from '~/primitive/Box'
import { CartRoute, ProductsRoute, RootRoute, } from '~/routes'
import NavbarItem from './NavbarItem'
import Text from '~/primitive/Text'
import Icon from '~/primitive/Icon'
import Image from '~/primitive/Image'

const Navbar = () => {
  const { push, asPath } = useRouter()

  return (
    <Box css={{ boxShadow: 'grey 0px 0px 15px -5px' }}>
      <Row vertical='center' css={{ padding: '0 20%', paddingVertical: '$10', backgroundColor: 'black', color: 'white', justifyContent: 'space-between' }}>
        <Text>sfshdk jfhkjdsh jksdf kdsfkj dsflksdlkajçfj ajiowe</Text>
        <Row vertical='center' onClick={() => { }} >
          <Icon name='user' />
          <Text css={{ marginLeft: '$10' }}>Sign in</Text>
        </Row>
      </Row>
      <Row vertical='center' css={{ padding: '0 20%', paddingVertical: '$10', }} >
        <Box css={{ maxWidth: '75px', maxHeight: '75px' }}>
          <Image src='images/logo.png' />
        </Box>
        <Row horizontal='center' css={{ flex: 1, }}>
          <NavbarItem label='Home' selected={asPath === RootRoute} onClick={() => push(RootRoute)} />
          <NavbarItem label='Products' selected={asPath === ProductsRoute} onClick={() => push(ProductsRoute)} />
          <NavbarItem label='Cart' selected={asPath === CartRoute} onClick={() => push(CartRoute)} />
        </Row>
        <Row vertical='center'>
          <Icon name='cart' />
          <Text css={{ marginLeft: '$10' }}>(1) € 0.2</Text>
        </Row>
      </Row>
    </Box>
  )
}

export default Navbar