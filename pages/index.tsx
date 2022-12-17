import Loading from '~/components/Loading'
import ProductGrid from '~/components/ProductGrid'
import Slider from '~/components/Slider'
import useFetch from '~/hooks/useFetch'
import Row from '~/primitive/Row'
import Text from '~/primitive/Text'
import { IProduct } from '~/types/product'

const Home = () => {
  const state = useFetch<{ products: IProduct[] }>('https://dummyjson.com/products')

  return (
    <>
      <Slider />

      <Row horizontal='center' css={{ marginVertical: '$20' }}>
        <Text type='7' bold onClick={() => { }} css={{ marginRight: '$50', color: true ? 'black' : 'gray' }}>Best Sellers</Text>
        <Text type='7' bold onClick={() => { }} css={{ marginRight: '$50', color: false ? 'black' : 'gray' }}>New Arrivals</Text>
        <Text type='7' bold onClick={() => { }} css={{ marginRight: '$50', color: false ? 'black' : 'gray' }}>Hot Sales</Text>
      </Row>

      {state.loading ? <Loading size='50' /> :
        <ProductGrid columns='4' products={state.data?.products || []} pageInfo={{ page: 0, size: 1000 }} />
      }
    </>
  )
}

export default Home