import { useRouter } from 'next/router'
import React, { createRef, useEffect, useState } from 'react'
import * as Yup from 'yup'
import { FormRefProps } from '~/components/Form'
import Form from '~/components/Form/Form'
import Box from '~/primitive/Box'
import Button from '~/primitive/Button'
import Grid, { GridItem } from '~/primitive/Grid'
import Image from '~/primitive/Image'
import Text from '~/primitive/Text'
import { IProduct } from '~/types/product'
import { createArray } from '~/utils/array'

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL',]

const Product = () => {
  const router = useRouter()
  const ref = createRef<FormRefProps<{}>>()

  const { id } = router.query

  const [product, setProduct] = useState<IProduct>()

  useEffect(() => {
    if (!id) return;

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
  }, [id])

  if (!product) return null

  const addToCart = async () => {
    const result = await ref.current?.onSubmit()

    console.log(result);
  }

  return (
    <>
      <Text bold type='7' css={{ marginVertical: '$50' }}>{product.title}</Text>
      <Grid columns='7' gapX='20'>
        <GridItem>
          <Grid columns='2' gapX='20' gapY='20'>
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
          <Form
            ref={ref}
            validationSchema={getValidationSchema()}
            items={[{
              type: 'dropdown',
              field: 'size',
              label: 'Sizes',
              options: SIZES.map((it) => ({ label: it, value: it })),
            },
            {
              type: 'number',
              field: 'quantity',
              label: 'Quantity',
              min: 1,
            }]}
          />
          <Text bold>{`€ ${product.price}`}</Text>
          <Button text='+ Add to cart' onClick={addToCart} />
        </GridItem>
      </Grid>
    </>
  )
}

export default Product

function getValidationSchema() {
  return Yup.object().shape({
    size: Yup.string().required('Required'),
    quantity: Yup.number().min(1, 'Minimum is 1').required('Required'),
  });
}