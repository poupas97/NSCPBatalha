import React from 'react'
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
        <GridItem colSpan={3}>
          <Text bold type='6'>Product</Text>
        </GridItem>
        <GridItem>
          <Text bold type='6'>Quantity</Text>
        </GridItem>
        <GridItem colSpan={2}>
          <Text bold type='6'>Total</Text>
        </GridItem>
        <>
          {createArray(2).map((_, index) => (
            <>
              <GridItem key={index} >
                <Image src="/images/product-2.jpeg" />
              </GridItem>
              <GridItem key={index} colSpan={2} vertical="center">
                <Text>{`Product ${index + 1}`}</Text>
                <Text bold type='6'>{`€ ${3.1 * (index + 1)}`}</Text>
              </GridItem>
              <GridItem key={index} vertical="center">
                <Text>{`${index + 1}`}</Text>
              </GridItem>
              <GridItem key={index} vertical="center">
                <Text bold type='6'>{`€ ${3.1 * (index + 1)}`}</Text>
              </GridItem>
              <GridItem key={index} vertical="center">
                <Icon name='delete' />
              </GridItem>
            </>
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