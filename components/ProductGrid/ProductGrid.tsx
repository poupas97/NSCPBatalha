import { useRouter } from 'next/router'
import React from 'react'
import Box from '~/primitive/Box'
import Button from '~/primitive/Button'
import Grid, { GridItem } from '~/primitive/Grid'
import Image from '~/primitive/Image'
import Text from '~/primitive/Text'
import { ProductRoute } from '~/routes'
import { IProduct } from '~/types/product'

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
          <Box flex css={{ flex: 1, }} onClick={onClick(item.id)}>
            <Box flex horizontal='center' css={{ flex: 1, }}>
              <Image src={item.image} />
            </Box>
            <Text>{item.title}</Text>
            <Text bold>{`€ ${item.price}`}</Text>
            <Button text='+ Add to cart' />
          </Box>
        </GridItem>
      ))}
    </Grid>
  )
}

export default ProductGrid