import React, { Fragment } from 'react'
import Box from '~/primitive/Box'
import Button from '~/primitive/Button'
import Grid, { GridItem } from '~/primitive/Grid'
import Icon from '~/primitive/Icon'
import Image from '~/primitive/Image'
import Text from '~/primitive/Text'
import { CheckoutRoute } from '~/routes'
import { createArray } from '~/utils/array'

const Cart = () => {
  return (
    <>
      <Grid columns='6' gapX='20' gapY='20'>
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
          {createArray(2).map((_, index) => (
            <Fragment key={index}>
              <GridItem key={`image-${index}`} >
                <Image src="/images/product-2.jpeg" />
              </GridItem>
              <GridItem key={`product-${index}`} colSpan={2} vertical="center">
                <Text>{`Product ${index + 1}`}</Text>
                <Text bold type='6'>{`€ ${3.1 * (index + 1)}`}</Text>
              </GridItem>
              <GridItem key={`quantity-${index}`} vertical="center">
                <Text>{`${index + 1}`}</Text>
              </GridItem>
              <GridItem key={`price-${index}`} vertical="center">
                <Text bold type='6'>{`€ ${3.1 * (index + 1)}`}</Text>
              </GridItem>
              <GridItem key={`delete-${index}`} vertical="center">
                <Icon name='delete' />
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