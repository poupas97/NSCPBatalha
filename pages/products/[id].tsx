import { useRouter } from 'next/router'
import React, { createRef, useEffect, useState } from 'react'
import * as Yup from 'yup'
import { FormRefProps } from '~/components/Form'
import Form from '~/components/Form/Form'
import Loading from '~/components/Loading'
import useFetch from '~/hooks/useFetch'
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

  const state = useFetch<IProduct>(`https://fakestoreapi.com/products/${id}`)

  if (state.loading) return <Loading size='50' />

  if (!state.data) return null

  const addToCart = async () => {
    const result = await ref.current?.onSubmit()

    console.log(result);
  }

  return (
    <>
      <Text bold type='7' css={{ marginVertical: '$50' }}>{state.data.title}</Text>
      <Grid columns='7' gapX='20'>
        <GridItem>
          <Grid columns='2' gapX='20' gapY='20'>
            {createArray(4).map((_, index) => (
              <GridItem key={index} >
                <Image src={state.data!.image} />
              </GridItem>
            ))}
          </Grid>
        </GridItem>
        <GridItem colSpan={4}>
          <Box flex vertical='center' >
            <Image src={state.data.image} />
          </Box>
        </GridItem>
        <GridItem colSpan={2}>
          <Text>{state.data.description}</Text>
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
          <Text bold>{`€ ${state.data.price}`}</Text>
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