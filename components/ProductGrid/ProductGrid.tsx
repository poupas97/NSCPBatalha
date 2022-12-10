import { useRouter } from 'next/router'
import React from 'react'
import Box from '~/primitive/Box'
import Button from '~/primitive/Button'
import Grid, { GridItem } from '~/primitive/Grid'
import Image from '~/primitive/Image'
import Text from '~/primitive/Text'
import { ProductRoute } from '~/routes'
import { styled } from '~/theme'
import { IProduct } from '~/types/product'

const Container = styled(Box, {
  '&:hover': {
    boxShadow: 'green 5px 5px 5px',
  },
})

const ProductGrid = ({ products }: { products: IProduct[] | undefined }) => {
  const router = useRouter()

  if (!products) return null

  const onClick = (id: IProduct['id']) => () => {
    router.push(ProductRoute(id))
  }

  return (
    <Grid columns={4} gapX={20} gapY={20}>
      {products.map((item, index) => (
        <GridItem key={index} >
          <Container flex css={{ flex: 1, }} onClick={onClick(item.id)}>
            <Box flex horizontal='center' css={{ flex: 1, }}>
              <Image src={item.image} />
            </Box>
            <Text>{item.title}</Text>
            <Text bold>{`€ ${item.price}`}</Text>
            <Button text='+ Add to cart' />
          </Container>
        </GridItem>
      ))}
    </Grid>
  )
}

export default ProductGrid