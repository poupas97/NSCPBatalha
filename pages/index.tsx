import { useState } from 'react'
import Loading from '~/components/Loading'
import ProductGrid from '~/components/ProductGrid'
import Slider from '~/components/Slider'
import useFetch from '~/hooks/useFetch'
import Grid, { GridItem } from '~/primitive/Grid'
import Text from '~/primitive/Text'
import { styled } from '~/theme'
import { IProduct } from '~/types'

const Filter = styled(Text, {
  variants: {
    active: {
      true: {
        color: 'black',
      },
      false: {
        color: 'gray',
      }
    }
  }
})

const Home = () => {
  const state = useFetch<{ products: IProduct[] }>('https://dummyjson.com/products')
  const [filter, setFilter] = useState(1)

  return (
    <>
      <Slider />

      <Grid columns='3' css={{ marginVertical: '$20' }}>
        <GridItem horizontal='center'>
          <Filter type='7' bold onClick={() => setFilter(1)} active={filter === 1}>Best Sellers</Filter>
        </GridItem>
        <GridItem horizontal='center'>
          <Filter type='7' bold onClick={() => setFilter(2)} active={filter === 2} >New Arrivals</Filter>
        </GridItem>
        <GridItem horizontal='center'>
          <Filter type='7' bold onClick={() => setFilter(3)} active={filter === 3}>Hot Sales</Filter>
        </GridItem>
      </Grid>

      {state.loading ? (
        <Loading size='50' />
      ) : (
        <ProductGrid
          columns='4'
          products={state.data?.products.slice(1 * filter, 6 * filter) || []}
          pageInfo={{ page: 0, size: 1000 }}
        />
      )}
    </>
  )
}

export default Home