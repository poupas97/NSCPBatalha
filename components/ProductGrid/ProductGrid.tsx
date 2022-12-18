import { useRouter } from 'next/router'
import React, { useMemo } from 'react'
import Box from '~/primitive/Box'
import Grid, { GridItem, } from '~/primitive/Grid'
import Image from '~/primitive/Image'
import Text from '~/primitive/Text'
import { ProductRoute } from '~/routes'
import { styled } from '~/theme'
import { IProduct } from '~/types'

const Container = styled(Box, {
  borderBottom: '1px solid $green',
  height: '300px',

  '&:hover': {
    boxShadow: 'green 5px 5px 5px',
  },
})

interface Props {
  products: IProduct[]
  pageInfo: {
    page: number,
    size: number
  }
  columns?: '3' | '4'
}

const ProductGrid = ({ products, pageInfo, columns }: Props) => {
  const router = useRouter()

  const onClick = (id: IProduct['id']) => () => {
    router.push(ProductRoute(id))
  }

  const slicedProducts = useMemo(() => {
    return products.slice(
      pageInfo.page * pageInfo.size,
      pageInfo.page * pageInfo.size + pageInfo.size
    )
  }, [products, pageInfo])

  return (
    <Grid columns={{ '@initial': '1', '@md': '2', '@lg': '3' }} gapX='20' gapY='20'>
      {slicedProducts.map((item, index) => (
        <GridItem key={index} >
          <Container flex css={{ flex: 1 }} onClick={onClick(item.id)}>
            <Box flex horizontal='center' css={{ flex: 1, }}>
              <Image src={item.images[0]} alt="product image" respect="auto" />
            </Box>
            <Text>{item.title}</Text>
            <Text bold>{`€ ${item.price}`}</Text>
          </Container>
        </GridItem>
      ))}
    </Grid>
  )
}

export default ProductGrid