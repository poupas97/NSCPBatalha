import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Box from '~/primitive/Box'
import Button from '~/primitive/Button'
import Grid, { GridItem } from '~/primitive/Grid'
import Image from '~/primitive/Image'
import Text from '~/primitive/Text'
import { IProduct } from '~/types/product'
import { createArray } from '~/utils/array'

const Product = () => {
  const router = useRouter()

  const { id } = router.query

  const [product, setProduct] = useState<IProduct>()

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
  }, [id])

  if (!product) return null

  return (
    <>
      <Text bold type='7' css={{ marginVertical: '$50' }}>{product.title}</Text>
      <Grid columns={7} gapX={20}>
        <GridItem>
          <Grid columns={2} gapX={20} gapY={20}>
            {createArray(4).map((_, index) => (
              <GridItem key={index} >
                <Image src={product.image} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
        <GridItem colSpan={4}>
          <Box flex vertical='center' >
            <Image src={product.image} />
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Text>{product.description}</Text>
          <Text bold>{`€ ${product.price}`}</Text>
          <Button text='+ Add to cart' />
        </GridItem>
      </Grid>
    </>
  )
}

export default Product