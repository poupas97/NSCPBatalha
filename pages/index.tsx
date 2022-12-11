import { useEffect, useState } from 'react'
import Loading from '~/components/Loading'
import ProductGrid from '~/components/ProductGrid'
import useFetch from '~/hooks/useFetch'
import Box from '~/primitive/Box'
import Image from '~/primitive/Image'
import Row from '~/primitive/Row'
import Text from '~/primitive/Text'
import { IProduct } from '~/types/product'

const Home = () => {
  const [carrousel, setCarrousel] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCarrousel(current => {
        const next = current + 1

        return next === 2 ? 0 : next
      })
    }, 2000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  const state = useFetch<IProduct[]>('https://fakestoreapi.com/products')

  return (
    <>
      <Box flex css={{ backgroundColor: 'green', paddingVertical: '$20' }}>
        <Box css={{ width: '30%' }}>
          <Image src={`images/product-${carrousel + 1}.jpeg`} />
        </Box>
      </Box>

      <Row horizontal='center' css={{ marginVertical: '$20' }}>
        <Text type='7' bold onClick={() => { }} css={{ marginRight: '$50', color: true ? 'black' : 'gray' }}>Best Sellers</Text>
        <Text type='7' bold onClick={() => { }} css={{ marginRight: '$50', color: false ? 'black' : 'gray' }}>New Arrivals</Text>
        <Text type='7' bold onClick={() => { }} css={{ marginRight: '$50', color: false ? 'black' : 'gray' }}>Hot Sales</Text>
      </Row>

      {state.loading ? <Loading size='50' /> :
        <ProductGrid columns='4' products={state.data || []} pageInfo={{ page: 0, size: 1000 }} />
      }
    </>
  )
}

export default Home