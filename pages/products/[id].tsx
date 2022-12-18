import { useRouter } from 'next/router'
import React, { createRef, useEffect, useState } from 'react'
import * as Yup from 'yup'
import { FormRefProps } from '~/components/Form'
import Form from '~/components/Form/Form'
import Loading from '~/components/Loading'
import ProductGridMinions from '~/components/ProductGridMinions/ProductGridMinions'
import { useCartContext } from '~/contexts/cartContext'
import useFetch from '~/hooks/useFetch'
import Box from '~/primitive/Box'
import Button from '~/primitive/Button'
import Grid, { GridItem } from '~/primitive/Grid'
import Icon from '~/primitive/Icon'
import Image from '~/primitive/Image'
import Row from '~/primitive/Row'
import Text from '~/primitive/Text'
import { styled } from '~/theme'
import { CartItem, IProduct } from '~/types'

const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL',]

const LargeScreeProductMinions = styled(GridItem, {
  '@initial': {
    display: 'none',
  },
  '@md': {
    display: 'block',
  },
})

const SmallScreeProductMinions = styled(GridItem, {
  marginVertical: '$20',

  '@initial': {
    display: 'block',
  },
  '@md': {
    display: 'none',
  },
})

const Product = () => {
  const router = useRouter()
  const ref = createRef<FormRefProps<Omit<CartItem, 'item'>>>()

  const id = router.query?.id as (string | undefined)

  const state = useFetch<IProduct>(`https://dummyjson.com/products/${id}`, [id])
  const { setItems } = useCartContext()
  const [currentImage, setCurrentImage] = useState<string>()

  useEffect(() => {
    if (!state.data) return

    setCurrentImage(state.data.images[0])
  }, [state.data])

  const addToCart = async () => {
    const result = await ref.current?.onSubmit()

    if (!state.data || !result) return;

    setItems({ item: state.data, ...result })
  }

  if (state.loading) return <Loading size='50' />

  if (!state.data) return null;

  return (
    <>
      <Row vertical='center' css={{ marginBottom: '$50' }}>
        <div onClick={router.back}>
          <Icon name='arrowLeft' />
        </div>
        <Text bold type='7' css={{ marginLeft: '$20' }}>{state.data.title}</Text>
      </Row>
      <Grid columns={{ '@initial': '1', '@md': '6', }} gapX='20'>
        <LargeScreeProductMinions>
          <ProductGridMinions images={state.data.images} setCurrentImage={setCurrentImage} />
        </LargeScreeProductMinions>

        <GridItem colSpan={{ '@initial': '1', '@md': '3', }} >
          <Box flex vertical='center'>
            <Image src={currentImage || ''} alt="current product image" respect="width" />
          </Box>

        </GridItem>

        <SmallScreeProductMinions>
          <ProductGridMinions images={state.data.images} setCurrentImage={setCurrentImage} />
        </SmallScreeProductMinions>

        <GridItem colSpan={{ '@initial': '1', '@md': '2', }} >
          <Text bold>Description</Text>
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