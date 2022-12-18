import React, { useMemo } from 'react'
import Row from '~/primitive/Row'
import Box from '~/primitive/Box'
import { CartRoute, ProductsRoute, RootRoute, } from '~/routes'
import NavbarItem from './NavbarItem'
import Text from '~/primitive/Text'
import Icon from '~/primitive/Icon'
import Image from '~/primitive/Image'
import { styled } from '~/theme'
import { useRouter } from 'next/router'
import { useCartContext } from '~/contexts/cartContext'

const Root = styled(Row, {
  boxShadow: 'grey 0px 10px 15px -5px',
  paddingVertical: '$10',
  paddingHorizontal: '5%',

  '@sm': {
    paddingHorizontal: '10%',
  },
  '@md': {
    paddingHorizontal: '15%',
  },
  '@lg': {
    paddingHorizontal: '20%',
  },
})

const Navbar = () => {
  const { push, } = useRouter()
  const { items } = useCartContext()

  const cartValue = useMemo(() => {
    return items.reduce((acc, current) => ({
      qtt: acc.qtt + current.quantity,
      amount: acc.amount + (current.item.price * current.quantity),
    }),
      { qtt: 0, amount: 0 })
  }, [items])

  return (
    <Root vertical='center' >
      <Box css={{ width: '75px', height: '75px' }} onClick={() => push(RootRoute)}>
        <Image src='images/logo.png' alt="logo" respect="heigh" />
      </Box>
      <Row horizontal='center' css={{ flex: 1, }}>
        <NavbarItem label='Products' route={ProductsRoute} />
        <NavbarItem label='Cart' route={CartRoute} />
      </Row>
      <Row vertical='center'>
        <Icon name='cart' />
        <Text css={{ marginLeft: '$10' }}>{`(${cartValue.qtt}) € ${cartValue.amount}`}</Text>
      </Row>
    </Root>
  )
}

export default Navbar