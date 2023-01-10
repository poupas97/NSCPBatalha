import React, { Fragment } from 'react'
import Modal from '~/components/Modal'
import { useCartContext } from '~/contexts/cartContext'
import Box from '~/primitive/Box'
import Button from '~/primitive/Button'
import Grid, { GridItem } from '~/primitive/Grid'
import Icon from '~/primitive/Icon'
import Image from '~/primitive/Image'
import Row from '~/primitive/Row'
import Text from '~/primitive/Text'
import { CheckoutRoute } from '~/routes'

const Cart = () => {
  const { items } = useCartContext()

  return (
    <>
      <Grid columns={6} gapX={20} gapY={20}>
        <GridItem key="product" colSpan={3}>
          <Text bold type='6'>Product</Text>
        </GridItem>
        <GridItem key="quantity">
          <Text bold type='6'>Quantity</Text>
        </GridItem>
        <GridItem key="total" colSpan={2}>
          <Text bold type='6'>Total</Text>
        </GridItem>
        <>
          {items.map((it, index) => (
            <Fragment key={index}>
              <GridItem key={`image-${index}`} >
                <Image src={it.item.images[0]} alt="product image" />
              </GridItem>
              <GridItem key={`product-${index}`} colSpan={2} vertical="center">
                <Text>{it.item.title}</Text>
                <Row>
                  <Text type='6'>{it.size}</Text>
                  &nbsp;<Text>|</Text>&nbsp;
                  <Text type='6'>{`€ ${it.item.price}`}</Text>
                </Row>
              </GridItem>
              <GridItem key={`quantity-${index}`} vertical="center">
                <Text>{it.quantity}</Text>
              </GridItem>
              <GridItem key={`price-${index}`} vertical="center">
                <Text type='6'>{`€ ${it.item.price * it.quantity}`}</Text>
              </GridItem>
              <GridItem key={`delete-${index}`} vertical="center">
                <Row vertical='center' horizontal='center' css={{ cursor: 'pointer' }}>
                  <Modal
                    trigger={<Icon name='edit' size={15} />}
                    title='Edit product'
                  >
                    <Text>sssss</Text>
                  </Modal>
                  <Icon name='delete' />
                </Row>
              </GridItem>
            </Fragment>
          ))}
        </>
      </Grid>
      <Box flex vertical='bottom'>
        <Button text='Go to checkout' navigate={CheckoutRoute} css={{ marginTop: '$20' }} />
      </Box>
    </>
  )
}

export default Cart
